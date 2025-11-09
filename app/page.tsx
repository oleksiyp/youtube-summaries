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

    // Redirect to appropriate language
    router.replace(`/${targetLanguage}`);
  }, [router]);

  // Show loading state while redirecting
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );
}
