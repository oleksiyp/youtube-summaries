/**
 * Finds videos summarized more than once and keeps the best version.
 *
 * Re-summarizing a video that was already on the blog produces a second post
 * under a different slug — same video, different title, both live. This groups
 * posts by the videoId in their frontmatter and decides which copy to keep.
 *
 * Decision order:
 *   1. Language coverage — a post available in more languages wins outright.
 *   2. Quality — judging whether the longer summary is more complete or merely
 *      more padded needs a reader, not a formula. The structural score below is
 *      a weak stand-in and has been observed preferring the worse article, so
 *      prefer having an assistant you already pay for read both versions and
 *      decide; run with --no-llm and treat its output as a worklist.
 *
 *   node scripts/dedupe-posts.mjs --no-llm        # list the duplicates
 *   node scripts/dedupe-posts.mjs --apply         # delete the losing copies
 *
 * ANTHROPIC_API_KEY, if set, makes it compare the versions itself.
 */
import { readFileSync, readdirSync, unlinkSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');
const apply = process.argv.includes('--apply');
const useLlm = !process.argv.includes('--no-llm') && !!process.env.ANTHROPIC_API_KEY;
const MODEL = process.env.MODEL ?? 'claude-opus-4-8';

const videoId = (url = '') =>
  (url.match(/[?&]v=([A-Za-z0-9_-]{11})/) ?? url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/))?.[1] ?? null;

/** slug -> { lang -> {file, data, content} } */
const posts = {};
for (const file of readdirSync(contentDir).filter((f) => f.endsWith('.md'))) {
  const m = file.match(/^(.+)\.([a-z]{2})\.md$/);
  if (!m) continue;
  (posts[m[1]] ??= {})[m[2]] = { file, ...matter(readFileSync(join(contentDir, file), 'utf8')) };
}

const byVideo = {};
for (const [slug, langs] of Object.entries(posts)) {
  const first = Object.values(langs)[0];
  const id = videoId(first.data.videoUrl);
  if (id) (byVideo[id] ??= []).push(slug);
}

const duplicates = Object.entries(byVideo).filter(([, slugs]) => slugs.length > 1);
console.log(
  `${Object.keys(posts).length} posts, ${Object.keys(byVideo).length} videos, ` +
    `${duplicates.length} summarized more than once`,
);
if (duplicates.length === 0) process.exit(0);

/** Structural richness — a stand-in for quality when no model is available. */
function score(slug) {
  const en = posts[slug].en ?? Object.values(posts[slug])[0];
  const b = en.content;
  const words = b.split(/\s+/).length;
  const headings = (b.match(/^#{2,3} /gm) ?? []).length;
  const listItems = (b.match(/^\s*(?:[-*]|\d+\.) /gm) ?? []).length;
  // Headings and lists indicate a summary that is organized rather than a wall
  // of text; length is capped so a padded piece can't win on bulk alone.
  return Math.min(words, 4000) / 100 + headings * 3 + Math.min(listItems, 60);
}

async function askLlm(slugs) {
  const versions = slugs.map((slug, i) => {
    const en = posts[slug].en ?? Object.values(posts[slug])[0];
    return `### Version ${i + 1}\nTitle: ${en.data.title}\n\n${en.content.slice(0, 12000)}`;
  });
  const system = [
    'You compare two summaries of the SAME video and choose the better one for a blog.',
    'Judge completeness of coverage, accuracy of structure, and readability.',
    'Longer is not automatically better — prefer the version that covers the video more fully without padding or repetition.',
    '',
    'Reply with exactly two lines:',
    'WINNER: <1 or 2>',
    'REASON: <one sentence>',
  ].join('\n');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 500,
      system,
      messages: [{ role: 'user', content: versions.join('\n\n') }],
    }),
  });
  if (!res.ok) {
    console.warn(`  (model call failed: ${res.status}; falling back to the heuristic)`);
    return null;
  }
  const text = (await res.json()).content.filter((b) => b.type === 'text').map((b) => b.text).join('');
  const winner = Number(text.match(/WINNER:\s*(\d)/i)?.[1]);
  const reason = text.match(/REASON:\s*(.+)/i)?.[1]?.trim() ?? '';
  return Number.isFinite(winner) && slugs[winner - 1] ? { slug: slugs[winner - 1], reason } : null;
}

const removals = [];
for (const [id, slugs] of duplicates) {
  console.log(`\nvideo ${id}`);
  for (const slug of slugs) {
    const langs = Object.keys(posts[slug]).sort().join(',');
    console.log(`  ${slug}\n     langs=${langs} score=${score(slug).toFixed(0)}`);
  }

  const byLangs = [...slugs].sort((a, b) => Object.keys(posts[b]).length - Object.keys(posts[a]).length);
  const topLangs = Object.keys(posts[byLangs[0]]).length;
  const contenders = slugs.filter((s) => Object.keys(posts[s]).length === topLangs);

  let keep, why;
  if (contenders.length === 1) {
    keep = contenders[0];
    why = 'available in more languages';
  } else if (useLlm) {
    const verdict = await askLlm(contenders);
    if (verdict) {
      keep = verdict.slug;
      why = verdict.reason;
    }
  }
  if (!keep) {
    keep = contenders.reduce((a, b) => (score(b) > score(a) ? b : a));
    why ??= 'richer structure and coverage';
  }

  console.log(`  KEEP  ${keep}\n        (${why})`);
  for (const slug of slugs) {
    if (slug === keep) continue;
    console.log(`  DROP  ${slug}`);
    removals.push(...Object.values(posts[slug]).map((v) => v.file));
  }
}

if (!apply) {
  console.log(`\nDry run — would delete ${removals.length} files. Re-run with --apply.`);
  process.exit(0);
}
for (const file of removals) unlinkSync(join(contentDir, file));
console.log(`\nDeleted ${removals.length} files. Run \`npm run generate:tags\` and commit.`);
