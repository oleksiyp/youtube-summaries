'use client';

import { useRouter, usePathname } from 'next/navigation';
import { languages, getLanguageByCode } from '@/lib/i18n';

interface LanguageSelectorProps {
  currentLang: string;
}

export function LanguageSelector({ currentLang }: LanguageSelectorProps) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLanguage = getLanguageByCode(currentLang);

  const handleLanguageChange = (newLang: string) => {
    // Replace the language code in the current path
    const newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <div className="relative">
      <select
        value={currentLang}
        onChange={(e) => handleLanguageChange(e.target.value)}
        className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.flag} {lang.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
}
