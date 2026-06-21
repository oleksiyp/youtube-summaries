export interface LanguageConfig {
  code: string;
  name: string;
  flag: string;
}

export const languages: LanguageConfig[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
];

export const defaultLanguage = 'en';

export function getLanguageByCode(code: string): LanguageConfig | undefined {
  return languages.find(lang => lang.code === code);
}

export function getLanguageCodes(): string[] {
  return languages.map(lang => lang.code);
}
