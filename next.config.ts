import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  experimental: {
    serverActions:{
      bodySizeLimit: '10mb',
    }
  }
};

export default nextConfig;
