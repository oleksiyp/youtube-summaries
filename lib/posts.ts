import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getLanguageCodes } from '@/config/languages';

export interface Post {
  slug: string;
  title: string;
  description?: string;
  date: string;
  videoUrl: string;
  language: string;
  content: string;
  availableLanguages: string[];
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
      date: data.date || '',
      videoUrl: data.videoUrl || '',
      language: langToUse,
      content,
      availableLanguages,
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
export function getAllPostsWithTranslations(): Map<string, string[]> {
  const slugs = getAllPostSlugs();
  const postsMap = new Map<string, string[]>();

  slugs.forEach(slug => {
    const languages = getAvailableLanguages(slug);
    postsMap.set(slug, languages);
  });

  return postsMap;
}
