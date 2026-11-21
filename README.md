# Tiger's Physical Academy: Website

Cinematic, mobile-first website for **Tiger's Physical Academy**, Srinagar: *Kashmir's First Calisthenics & Physical Academy*, founded by Imran Ahmad “Tiger”.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS 4 · Framer Motion · next/image · next/font

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build (static export):

```bash
npm run build      # writes the finished site to /out
npm start          # preview /out locally
```

## Project structure

```
app/                  Routes: / · /academy · /store · /mountain-people · /contact
  layout.tsx          Fonts, global metadata, JSON-LD, navbar, footer, film grain
  globals.css         Design tokens (colours, fonts) + signature utilities
  sitemap.ts, robots.ts, icon.svg
components/           Navbar, Footer, PageHero, ProductCard, StoreGrid, ContactForm…
  home/               Home page sections (Hero, Founder, Mission, Disciplines…)
  ui/                 Button, Reveal, SplitText, Letterbox, ParallaxImage, HexLogo, Icons
lib/
  site.ts             Name, contact details, address, Instagram handles, nav
  images.ts           EVERY image on the site in one file
  products.ts         Store catalogue
  testimonials.ts     Trainee quotes
  content.ts          Disciplines, routine, standards, batches, drills, gallery, press
public/images/        Local images (imran_tiger.jpg)
public/og.png         Social share image
public/.htaccess      Apache config for Hostinger (404 page, HTTPS, caching)
```

## Before launch: replace placeholders

Search the codebase for `TODO` to find every placeholder.

| What | Where |
| --- | --- |
| **Founder photo.** `public/images/imran_tiger.jpg` is currently a labelled placeholder. Drop the real photo in with the same filename. Adjust `images.founder.position` if his face needs re-centring. | `public/images/`, `lib/images.ts` |
| Phone / WhatsApp (+91 98765 43210 is **fake**), email | `lib/site.ts` |
| **Production domain**: set it to your Hostinger domain before building, or SEO links and the share image will point to the wrong site | `lib/site.ts` → `url` |
| Product names, prices, images | `lib/products.ts` |
| Batch dates, timings, seat counts | `lib/content.ts` → `nextBatch` |
| Daily routine times, physical standards, success stories | `lib/content.ts` |
| Mountain People drills, locations, stats | `lib/content.ts`, `app/mountain-people/page.tsx` |
| **Testimonials.** The Akrar-ul-Haq and Imran Ahmad Lone quotes are *paraphrased* from press coverage. Verify them or replace them with real, approved quotes. Also re-check the Kamran Khaliq wording. | `lib/testimonials.ts` |
| Mission quote wording | `components/home/MissionBand.tsx` |
| Unsplash placeholder photos → Tiger's own photos | `lib/images.ts` (change the paths only) |

### Swapping images
Put files in `public/images/` and edit `lib/images.ts`, e.g.

```ts
hero: { src: "/images/hero.jpg", alt: "Tiger on the bars at Bemina", position: "50% 30%" },
```

Once no Unsplash images remain, you can remove `remotePatterns` from `next.config.ts`.

## Store and contact (no backend yet)
- **Store:** filter, Add to Cart and the cart total are UI only (local state). Connect Shopify, Razorpay or similar later.
- **Contact form:** checks the fields, then opens WhatsApp with the enquiry pre-filled. No server is needed.

## Deploy to Hostinger (shared hosting)

The site is a **static export**: `npm run build` produces plain HTML, CSS and JS in `/out`. No Node.js is needed on the server.

1. Set your domain in `lib/site.ts` (`url: "https://yourdomain.com"`).
2. Build on your computer:
   ```bash
   npm install
   ```
   ```bash
   npm run build
   ```
3. In Hostinger **hPanel → Websites → Manage → File Manager**, open `public_html` and delete the default `default.php` / `index.php` if present.
4. Upload **everything inside** `/out` (not the folder itself) into `public_html`. Easiest: zip the contents of `out`, upload the zip, then right-click → **Extract**.
5. Make sure the hidden `.htaccess` file was uploaded too (File Manager → Settings → show hidden files).
6. Visit your domain. Enable free SSL in hPanel → **Security → SSL** if it isn't on yet.

To update the site later, rebuild and re-upload the contents of `/out`.

**Optional: auto-deploy from GitHub.** hPanel → **Advanced → Git** can pull this repository into `public_html`, but it doesn't run `npm run build`. If you want that, build locally and commit the `/out` folder to a separate branch, or use a GitHub Action to build and FTP-upload `/out`.

## Deploy to Vercel (alternative)

Import the repository at [vercel.com/new](https://vercel.com/new) and click **Deploy**. The static export works there unchanged.

## Notes
- Animations respect `prefers-reduced-motion`.
- SEO: per-page metadata, canonical URLs, OpenGraph/Twitter cards, generated OG image, `sitemap.xml`, `robots.txt` and LocalBusiness (SportsActivityLocation) JSON-LD.
