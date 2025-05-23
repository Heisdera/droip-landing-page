import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  compiler: {
    removeConsole: !isDev,
  },
};

export default nextConfig;
