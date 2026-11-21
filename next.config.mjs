// Plain JavaScript (not .ts) on purpose: Hostinger's build servers can't run
// Next.js' native compiler (old glibc), and the WebAssembly fallback cannot
// compile a TypeScript config file.

/**
 * Default: normal Next.js server build (Hostinger Node.js / Git deploy, Vercel).
 *   npm run build && npm start
 *
 * STATIC_EXPORT=1 (npm run build:static): plain HTML/CSS/JS in /out for
 * shared hosting without Node.js. Upload the contents of /out to public_html.
 */
const isStatic = process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(isStatic && { output: "export", trailingSlash: true }),
  images: {
    // Serve images as-is. On-the-fly resizing needs the native `sharp` library,
    // which may not load on Hostinger's servers either. Keep your own photos
    // in /public/images reasonably sized (about 2000px wide, compressed JPG/WebP).
    unoptimized: true,
    // Unsplash placeholders. Remove once all images are Tiger's own (in /public/images).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
