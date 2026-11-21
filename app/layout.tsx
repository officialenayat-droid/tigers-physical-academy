import type { Metadata, Viewport } from "next";
import { Oswald, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { site } from "@/lib/site";

const oswald = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-oswald", display: "swap" });
const barlow = Barlow({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-barlow", display: "swap" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-barlow-condensed", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "calisthenics Kashmir",
    "calisthenics Srinagar",
    "Tiger's Physical Academy",
    "Imran Ahmad Tiger",
    "parkour Srinagar",
    "self defence classes Srinagar girls",
    "army police fitness training Kashmir",
    "Bemina gym",
    "The Mountain People",
  ],
  authors: [{ name: "Imran Ahmad “Tiger”" }],
  openGraph: { type: "website", locale: "en_IN", siteName: site.name, url: site.url, title: site.name, description: site.description, images: [{ url: "/og.png", width: 1200, height: 630, alt: site.tagline }] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description, images: ["/og.png"] },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.contact.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  founder: { "@type": "Person", name: "Imran Ahmad", alternateName: "Tiger", sameAs: [site.instagram[0].url] },
  foundingDate: "2021",
  sameAs: site.instagram.map((i) => i.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${oswald.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <a href="#main" className="label sr-only z-[100] bg-gold-bright px-4 py-3 text-xs text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
          Skip to content
        </a>
        <Providers>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </Providers>
        <div className="grain" aria-hidden />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
