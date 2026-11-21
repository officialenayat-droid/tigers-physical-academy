import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import ParallaxImage from "@/components/ui/ParallaxImage";
import Button from "@/components/ui/Button";
import MountainGallery from "@/components/MountainGallery";
import FinalCTA from "@/components/FinalCTA";
import { InstagramIcon, PinIcon } from "@/components/ui/Icons";
import { drills, mountainGallery } from "@/lib/content";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "The Mountain People Unit",
  description:
    "The Mountain People: an elite outdoor and wilderness unit led by CEO Imran “Tiger” Ahmad. Altitude conditioning, navigation, survival, river crossing, multi-day treks and night ops in Kashmir.",
  path: "/mountain-people",
});

const mp = site.instagram[2];

export default function MountainPeoplePage() {
  return (
    <>
      <PageHero
        tall
        file="03 / Unit"
        eyebrow="Elite Outdoor Unit · Kashmir Himalaya"
        title={["The", { text: "Mountain", className: "text-gold-grad" }, "People"]}
        intro="Led by CEO Imran “Tiger” Ahmad. Built for those who want more than a gym: jungle, glacier, river and ridge."
        image={images.mountain.hero}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" full>Apply to the Unit</Button>
          <Button href={mp.url} external variant="ghost" size="lg" arrow={false} full icon={<InstagramIcon className="h-4 w-4" />}>
            @{mp.handle}
          </Button>
        </div>
      </PageHero>

      {/* Wilderness description */}
      <section className="relative overflow-hidden bg-ink py-24 md:py-36" aria-label="About the unit">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <SectionHeading index="01" eyebrow="Into the Wild" title={["No roof.", { text: "No signal.", className: "text-cream/40" }, { text: "No excuses.", className: "text-gold-grad" }]} />
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg leading-relaxed text-cream/75">
                The Mountain People is Kashmir&apos;s elite outdoor and wilderness brand. Dense pine jungle, high-altitude meadows, glacial rivers and knife-edge ridges become the training ground.
              </p>
              <p className="mt-5 leading-relaxed text-cream/55">
                Every expedition is built on the strength foundations of Tiger&apos;s Physical Academy: bodyweight power, endurance and a calm head under pressure. You will learn to move, navigate and survive as a team.
              </p>
            </Reveal>
            <RevealGroup className="mt-10 grid grid-cols-3 gap-px bg-gold/15" stagger={0.08}>
              {/* TODO: placeholder figures */}
              {[
                { v: "4,000m", k: "Max altitude" },
                { v: "70km", k: "Longest trek" },
                { v: "24/7", k: "Field mindset" },
              ].map((s) => (
                <RevealItem key={s.k} className="bg-ink p-4">
                  <p className="font-display text-[clamp(1.5rem,4vw,2.25rem)] font-bold leading-none text-gold-bright">{s.v}</p>
                  <p className="label mt-2 text-[0.55rem] text-cream/50">{s.k}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
          <div className="relative grid grid-cols-2 gap-3 lg:col-span-6">
            <Reveal className="col-span-2" y={50}>
              <ParallaxImage src={images.mountain.forest.src} alt={images.mountain.forest.alt} className="relative aspect-[16/10]" sizes="(min-width:1024px) 50vw, 100vw" />
            </Reveal>
            <Reveal delay={0.1} y={50}>
              <ParallaxImage src={images.mountain.woods.src} alt={images.mountain.woods.alt} className="relative aspect-square" sizes="25vw" strength={16} />
            </Reveal>
            <Reveal delay={0.2} y={50}>
              <ParallaxImage src={images.mountain.camp.src} alt={images.mountain.camp.alt} className="relative aspect-square" sizes="25vw" strength={16} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Drills */}
      <section className="relative overflow-hidden border-y border-gold/10 bg-coal py-24 md:py-36" aria-label="Survival drills">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="02" eyebrow="Field Drills" title={["Six drills.", { text: "One unit.", className: "text-gold-grad" }]} intro="The core curriculum of every Mountain People expedition." />
          {/* TODO: drills and locations are placeholders, confirm with Tiger */}
          <RevealGroup className="mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-3" stagger={0.08}>
            {drills.map((d, i) => (
              <RevealItem key={d.code} className="h-full">
                <article className="brackets group relative h-full overflow-hidden border border-gold/15 bg-ink/70 p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 hover:bg-olive-deep/60 md:p-8">
                  <span aria-hidden className="pointer-events-none absolute -right-2 -top-6 font-display text-[7rem] font-bold leading-none text-outline-gold opacity-25 transition-all duration-700 group-hover:-translate-y-2 group-hover:opacity-60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="label text-[0.6rem] text-gold-bright">{d.code}</p>
                  <h3 className="mt-8 text-3xl font-bold">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{d.detail}</p>
                  <p className="label mt-6 flex items-center gap-2 border-t border-gold/10 pt-4 text-[0.58rem] text-cream/50">
                    <PinIcon className="h-3.5 w-3.5 text-gold" /> {d.location}
                  </p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Gallery */}
      <section className="relative bg-ink pt-24 md:pt-36 lg:pb-0" aria-label="Gallery">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="03" eyebrow="Field Log" title={["Frames from", { text: "the wild.", className: "text-cream/40" }]} />
        </div>
        <div className="mt-12 px-4 pb-20 lg:mt-0 lg:px-0 lg:pb-0">
          <MountainGallery items={mountainGallery} />
        </div>
      </section>

      <FinalCTA
        eyebrow="Recruiting now"
        lines={["Answer", { text: "the call.", className: "text-gold-grad" }]}
        text="Selection is earned. Complete the academy's Foundation Batch or prove your fitness, then apply for the next expedition."
        cta={{ href: "/contact", label: "Join the Unit" }}
      />
    </>
  );
}
