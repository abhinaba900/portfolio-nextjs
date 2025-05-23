import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // set static image imports to true
  images: {
    path: "portfolio-nextjs",
  },

  output: "export",
  distDir: "build",
};

export default nextConfig;
