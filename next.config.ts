import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    domains: [],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.creadive.az',
          },
        ],
        destination: 'https://creadive.az/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'http://creadive.az',
          },
        ],
        destination: 'https://creadive.az/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
