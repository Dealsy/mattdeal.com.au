import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "cdn.sanity.io",
    },
  ],
  experimental: {
    esmExternals: "loose", // required for Sanity Studio
  },
};

export default nextConfig;
