export const dynamic = "force-static";

import type { MetadataRoute } from "next";
import { nav, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: new URL(n.href, site.url).toString(),
    lastModified: new Date(),
    changeFrequency: n.href === "/" ? "weekly" : "monthly",
    priority: n.href === "/" ? 1 : 0.8,
  }));
}
