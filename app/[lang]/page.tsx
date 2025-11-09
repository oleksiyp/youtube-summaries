import Link from 'next/link';
import { use } from 'react';
import { getAllPosts } from '@/lib/posts';
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
  const posts = getAllPosts(lang);
  const t = getTranslation(lang);
  const currentLang = getLanguageByCode(lang);

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

      <main className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.allPosts}</h2>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              No summaries yet. Add markdown files like <code>post-name.{lang}.md</code> to the content/ directory.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 max-w-4xl">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <Link href={`/${lang}/${post.slug}`}>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 hover:text-blue-600">
                    {post.title}
                  </h3>
                </Link>
                {post.date && (
                  <p className="text-sm text-gray-500 mb-3">
                    {t.published}: {new Date(post.date).toLocaleDateString(lang)}
                  </p>
                )}
                <div className="flex items-center gap-4">
                  {post.videoUrl && (
                    <a
                      href={post.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      {t.videoLink} →
                    </a>
                  )}
                  {post.availableLanguages.length > 1 && (
                    <span className="text-xs text-gray-500">
                      {t.availableIn}: {post.availableLanguages.map(l => getLanguageByCode(l)?.flag || l).join(' ')}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
