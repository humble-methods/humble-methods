import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns:[
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org'
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net'
      }
    ]
  }
};

export default nextConfig;
