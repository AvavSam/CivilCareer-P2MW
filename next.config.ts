import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
      },
      {
        hostname: "discovere.org",
      },
      {
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
      {
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

export default nextConfig;
