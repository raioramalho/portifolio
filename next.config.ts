import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'cloud.raiosystems.tech',
      },
      {
        protocol: 'https',
        hostname: 'bucket.raiosystems.tech',
      }
      
    ],
  },
};

export default nextConfig;
