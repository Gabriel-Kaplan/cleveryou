import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
    ignoreDuringBuilds: true,
},
  typescript:{
    ignoreBuildErrors: true
  },
  images:{
    remotePatterns:[
      {hostname: 'img.clerk.com', }
    ]
  }
};

export default nextConfig;
