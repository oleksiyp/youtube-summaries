'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { defaultLanguage, getLanguageCodes } from '@/config/languages';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Get browser language preference
    const browserLang = navigator.language.split('-')[0].toLowerCase();

    // Check if browser language is supported
    const supportedLanguages = getLanguageCodes();
    const targetLanguage = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;

    // Small delay to ensure page is loaded
    const timer = setTimeout(() => {
      router.replace(`/${targetLanguage}`);
    }, 100);

    return () => clearTimeout(timer);
  }, [router]);

  // Show loading state while redirecting
  // Also include noscript fallback
  return (
    <>
      <noscript>
        <meta httpEquiv="refresh" content={`0; url=/youtube-summaries/${defaultLanguage}`} />
      </noscript>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
          <noscript>
            <p className="text-sm text-gray-500 mt-4">
              JavaScript is required. <a href={`/youtube-summaries/${defaultLanguage}`} className="text-blue-600 underline">Click here</a> if not redirected.
            </p>
          </noscript>
        </div>
      </div>
    </>
  );
}
