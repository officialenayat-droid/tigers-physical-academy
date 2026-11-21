# Tiger's Physical Academy: Website

Cinematic, mobile-first website for **Tiger's Physical Academy**, Srinagar: *Kashmir's First Calisthenics & Physical Academy*, founded by Imran Ahmad “Tiger”.

**Stack:** Next.js 16 (App Router, TypeScript) · Tailwind CSS 4 · Framer Motion · next/image · next/font

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
```

Production build:

```bash
npm run build
npm start
```

## Project structure

```
app/                  Routes: / · /academy · /store · /mountain-people · /contact
  layout.tsx          Fonts, global metadata, JSON-LD, navbar, footer, film grain
  globals.css         Design tokens (colours, fonts) + signature utilities
  sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
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
```

## Before launch: replace placeholders

Search the codebase for `TODO` to find every placeholder.

| What | Where |
| --- | --- |
| **Founder photo.** `public/images/imran_tiger.jpg` is currently a labelled placeholder. Drop the real photo in with the same filename. Adjust `images.founder.position` if his face needs re-centring. | `public/images/`, `lib/images.ts` |
| Phone / WhatsApp (+91 98765 43210 is **fake**), email | `lib/site.ts` |
| Production domain (or set `NEXT_PUBLIC_SITE_URL`) | `lib/site.ts` |
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

## Deploy to Vercel

**Option A: Git (recommended)**
1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository. Vercel detects Next.js automatically, so no settings are needed.
3. (Optional) Add the environment variable `NEXT_PUBLIC_SITE_URL=https://your-domain.com`.
4. Click **Deploy**. Every later push redeploys the site.
5. To add a custom domain: Project → Settings → Domains.

**Option B: CLI**
```bash
npm i -g vercel
```
```bash
vercel          # preview deploy
```
```bash
vercel --prod   # production deploy
```

## Notes
- Animations respect `prefers-reduced-motion`.
- SEO: per-page metadata, canonical URLs, OpenGraph/Twitter cards, generated OG image, `sitemap.xml`, `robots.txt` and LocalBusiness (SportsActivityLocation) JSON-LD.
