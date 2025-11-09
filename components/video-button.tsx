'use client';

import { useState } from 'react';

interface VideoButtonProps {
  videoUrl: string;
  children: React.ReactNode;
}

export function VideoButton({ videoUrl, children }: VideoButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 px-6 py-3 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg"
      style={{
        backgroundColor: isHovered ? 'var(--color-accent-hover)' : 'var(--color-accent)',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
}
