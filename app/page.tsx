import Link from 'next/link';
import { languages } from '@/lib/i18n';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            YouTube Video Summaries
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            Choose your language to read video summaries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <Link
                key={lang.code}
                href={`/${lang.code}`}
                className="block p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{lang.flag}</div>
                <h2 className="text-2xl font-semibold text-gray-800">{lang.name}</h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
