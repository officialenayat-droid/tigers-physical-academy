import type { NextConfig } from "next";

/**
 * Default: normal Next.js server build (Hostinger Node.js / Git deploy, Vercel).
 *   npm run build && npm start
 *
 * STATIC_EXPORT=1 (npm run build:static): plain HTML/CSS/JS in /out for
 * shared hosting without Node.js. Upload the contents of /out to public_html.
 */
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isStatic && { output: "export" as const, trailingSlash: true }),
  images: {
    // No image server in a static export, so serve images as-is there.
    unoptimized: isStatic,
    formats: ["image/avif", "image/webp"],
    // Unsplash placeholders. Remove once all images are Tiger's own (in /public/images).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
