import ParallaxImage from "./ui/ParallaxImage";
import SectionHeading from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import { testimonials } from "@/lib/testimonials";
import { images } from "@/lib/images";

export default function Testimonials({ index = "05" }: { index?: string }) {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-36" aria-label="Trainee stories">
      <ParallaxImage src={images.trainees.src} alt="" className="absolute inset-0 -z-10" imgClassName="grayscale opacity-30" strength={10} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/85 to-ink" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading index={index} eyebrow="Trainee Stories" title={["Changed on", { text: "the bars.", className: "text-cream/40" }]} />

        <RevealGroup className="mt-14 grid gap-4 md:grid-cols-3" stagger={0.12}>
          {testimonials.map((t, i) => (
            <RevealItem key={t.name} className="h-full">
              <figure className="brackets group relative flex h-full flex-col border border-gold/15 bg-coal/80 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 md:p-8">
                <span aria-hidden className="font-display text-7xl leading-[0.6] text-gold/70 transition-colors group-hover:text-gold-bright">“</span>
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-cream/85">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-gold/10 pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-olive font-display text-lg font-bold text-gold-bright clip-hex">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block font-display text-lg uppercase tracking-wide text-cream">{t.name}</span>
                    <span className="label block text-[0.55rem] text-cream/45">
                      {t.role}
                      {t.source && <> · {t.source}</>}
                    </span>
                  </span>
                  <span className="ml-auto font-display text-sm text-gold/50">0{i + 1}</span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
