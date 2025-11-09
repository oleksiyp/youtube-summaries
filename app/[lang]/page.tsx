import Link from 'next/link';
import { use } from 'react';
import { getPostsGroupedByYear } from '@/lib/posts';
import { getTranslation, getLanguageByCode } from '@/lib/i18n';
import { getLanguageCodes } from '@/config/languages';
import { LanguageSelector } from '@/components/language-selector';

export function generateStaticParams() {
  return getLanguageCodes().map((lang) => ({ lang }));
}

export default function LanguagePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = use(params);
  const postsByYear = getPostsGroupedByYear(lang);
  const t = getTranslation(lang);

  return (
    <div className="min-h-screen bg-[var(--color-background)]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-semibold tracking-tight text-[var(--color-text-primary)]">
              {t.title}
            </h1>
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 lg:px-8 py-16">
        {postsByYear.length === 0 ? (
          <div className="text-center py-24">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-surface)] mb-6">
              <svg className="w-8 h-8 text-[var(--color-text-tertiary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="text-headline mb-3">No summaries yet</h2>
            <p className="text-body max-w-md mx-auto">
              Add markdown files like <code className="bg-[var(--color-surface)] px-2 py-1 rounded text-sm">post-name.{lang}.md</code> to the content/ directory.
            </p>
          </div>
        ) : (
          <div className="space-y-20">
            {postsByYear.map(({ year, posts }) => (
              <section key={year} className="space-y-8">
                {/* Year Header */}
                <div className="flex items-center gap-6">
                  <h2 className="text-5xl font-semibold tracking-tight text-[var(--color-text-primary)]">
                    {year}
                  </h2>
                  <div className="flex-1 h-px bg-gradient-to-r from-[var(--color-border)] to-transparent"></div>
                </div>

                {/* Posts Grid */}
                <div className="space-y-6">
                  {posts.map((post) => {
                    const showLanguageLabel = post.language !== lang;
                    const languageLabel = showLanguageLabel
                      ? getLanguageByCode(post.language)
                      : null;

                    return (
                      <Link
                        key={post.slug}
                        href={`/${lang}/${post.slug}`}
                        className="block group"
                      >
                        <article className="card p-8 hover:shadow-xl transition-all duration-300">
                          <div className="flex flex-col gap-4">
                            {/* Title and Language Badge */}
                            <div className="flex items-start gap-3">
                              <h3 className="text-title flex-1 text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                                {post.title}
                              </h3>
                              {showLanguageLabel && languageLabel && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                  {languageLabel.flag} {languageLabel.code.toUpperCase()}
                                </span>
                              )}
                            </div>

                            {/* Description */}
                            {post.description && (
                              <p className="text-body line-clamp-2">
                                {post.description}
                              </p>
                            )}

                            {/* Metadata */}
                            <div className="flex items-center gap-6 text-caption">
                              {post.date && (
                                <time
                                  dateTime={post.date}
                                  className="flex items-center gap-2"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                  {new Date(post.date).toLocaleDateString(lang, {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                  })}
                                </time>
                              )}
                              {post.videoUrl && (
                                <span className="flex items-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                                  </svg>
                                  Video
                                </span>
                              )}
                              {post.availableLanguages.length > 1 && (
                                <span className="flex items-center gap-1.5">
                                  {post.availableLanguages.map((l) => (
                                    <span key={l}>{getLanguageByCode(l)?.flag}</span>
                                  ))}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Hover indicator */}
                          <div className="mt-4 pt-4 border-t border-transparent group-hover:border-[var(--color-border)] transition-colors">
                            <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity">
                              Read summary
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </span>
                          </div>
                        </article>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)] mt-24">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12">
          <p className="text-caption text-center">
            YouTube Video Summaries
          </p>
        </div>
      </footer>
    </div>
  );
}
