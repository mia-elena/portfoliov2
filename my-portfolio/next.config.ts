import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 's29068.pcdn.co',
      },
      {
        protocol: 'https',
        hostname: 'oit.caes.uga.edu',
      },
    ],
  },
};

export default nextConfig;