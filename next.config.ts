import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Hostinger shared hosting: `npm run build` writes plain
  // HTML/CSS/JS to /out, which you upload to public_html.
  output: "export",
  // /academy -> /academy/index.html, so Apache serves every route without rewrites.
  trailingSlash: true,
  images: {
    // No image server on shared hosting; images are served as-is.
    unoptimized: true,
    // Unsplash placeholders. Remove once all images are Tiger's own (in /public/images).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
