import { languages, defaultLanguage, getLanguageByCode } from '@/config/languages';

export { languages, defaultLanguage, getLanguageByCode };

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    title: 'YouTube Video Summaries',
    allPosts: 'All Summaries',
    videoLink: 'Watch Video',
    published: 'Published',
    back: 'Back to all summaries',
    availableIn: 'Available in',
    notAvailableInLanguage: 'This summary is not available in your language. Showing',
  },
  ru: {
    title: 'Конспекты видео с YouTube',
    allPosts: 'Все конспекты',
    videoLink: 'Смотреть видео',
    published: 'Опубликовано',
    back: 'Вернуться ко всем конспектам',
    availableIn: 'Доступно на',
    notAvailableInLanguage: 'Этот конспект недоступен на вашем языке. Показан',
  },
  pl: {
    title: 'Streszczenia filmów z YouTube',
    allPosts: 'Wszystkie streszczenia',
    videoLink: 'Obejrzyj film',
    published: 'Opublikowano',
    back: 'Powrót do wszystkich streszczeń',
    availableIn: 'Dostępne w',
    notAvailableInLanguage: 'To streszczenie nie jest dostępne w Twoim języku. Pokazano',
  },
};

export function getTranslation(languageCode: string) {
  return translations[languageCode] || translations[defaultLanguage];
}

export function getLanguageName(code: string): string {
  const lang = getLanguageByCode(code);
  return lang?.name || code;
}
