import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep Next from treating the home directory package-lock as this app's workspace root.
  outputFileTracingRoot: __dirname,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
    ],
  },
};

export default nextConfig;
