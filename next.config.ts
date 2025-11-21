import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./next-intl.config.ts");

const nextConfig: NextConfig = {
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.facebook.com",
      },
      {
        protocol: "https",
        hostname: "creadive.az",
      },
      // After final deployment, change protocol to https
      {
        protocol: "http",
        hostname: "207.180.254.207",
      },
      {
        protocol: "http",
        hostname: "backend.creadive.az",
      },
      {
        protocol: "https",
        hostname: "backend.creadive.az",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "react-icons"],
  },
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.creadive.az",
          },
        ],
        destination: "https://creadive.az/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "http://creadive.az",
          },
        ],
        destination: "https://creadive.az/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
