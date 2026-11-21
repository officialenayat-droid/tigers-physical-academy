import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import StoreGrid from "@/components/StoreGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Tactical Gear Store",
  description: "Apparel, load carry, footwear and survival gear from Tiger's Physical Academy and The Mountain People. Built for training and the mountains of Kashmir.",
  path: "/store",
});

const perks = [
  { k: "Field Tested", v: "Trained in at the academy and on the trail." },
  { k: "Made for Kashmir", v: "Built for snow, scree and river crossings." },
  { k: "Supports Youth", v: "Every order backs the academy's mission." },
];

export default function StorePage() {
  return (
    <>
      <PageHero
        file="04 / Store"
        eyebrow="Tactical Gear · TPA × The Mountain People"
        title={["Gear up.", { text: "Move out.", className: "text-gold-grad" }]}
        intro="Apparel, packs, boots and survival kit chosen by Tiger for training days and mountain missions."
        image={images.storeHero}
      />

      <section className="relative bg-ink pb-28 pt-16 md:pt-24" aria-label="Products">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="01" eyebrow="The Armoury" title={["Shop", { text: "the kit.", className: "text-cream/40" }]} />
          {/* Not wrapped in Reveal: transforms/filters on an ancestor would break the fixed cart pill. */}
          <div className="mt-10">
            <StoreGrid />
          </div>
        </div>
      </section>

      <section className="border-t border-gold/10 bg-coal" aria-label="Why our gear">
        <div className="mx-auto grid max-w-7xl gap-px bg-gold/10 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.1} className="bg-coal px-6 py-10 lg:px-8">
              <p className="font-display text-sm text-gold-bright">0{i + 1}</p>
              <p className="mt-2 font-display text-2xl uppercase">{p.k}</p>
              <p className="mt-2 text-sm text-cream/55">{p.v}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
