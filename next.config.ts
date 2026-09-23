import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.odysseyeg.com', pathname: '/wp-content/uploads/**' },
    ],
  },
};

export default nextConfig;
