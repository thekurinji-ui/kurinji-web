import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Add remote domains here as products ship real assets
    // (e.g. cdn.kurinji.asia) instead of widening this per-product.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.kurinji.asia",
      },
    ],
  },
};

export default nextConfig;
