import type { NextConfig } from "next";

// Read basePath from environment variable (empty string for root path deployment)
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ["localhost", "10.8.10.51"],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
