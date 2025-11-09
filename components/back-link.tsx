'use client';

import Link from 'next/link';
import { useState } from 'react';

interface BackLinkProps {
  href: string;
  children: React.ReactNode;
}

export function BackLink({ href, children }: BackLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
      style={{ color: isHovered ? 'var(--color-accent)' : 'var(--color-text-secondary)' }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </Link>
  );
}
