import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/youtube-summaries',
  assetPrefix: '/youtube-summaries',
};

export default nextConfig;
