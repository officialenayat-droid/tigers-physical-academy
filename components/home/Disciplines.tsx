import Image from "next/image";
import Link from "next/link";
import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { ArrowIcon } from "../ui/Icons";
import { disciplines } from "@/lib/content";

/**
 * Expanding panel row on desktop (hover/focus grows a panel), stacked cards on mobile.
 */
export default function Disciplines() {
  return (
    <section id="disciplines" className="relative bg-coal py-24 md:py-36" aria-label="Academy disciplines">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading index="02" eyebrow="Academy Disciplines" title={["Five ways", { text: "to forge yourself.", className: "text-cream/40" }]} />
          <p className="max-w-sm text-cream/60 lg:pb-3">No machines. No shortcuts. Every discipline is coached in person at the academy in Bemina, Srinagar.</p>
        </div>

        <RevealGroup className="mt-14 flex flex-col gap-3 lg:h-[600px] lg:flex-row" stagger={0.08}>
          {disciplines.map((d) => (
            <RevealItem key={d.code} className="group/panel relative min-h-[300px] overflow-hidden transition-[flex-grow] duration-700 ease-[var(--ease-cine)] sm:min-h-[360px] lg:min-h-0 lg:flex-1 lg:hover:flex-[2.6] lg:focus-within:flex-[2.6]">
              <Link href="/academy" className="absolute inset-0 block focus-visible:outline-offset-[-4px]" aria-label={`${d.title}: learn more`}>
                <Image
                  src={d.image.src}
                  alt={d.image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale transition-all duration-[1.2s] ease-[var(--ease-cine)] group-hover/panel:scale-105 group-hover/panel:grayscale-0"
                  style={{ objectPosition: d.image.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/10 transition-opacity duration-700 group-hover/panel:opacity-80" />
                <div className="absolute inset-0 scanlines opacity-40" />
                <div className="absolute inset-0 border border-gold/0 transition-colors duration-700 group-hover/panel:border-gold/50" />

                <div className="absolute left-5 top-5 flex items-center gap-3">
                  <span className="font-display text-sm font-bold text-gold-bright">{d.code}</span>
                  <span className="h-px w-8 bg-gold/60 transition-all duration-700 group-hover/panel:w-14" />
                </div>
                {"badge" in d && d.badge && (
                  <span className="label absolute right-4 top-4 bg-gold-bright px-2.5 py-1.5 text-[0.55rem] text-ink clip-angle-sm">{d.badge}</span>
                )}

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <h3 className="text-[clamp(1.75rem,7vw,2.5rem)] font-bold text-cream lg:text-[1.8vw]">{d.title}</h3>
                  <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[var(--ease-cine)] lg:grid-rows-[0fr] lg:group-hover/panel:grid-rows-[1fr] lg:group-focus-within/panel:grid-rows-[1fr]">
                    <div className="overflow-hidden">
                      <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">{d.blurb}</p>
                      <span className="label mt-4 inline-flex items-center gap-2 text-[0.62rem] text-gold-bright">
                        Explore <ArrowIcon className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
