import type { NextConfig } from 'next';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/base44-alternatives/',
        destination: '/articles/base44-alternatives/',
        permanent: true,
      },
    ];
  },
};
export default nextConfig;
