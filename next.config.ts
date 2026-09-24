import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Temporary stock photos. Remove once real images live in /public/images.
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
