import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import { routine, standards, successStories, disciplines, nextBatch } from "@/lib/content";
import { images } from "@/lib/images";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Academy",
  description:
    "Train at Kashmir's first calisthenics academy in Bemina, Srinagar. Daily routine, physical standards, calisthenics, parkour, self-defence for girls and women, and army and police fitness prep.",
  path: "/academy",
});

export default function AcademyPage() {
  return (
    <>
      <PageHero
        file="02 / Academy"
        eyebrow="The Academy · Woolen Mills, Bemina"
        title={["Discipline", { text: "is the", className: "text-cream/40" }, { text: "Program.", className: "text-gold-grad" }]}
        intro="Kashmir's first calisthenics academy, set up with Indian Army support. Bodyweight mastery, movement, protection and forces prep under Imran “Tiger” Ahmad."
        image={images.academyHero}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" size="lg" full>Join Now</Button>
          <Button href="#routine" variant="ghost" size="lg" arrow={false} full>See the Routine</Button>
        </div>
      </PageHero>

      {/* Disciplines quick index */}
      <section className="border-b border-gold/10 bg-coal" aria-label="Disciplines">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 md:grid-cols-5 lg:px-8">
          {disciplines.map((d, i) => (
            <Reveal key={d.code} delay={i * 0.06} y={20} className={`border-gold/10 py-6 md:border-l md:px-5 ${i === 4 ? "col-span-2 md:col-span-1" : ""}`}>
              <p className="font-display text-sm text-gold-bright">{d.code}</p>
              <p className="mt-1 font-display text-lg uppercase leading-tight">{d.title}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Daily routine */}
      <section id="routine" className="relative scroll-mt-20 bg-ink py-24 md:py-36" aria-label="Daily routine">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading index="01" eyebrow="Daily Routine" title={["05:00", { text: "to 21:00.", className: "text-cream/40" }]} />
            {/* TODO: placeholder schedule, confirm real times with Tiger */}
            <p className="max-w-sm text-cream/60 lg:pb-3">A day at the academy runs like a unit. Show up, sweat, recover, repeat. Batches are scheduled around school, college and work.</p>
          </div>

          <RevealGroup className="mt-14 grid grid-cols-1 gap-px bg-gold/10 sm:grid-cols-2 lg:grid-cols-5" stagger={0.05}>
            {routine.map((r, i) => (
              <RevealItem key={r.time} className="h-full">
                <div className="group relative h-full overflow-hidden bg-ink p-6 transition-colors duration-500 hover:bg-olive-deep">
                  <span className="absolute right-4 top-4 font-display text-xs text-cream/20">{String(i + 1).padStart(2, "0")}</span>
                  <p className="font-display text-4xl font-bold text-gold-bright transition-transform duration-500 group-hover:-translate-y-1">{r.time}</p>
                  <div className="mt-4 h-px w-8 bg-gold/50 transition-all duration-500 group-hover:w-16" />
                  <p className="mt-4 font-display text-xl uppercase tracking-wide">{r.title}</p>
                  <p className="mt-1 text-sm text-cream/55">{r.detail}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Physical standards */}
      <section className="relative overflow-hidden border-y border-gold/10 bg-olive-deep py-24 md:py-36" aria-label="Physical standards">
        <div className="absolute inset-0 grid-lines opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="02" eyebrow="Physical Standards" title={["Earn the", { text: "patch.", className: "text-gold-grad" }]} intro="Benchmarks every trainee works toward before graduating the Foundation Batch. Tested monthly." />
          {/* TODO: placeholder numbers, confirm real standards */}
          <RevealGroup className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-3" stagger={0.07}>
            {standards.map((s) => (
              <RevealItem key={s.metric}>
                <div className="brackets group relative overflow-hidden border border-gold/15 bg-ink/60 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 md:p-8">
                  <p className="label text-[0.6rem] text-gold">{s.metric}</p>
                  <p className="mt-4 flex items-baseline gap-2">
                    <span className="font-display text-[clamp(2.75rem,8vw,5rem)] font-bold leading-none text-cream transition-colors group-hover:text-gold-bright">{s.value}</span>
                    <span className="label text-[0.6rem] text-cream/50">{s.unit}</span>
                  </p>
                  <p className="mt-3 text-sm text-cream/50">{s.note}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Women & girls */}
      <section className="relative bg-ink py-24 md:py-32" aria-label="Self-defence for girls and women">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal className="group relative aspect-[4/3] overflow-hidden" y={50}>
            <Image src={images.women.src} alt={images.women.alt} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover grayscale transition-all duration-[1.2s] group-hover:scale-105 group-hover:grayscale-0" style={{ objectPosition: images.women.position }} />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/70 to-transparent" />
            <div className="absolute inset-3 border border-gold/30" />
          </Reveal>
          <div>
            <SectionHeading index="03" eyebrow="Self-Defence" title={["Girls &", { text: "women welcome.", className: "text-gold-grad" }]} intro="Practical self-defence classes in a safe, respectful environment. Build strength, awareness and the confidence to protect yourself." />
            <Reveal delay={0.3} className="mt-8">
              <Button href="/contact">Enquire for the Women&apos;s Batch</Button>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Success stories */}
      <section className="relative border-t border-gold/10 bg-coal py-24 md:py-32" aria-label="Success stories">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="04" eyebrow="Success Stories" title={["Proof,", { text: "not promises.", className: "text-cream/40" }]} />
          {/* TODO: placeholder results, replace with real trainee outcomes */}
          <RevealGroup className="mt-14 grid gap-px bg-gold/10 md:grid-cols-3" stagger={0.1}>
            {successStories.map((s) => (
              <RevealItem key={s.label}>
                <div className="group h-full bg-coal p-8 transition-colors duration-500 hover:bg-ink">
                  <p className="font-display text-[clamp(3rem,7vw,4.5rem)] font-bold leading-none text-gold-grad">{s.stat}</p>
                  <p className="mt-4 font-display text-xl uppercase">{s.label}</p>
                  <p className="label mt-2 text-[0.6rem] text-cream/40">{s.who}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Testimonials index="05" />

      <FinalCTA
        eyebrow={`Next batch · ${nextBatch.starts}`}
        lines={["Join", { text: "Now.", className: "text-gold-grad" }]}
        text={`${nextBatch.name} starts ${nextBatch.starts}. Only ${nextBatch.seatsLeft} of ${nextBatch.seatsTotal} seats left.`}
        cta={{ href: "/contact", label: "Reserve Your Seat" }}
      />
    </>
  );
}
