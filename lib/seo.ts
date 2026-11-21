import type { Metadata } from "next";
import { site } from "./site";

type PageSeo = { title: string; description: string; path: string; image?: string };

/** Per-page metadata helper: canonical URL, OpenGraph and Twitter cards. */
export function pageMetadata({ title, description, path, image }: PageSeo): Metadata {
  const url = new URL(path, site.url).toString();
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${site.name}`, description, url, siteName: site.name, type: "website", locale: "en_IN", ...(images && { images }) },
    twitter: { card: "summary_large_image", title: `${title} | ${site.name}`, description, ...(image && { images: [image] }) },
  };
}
