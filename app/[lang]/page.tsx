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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">{t.title}</h1>
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {postsByYear.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No summaries yet. Add markdown files like <code className="bg-gray-200 px-2 py-1 rounded">post-name.{lang}.md</code> to the content/ directory.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {postsByYear.map(({ year, posts }) => (
              <section key={year}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-300">
                  {year}
                </h2>
                <div className="space-y-6">
                  {posts.map((post) => {
                    const showLanguageLabel = post.language !== lang;
                    const languageLabel = showLanguageLabel
                      ? getLanguageByCode(post.language)
                      : null;

                    return (
                      <article
                        key={post.slug}
                        className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                      >
                        <Link href={`/${lang}/${post.slug}`} className="block group">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors flex-1">
                              {post.title}
                              {showLanguageLabel && languageLabel && (
                                <span className="ml-2 text-sm font-normal text-gray-500 border border-gray-300 rounded px-2 py-0.5">
                                  [{languageLabel.code.toUpperCase()}]
                                </span>
                              )}
                            </h3>
                          </div>

                          {post.description && (
                            <p className="text-gray-600 text-sm leading-relaxed mb-3">
                              {post.description}
                            </p>
                          )}

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {post.date && (
                              <time dateTime={post.date}>
                                {new Date(post.date).toLocaleDateString(lang, {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}
                              </time>
                            )}
                            {post.videoUrl && (
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                </svg>
                                Video
                              </span>
                            )}
                            {post.availableLanguages.length > 1 && (
                              <span className="text-xs">
                                {post.availableLanguages.map(l => getLanguageByCode(l)?.flag).join(' ')}
                              </span>
                            )}
                          </div>
                        </Link>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
