/**
 * Consolidates the blog's tag vocabulary and rewrites every post's frontmatter.
 *
 * The tags were generated per-article in isolation, so almost every one is used
 * by a single post: 100 distinct tags across 18 posts, only 2 shared. That makes
 * tag pages dead ends. This clusters the existing keys onto a smaller set of
 * representatives, so posts start sharing tags.
 *
 * Only existing keys are ever chosen as representatives, so the localized labels
 * already present in the content are reused verbatim — nothing needs translating.
 *
 *   node scripts/consolidate-tags.mjs                  # dry run, shows the plan
 *   node scripts/consolidate-tags.mjs --apply          # rewrite the files
 *   node scripts/consolidate-tags.mjs --mapping m.json # use a mapping, no LLM
 *
 * Needs ANTHROPIC_API_KEY unless --mapping is given.
 */
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');
const apply = process.argv.includes('--apply');
const mappingArg = process.argv.indexOf('--mapping');
const MODEL = process.env.MODEL ?? 'claude-opus-4-8';
const TARGET = Number(process.env.TARGET_TAGS ?? 30);

/** posts[slug][lang] = { file, data, content } */
const posts = {};
for (const file of readdirSync(contentDir).filter((f) => f.endsWith('.md'))) {
  const m = file.match(/^(.+)\.([a-z]{2})\.md$/);
  if (!m) continue;
  const [, slug, lang] = m;
  const parsed = matter(readFileSync(join(contentDir, file), 'utf8'));
  (posts[slug] ??= {})[lang] = { file, ...parsed };
}

// key -> { labels: {lang: label}, posts: Set<slug> }
const vocab = new Map();
for (const [slug, langs] of Object.entries(posts)) {
  for (const [lang, { data }] of Object.entries(langs)) {
    const labels = Array.isArray(data.tags) ? data.tags.map(String) : [];
    const keys = Array.isArray(data.tagKeys) ? data.tagKeys.map(String) : [];
    keys.forEach((key, i) => {
      if (!key) return;
      const e = vocab.get(key) ?? { labels: {}, posts: new Set() };
      e.labels[lang] ??= labels[i] ?? key;
      e.posts.add(slug);
      vocab.set(key, e);
    });
  }
}

console.log(
  `${Object.keys(posts).length} posts, ${vocab.size} distinct tags, ` +
    `${[...vocab.values()].filter((v) => v.posts.size > 1).length} shared by more than one post`,
);

async function askForMapping() {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) {
    console.error('\nSet ANTHROPIC_API_KEY, or pass --mapping <file>.');
    process.exit(1);
  }
  const inventory = [...vocab.entries()]
    .map(([k, v]) => `${k} (${v.posts.size} post${v.posts.size > 1 ? 's' : ''}): ${v.labels.en ?? ''}`)
    .join('\n');

  const system = [
    `You are consolidating a blog's tag vocabulary.`,
    `You are given every tag currently in use. Group tags that mean substantially the same thing, or that are narrow instances of a broader topic, and choose ONE existing key from each group as its representative.`,
    `Aim for roughly ${TARGET} representatives. Prefer the broader, more reusable key as the representative — a tag should be able to collect several articles.`,
    `Every input key must appear exactly once on the left-hand side.`,
    `Representatives MUST be keys from the input list; never invent a new key.`,
    ``,
    `Output one mapping per line and nothing else:`,
    `old-key -> representative-key`,
  ].join('\n');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': key,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 8000,
      system,
      messages: [{ role: 'user', content: `Tags in use:\n\n${inventory}` }],
    }),
  });
  if (!res.ok) {
    console.error(`Anthropic ${res.status}: ${(await res.text()).slice(0, 300)}`);
    process.exit(1);
  }
  const body = await res.json();
  const text = body.content.filter((b) => b.type === 'text').map((b) => b.text).join('');

  const mapping = {};
  for (const line of text.split('\n')) {
    const m = line.match(/^\s*([a-z0-9-]+)\s*->\s*([a-z0-9-]+)\s*$/i);
    if (!m) continue;
    const [, from, to] = m;
    if (!vocab.has(from) || !vocab.has(to)) continue;
    mapping[from] = to;
  }
  return mapping;
}

const mapping =
  mappingArg !== -1
    ? JSON.parse(readFileSync(process.argv[mappingArg + 1], 'utf8'))
    : await askForMapping();

// Any key the model skipped maps to itself.
for (const key of vocab.keys()) mapping[key] ??= key;

const resulting = new Map();
for (const [slug, langs] of Object.entries(posts)) {
  const keys = Array.isArray(langs.en?.data.tagKeys) ? langs.en.data.tagKeys.map(String) : [];
  for (const k of new Set(keys.map((k) => mapping[k] ?? k))) {
    resulting.set(k, (resulting.get(k) ?? 0) + 1);
  }
}
const shared = [...resulting.values()].filter((c) => c > 1).length;
console.log(
  `\nAfter consolidation: ${resulting.size} distinct tags, ${shared} shared by more than one post`,
);
console.log('\nMost-used tags:');
for (const [k, c] of [...resulting.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15)) {
  console.log(`  ${String(c).padStart(2)}  ${k}  (${vocab.get(k)?.labels.en ?? ''})`);
}

if (!apply) {
  console.log('\nDry run. Re-run with --apply to rewrite the files.');
  process.exit(0);
}

let written = 0;
for (const [, langs] of Object.entries(posts)) {
  for (const [lang, { file, data, content }] of Object.entries(langs)) {
    const keys = Array.isArray(data.tagKeys) ? data.tagKeys.map(String) : [];
    if (keys.length === 0) continue;

    const newKeys = [];
    for (const k of keys) {
      const target = mapping[k] ?? k;
      if (!newKeys.includes(target)) newKeys.push(target);
    }
    // Labels come from the representative's own entry, so each language keeps
    // the wording already used elsewhere on the blog for that tag.
    const newLabels = newKeys.map((k) => vocab.get(k)?.labels[lang] ?? k);

    data.tags = newLabels;
    data.tagKeys = newKeys;
    writeFileSync(join(contentDir, file), matter.stringify(content, data));
    written++;
  }
}
console.log(`\nRewrote ${written} files. Run \`npm run generate:tags\` to refresh tags.json.`);
