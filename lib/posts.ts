import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getLanguageCodes } from '@/config/languages';

export interface Post {
  slug: string;
  title: string;
  description?: string;
  shortDescription?: string;
  date: string;
  videoUrl: string;
  channelName?: string;
  channelUrl?: string;
  language: string;
  content: string;
  availableLanguages: string[];
  tags: string[];
}

/**
 * URL-safe slug for a tag. Transliterates Cyrillic so Russian/Ukrainian tags
 * produce readable ASCII routes, and strips anything else non-alphanumeric.
 */
const TRANSLIT: Record<string, string> = {
  а: 'a', б: 'b', в: 'v', г: 'h', ґ: 'g', д: 'd', е: 'e', ё: 'e', є: 'ie',
  ж: 'zh', з: 'z', и: 'y', і: 'i', ї: 'i', й: 'i', к: 'k', л: 'l', м: 'm',
  н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'kh',
  ц: 'ts', ч: 'ch', ш: 'sh', щ: 'shch', ъ: '', ы: 'y', ь: '', э: 'e',
  ю: 'iu', я: 'ia',
};

export function tagSlug(tag: string): string {
  let out = '';
  for (const ch of tag.toLowerCase().trim()) out += TRANSLIT[ch] ?? ch;
  return out
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function normalizeTags(raw: unknown): string[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter((t): t is string => typeof t === 'string')
    .map((t) => t.trim())
    .filter(Boolean);
}

const contentDirectory = path.join(process.cwd(), 'content');

/**
 * Get all unique post slugs (without language extension)
 */
export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const slugs = new Set<string>();

  fileNames.forEach(fileName => {
    // Match files like: post-name.en.md, post-name.ru.md
    const match = fileName.match(/^(.+)\.[a-z]{2}\.md$/);
    if (match) {
      slugs.add(match[1]);
    }
  });

  return Array.from(slugs);
}

/**
 * Get available languages for a specific post slug
 */
export function getAvailableLanguages(slug: string): string[] {
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);
  const languages: string[] = [];

  fileNames.forEach(fileName => {
    // Match: slug.lang.md
    const match = fileName.match(/^(.+)\.([a-z]{2})\.md$/);
    if (match && match[1] === slug) {
      languages.push(match[2]);
    }
  });

  return languages;
}

/**
 * Get all posts for display, preferring requested language but showing all posts
 * This returns one post per slug, using the requested language if available
 */
export function getAllPosts(language: string): Post[] {
  const slugs = getAllPostSlugs();
  const posts: Post[] = [];

  slugs.forEach(slug => {
    const post = getPostBySlug(language, slug);
    if (post) {
      posts.push(post);
    }
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

/**
 * Get a specific post by slug and language
 * Falls back to first available language if translation not available
 */
export function getPostBySlug(language: string, slug: string): Post | null {
  const availableLanguages = getAvailableLanguages(slug);

  if (availableLanguages.length === 0) {
    return null;
  }

  // Try requested language first, then fall back to first available
  const langToUse = availableLanguages.includes(language)
    ? language
    : availableLanguages[0];

  try {
    const fullPath = path.join(contentDirectory, `${slug}.${langToUse}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract first paragraph as description if not provided
    const description = data.description || extractFirstParagraph(content);

    return {
      slug,
      title: data.title || slug,
      description,
      shortDescription: data.shortDescription,
      date: data.date || '',
      videoUrl: data.videoUrl || '',
      channelName: data.channelName,
      channelUrl: data.channelUrl,
      language: langToUse,
      content,
      availableLanguages,
      tags: normalizeTags(data.tags),
    };
  } catch {
    return null;
  }
}

/**
 * Extract first paragraph from markdown content for description
 */
function extractFirstParagraph(content: string): string {
  // Remove frontmatter if present
  const lines = content.split('\n');

  // Find first non-empty, non-heading line
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#') && !trimmed.startsWith('---')) {
      // Remove markdown formatting
      return trimmed
        .replace(/\*\*(.*?)\*\*/g, '$1') // bold
        .replace(/\*(.*?)\*/g, '$1')     // italic
        .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
        .substring(0, 200); // limit length
    }
  }

  return '';
}

/**
 * Group posts by year
 */
export interface PostsByYear {
  year: string;
  posts: Post[];
}

export function getPostsGroupedByYear(language: string): PostsByYear[] {
  const posts = getAllPosts(language);
  const groupedMap = new Map<string, Post[]>();

  posts.forEach(post => {
    if (!post.date) return;

    const year = new Date(post.date).getFullYear().toString();

    if (!groupedMap.has(year)) {
      groupedMap.set(year, []);
    }

    groupedMap.get(year)!.push(post);
  });

  // Convert to array and sort by year descending
  const grouped = Array.from(groupedMap.entries())
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => parseInt(b.year) - parseInt(a.year));

  return grouped;
}

/**
 * Get all posts with their available translations
 */
/**
 * All distinct tags for a language, with their slug, display label and count.
 */
export interface TagInfo {
  slug: string;
  label: string;
  count: number;
}

export function getAllTags(language: string): TagInfo[] {
  const bySlug = new Map<string, TagInfo>();
  for (const post of getAllPosts(language)) {
    for (const tag of post.tags) {
      const slug = tagSlug(tag);
      if (!slug) continue;
      const existing = bySlug.get(slug);
      if (existing) existing.count++;
      else bySlug.set(slug, { slug, label: tag, count: 1 });
    }
  }
  return Array.from(bySlug.values()).sort((a, b) =>
    b.count - a.count || a.label.localeCompare(b.label),
  );
}

/** Posts for a language that carry the given tag (matched by slug). */
export function getPostsByTag(language: string, slug: string): Post[] {
  return getAllPosts(language).filter((post) =>
    post.tags.some((t) => tagSlug(t) === slug),
  );
}

export function getAllPostsWithTranslations(): Map<string, string[]> {
  const slugs = getAllPostSlugs();
  const postsMap = new Map<string, string[]>();

  slugs.forEach(slug => {
    const languages = getAvailableLanguages(slug);
    postsMap.set(slug, languages);
  });

  return postsMap;
}
