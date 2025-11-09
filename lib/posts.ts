import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { getLanguageCodes } from '@/config/languages';

export interface Post {
  slug: string;
  title: string;
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
 * Get all posts for a specific language
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
 * Falls back to default language if translation not available
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

    return {
      slug,
      title: data.title || slug,
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
