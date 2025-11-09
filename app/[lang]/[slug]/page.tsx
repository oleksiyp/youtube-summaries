import Link from 'next/link';
import { use } from 'react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { getTranslation, getLanguageByCode, getLanguageName } from '@/lib/i18n';
import { getLanguageCodes } from '@/config/languages';
import { notFound } from 'next/navigation';
import { LanguageSelector } from '@/components/language-selector';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  const slugs = getAllPostSlugs();
  const langCodes = getLanguageCodes();

  // Generate params for all combinations of languages and slugs
  slugs.forEach(slug => {
    langCodes.forEach(lang => {
      params.push({ lang, slug });
    });
  });

  return params;
}

export default function PostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = use(params);
  const post = getPostBySlug(lang, slug);
  const t = getTranslation(lang);

  if (!post) {
    notFound();
  }

  const showLanguageWarning = post.language !== lang;

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link
              href={`/${lang}`}
              className="text-blue-600 hover:text-blue-800 inline-flex items-center"
            >
              ← {t.back}
            </Link>

            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          {showLanguageWarning && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded">
              <p className="text-sm text-yellow-800">
                {t.notAvailableInLanguage} <strong>{getLanguageName(post.language)}</strong>
              </p>
            </div>
          )}

          {post.availableLanguages.length > 1 && (
            <div className="mb-6 p-3 bg-blue-50 border border-blue-200 rounded">
              <p className="text-sm text-blue-800">
                {t.availableIn}: {post.availableLanguages.map(l => {
                  const lang = getLanguageByCode(l);
                  return (
                    <Link
                      key={l}
                      href={`/${l}/${slug}`}
                      className="inline-flex items-center ml-2 hover:underline"
                    >
                      {lang?.flag} {lang?.name}
                    </Link>
                  );
                })}
              </p>
            </div>
          )}

          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            {post.date && (
              <p className="text-sm text-gray-500 mb-2">
                {t.published}: {new Date(post.date).toLocaleDateString(post.language)}
              </p>
            )}
            {post.videoUrl && (
              <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                {t.videoLink}
              </a>
            )}
          </header>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </article>
      </main>
    </div>
  );
}

function formatMarkdown(content: string): string {
  // Simple markdown to HTML converter
  let html = content;

  // Headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Lists
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>');

  // Paragraphs
  html = html.split('\n\n').map(para => {
    if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li')) {
      return para;
    }
    return `<p>${para.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return html;
}
