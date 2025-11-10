import Link from 'next/link';
import { use } from 'react';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';
import { getTranslation, getLanguageByCode, getLanguageName } from '@/lib/i18n';
import { getLanguageCodes } from '@/config/languages';
import { notFound } from 'next/navigation';
import { LanguageSelector } from '@/components/language-selector';
import { BackLink } from '@/components/back-link';
import { VideoButton } from '@/components/video-button';

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  const slugs = getAllPostSlugs();
  const langCodes = getLanguageCodes();

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
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b" style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderColor: 'var(--color-border)'
      }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <BackLink href={`/${lang}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {t.back}
            </BackLink>
            <LanguageSelector currentLang={lang} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <article>
          {/* Language Warning */}
          {showLanguageWarning && (
            <div className="mb-8 p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-amber-900">
                  {t.notAvailableInLanguage} <strong>{getLanguageName(post.language)}</strong>
                </p>
              </div>
            </div>
          )}

          {/* Available Translations */}
          {post.availableLanguages.length > 1 && (
            <div className="mb-8 flex flex-wrap items-center gap-2">
              <span className="text-caption">
                {t.availableIn}:
              </span>
              {post.availableLanguages.map(l => {
                const langInfo = getLanguageByCode(l);
                const isActive = l === post.language;
                return (
                  <Link
                    key={l}
                    href={`/${l}/${slug}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                    style={{
                      backgroundColor: isActive ? 'var(--color-accent)' : 'var(--color-surface)',
                      color: isActive ? 'white' : 'var(--color-text-secondary)'
                    }}
                  >
                    {langInfo?.flag} {langInfo?.name}
                  </Link>
                );
              })}
            </div>
          )}

          {/* Article Header */}
          <header className="mb-12 pb-12 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h1 className="text-display mb-6">
              {post.title}
            </h1>

            {/* Short Description */}
            {post.shortDescription && (
              <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                {post.shortDescription}
              </p>
            )}

            {/* Metadata */}
            <div className="flex flex-wrap items-center gap-6 text-caption mb-6">
              {post.date && (
                <time
                  dateTime={post.date}
                  className="flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {new Date(post.date).toLocaleDateString(post.language, {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              )}
              {post.channelName && (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {post.channelUrl ? (
                    <a
                      href={post.channelUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[var(--color-accent)] transition-colors"
                    >
                      {post.channelName}
                    </a>
                  ) : (
                    post.channelName
                  )}
                </span>
              )}
            </div>

            {/* Video Link */}
            {post.videoUrl && (
              <VideoButton videoUrl={post.videoUrl}>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                </svg>
                {t.videoLink}
              </VideoButton>
            )}
          </header>

          {/* Article Content */}
          <div
            className="prose prose-lg"
            dangerouslySetInnerHTML={{ __html: formatMarkdown(post.content) }}
          />
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24" style={{ borderColor: 'var(--color-border)' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <BackLink href={`/${lang}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.back}
          </BackLink>
        </div>
      </footer>
    </div>
  );
}

function formatMarkdown(content: string): string {
  let html = content;

  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/^\* (.*$)/gim, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*<\/li>)/g, '<ul>$1</ul>');

  html = html.split('\n\n').map(para => {
    if (para.startsWith('<h') || para.startsWith('<ul') || para.startsWith('<li')) {
      return para;
    }
    return `<p>${para.replace(/\n/g, '<br>')}</p>`;
  }).join('\n');

  return html;
}
