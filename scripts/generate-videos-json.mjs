/**
 * Emits public/videos.json: which YouTube videos the blog already covers.
 *
 * The summarizer checks this before it starts, so re-sharing a video that is
 * already published costs nothing instead of spending a full multi-language run
 * and landing a duplicate post under a new slug.
 */
import { readFileSync, writeFileSync, readdirSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = join(root, 'content');
const outFile = join(root, 'public', 'videos.json');

const videoId = (url = '') =>
  (url.match(/[?&]v=([A-Za-z0-9_-]{11})/) ?? url.match(/youtu\.be\/([A-Za-z0-9_-]{11})/))?.[1] ?? null;

/** slug -> { langs:Set, title, videoId } */
const bySlug = {};
for (const file of readdirSync(contentDir).filter((f) => f.endsWith('.md'))) {
  const m = file.match(/^(.+)\.([a-z]{2})\.md$/);
  if (!m) continue;
  const [, slug, lang] = m;
  const { data } = matter(readFileSync(join(contentDir, file), 'utf8'));
  const id = videoId(String(data.videoUrl ?? ''));
  if (!id) continue;
  const entry = (bySlug[slug] ??= { slug, videoId: id, langs: new Set(), title: null });
  entry.langs.add(lang);
  // The English title is the one the app shows when warning about a duplicate.
  if (lang === 'en' || entry.title === null) entry.title = String(data.title ?? '');
}

const videos = Object.values(bySlug)
  .map(({ slug, videoId, langs, title }) => ({
    videoId,
    slug,
    title,
    langs: [...langs].sort(),
  }))
  .sort((a, b) => a.slug.localeCompare(b.slug));

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(
  outFile,
  JSON.stringify({ generatedAt: new Date().toISOString(), videos }, null, 0) + '\n',
);

const distinct = new Set(videos.map((v) => v.videoId)).size;
console.log(`videos.json: ${videos.length} posts covering ${distinct} videos`);
