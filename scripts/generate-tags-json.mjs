/**
 * Emits public/tags.json before the Next build: every tag key with its label in
 * each language, plus a post count.
 *
 * The Android summarizer fetches this to reuse the blog's existing vocabulary
 * instead of inventing fresh tags per article, which is what left the tag pages
 * full of one-post dead ends. Publishing it here keeps a single source of truth
 * and spares the app from downloading every markdown file to read frontmatter.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');
const outFile = join(root, 'public', 'tags.json');

/** Mirrors tagSlug() in lib/posts.ts. */
const TRANSLIT = {
  а:'a',б:'b',в:'v',г:'h',ґ:'g',д:'d',е:'e',ё:'e',є:'ie',ж:'zh',з:'z',и:'y',
  і:'i',ї:'i',й:'i',к:'k',л:'l',м:'m',н:'n',о:'o',п:'p',р:'r',с:'s',т:'t',
  у:'u',ф:'f',х:'kh',ц:'ts',ч:'ch',ш:'sh',щ:'shch',ъ:'',ы:'y',ь:'',э:'e',
  ю:'iu',я:'ia',
};
function tagSlug(tag) {
  let out = '';
  for (const ch of tag.toLowerCase().trim()) out += TRANSLIT[ch] ?? ch;
  return out
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');
}

const byKey = new Map();

for (const file of readdirSync(contentDir).filter((f) => f.endsWith('.md'))) {
  const m = file.match(/^(.+)\.([a-z]{2})\.md$/);
  if (!m) continue;
  const lang = m[2];
  const { data } = matter(readFileSync(join(contentDir, file), 'utf8'));
  const labels = Array.isArray(data.tags) ? data.tags.map(String) : [];
  const keys = Array.isArray(data.tagKeys) ? data.tagKeys.map(String) : [];

  labels.forEach((label, i) => {
    // Prefer the canonical English-derived key; fall back the way the blog does.
    const key = tagSlug(keys[i] || label);
    if (!key) return;
    if (!byKey.has(key)) byKey.set(key, { key, labels: {}, posts: {} });
    const entry = byKey.get(key);
    entry.labels[lang] ??= label;
    entry.posts[lang] = (entry.posts[lang] ?? 0) + 1;
  });
}

const tags = [...byKey.values()]
  .map(({ key, labels, posts }) => ({
    key,
    labels,
    count: Math.max(0, ...Object.values(posts)),
  }))
  .sort((a, b) => b.count - a.count || a.key.localeCompare(b.key));

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(
  outFile,
  JSON.stringify({ generatedAt: new Date().toISOString(), tags }, null, 0) + '\n',
);

const shared = tags.filter((t) => t.count > 1).length;
console.log(
  `tags.json: ${tags.length} tags (${shared} used by more than one post)`,
);
