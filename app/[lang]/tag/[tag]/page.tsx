import Link from 'next/link';
import { use } from 'react';
import type { Metadata } from 'next';
import { getAllTags, getPostsByTag } from '@/lib/posts';
import { getTranslation, getLanguageByCode } from '@/lib/i18n';
import { getLanguageCodes } from '@/config/languages';
import { LanguageSelector } from '@/components/language-selector';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  const params: { lang: string; tag: string }[] = [];
  for (const lang of getLanguageCodes()) {
    for (const tag of getAllTags(lang)) {
      params.push({ lang, tag: tag.slug });
    }
  }
  // `output: export` needs at least one path. Before tags are backfilled there
  // are none, so emit a sentinel that the page 404s on.
  if (params.length === 0) {
    return getLanguageCodes().slice(0, 1).map((lang) => ({ lang, tag: '_none' }));
  }
  return params;
}

function label(lang: string, slug: string): string {
  return getAllTags(lang).find((t) => t.slug === slug)?.label ?? slug;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; tag: string }>;
}): Promise<Metadata> {
  const { lang, tag } = await params;
  return { title: `#${label(lang, tag)}` };
}

export default function TagPage({
  params,
}: {
  params: Promise<{ lang: string; tag: string }>;
}) {
  const { lang, tag } = use(params);
  const t = getTranslation(lang);
  const posts = getPostsByTag(lang, tag);
  if (posts.length === 0) notFound();
  const tagLabel = label(lang, tag);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href={`/${lang}`}
              className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.back}
            </Link>
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        <h1 className="text-display mb-2">#{tagLabel}</h1>
        <p className="text-caption mb-12">
          {posts.length} {posts.length === 1 ? 'summary' : 'summaries'}
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/${lang}/${post.slug}`} className="block group">
              <article className="card p-8 hover:shadow-xl transition-all duration-300">
                <h3 className="text-title text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-3">
                  {post.title}
                </h3>
                {(post.shortDescription || post.description) && (
                  <p className="text-body line-clamp-3 mb-4">
                    {post.shortDescription || post.description}
                  </p>
                )}
                <div className="flex items-center gap-6 text-caption">
                  {post.date && (
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(lang, {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </time>
                  )}
                  {post.channelName && <span>{post.channelName}</span>}
                  {post.availableLanguages.length > 1 && (
                    <span className="flex items-center gap-1.5">
                      {post.availableLanguages.map((l) => (
                        <span key={l}>{getLanguageByCode(l)?.flag}</span>
                      ))}
                    </span>
                  )}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
