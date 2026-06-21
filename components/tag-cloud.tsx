import Link from 'next/link';
import { getAllTags } from '@/lib/posts';

/**
 * Collapsible tag-cloud navigation. Uses a native <details> element so it works
 * great on mobile (tap to expand) with no client JS. Chips scale by frequency.
 */
export function TagCloud({ lang, label }: { lang: string; label: string }) {
  const tags = getAllTags(lang).slice(0, 40);
  if (tags.length === 0) return null;
  const max = Math.max(...tags.map((t) => t.count));

  return (
    <details className="tag-cloud mb-12" open>
      <summary className="tag-cloud-summary">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
        </svg>
        {label}
        <span className="tag-cloud-count">{tags.length}</span>
      </summary>
      <div className="tag-cloud-chips">
        {tags.map((t) => (
          <Link
            key={t.key}
            href={`/${lang}/tag/${t.key}`}
            className="tag-chip"
            style={{ fontSize: `${(0.78 + 0.5 * (t.count / max)).toFixed(2)}rem` }}
          >
            #{t.label}
            <span style={{ opacity: 0.5, marginLeft: '0.35em' }}>{t.count}</span>
          </Link>
        ))}
      </div>
    </details>
  );
}
