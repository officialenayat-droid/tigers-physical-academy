import Image from "next/image";
import Reveal, { RevealGroup, RevealItem } from "../ui/Reveal";
import SplitText from "../ui/SplitText";
import CountUp from "../ui/CountUp";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const credentials = [
  "First Certified Calisthenics Athlete · Kashmir",
  "Founder · Tiger's Physical Academy",
  "CEO · The Mountain People",
  "Nutrition Partner · Muscle Intense SF",
  "Indian Army Supported Academy",
  "World Tourism Week 2021",
];

export default function Founder() {
  return (
    <section id="founder" className="relative overflow-hidden bg-ink py-24 md:py-36" aria-labelledby="founder-title">
      <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-olive/25 blur-[140px]" />
      <div className="pointer-events-none absolute right-0 top-0 select-none font-display text-[22vw] font-bold uppercase leading-none text-outline opacity-40 lg:text-[16vw]" aria-hidden>
        Tiger
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:gap-20 lg:px-8">
        {/* Portrait */}
        <Reveal className="relative mx-auto w-full max-w-md lg:col-span-5" y={60}>
          <div className="group relative">
            {/* Gold offset frame */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-gold/70 transition-transform duration-700 ease-[var(--ease-cine)] group-hover:translate-x-6 group-hover:translate-y-6 sm:translate-x-6 sm:translate-y-6" />
            <div className="brackets relative aspect-[4/5] overflow-hidden bg-coal">
              <Image
                src={images.founder.src}
                alt={images.founder.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover transition-transform duration-[1.6s] ease-[var(--ease-cine)] group-hover:scale-105"
                style={{ objectPosition: images.founder.position }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute inset-0 scanlines opacity-30" />
              <div className="absolute bottom-0 left-0 p-5">
                <p className="label text-[0.6rem] text-gold-bright">The Founder</p>
                <p className="mt-1 font-display text-2xl font-bold uppercase leading-none">Imran “Tiger” Ahmad</p>
              </div>
            </div>

            {/* Hex stamp */}
            <div className="absolute -right-3 -top-8 sm:-right-10">
              <div className="relative flex h-28 w-28 rotate-[8deg] items-center justify-center bg-gold-bright clip-hex transition-transform duration-700 group-hover:rotate-[68deg] sm:h-32 sm:w-32">
                <div className="absolute inset-[3px] flex flex-col items-center justify-center bg-ink text-center clip-hex">
                  <span className="label text-[0.55rem] text-gold-bright">J&amp;K</span>
                  <span className="font-display text-3xl font-bold leading-none text-cream">#1</span>
                  <span className="label text-[0.5rem] tracking-[0.2em] text-gold-bright">Academy</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Story */}
        <div className="lg:col-span-7">
          <Reveal blur={false} y={16}>
            <p className="label flex items-center gap-3 text-[0.7rem] text-gold-bright">
              <span className="text-mute">01</span>
              <span className="h-px w-8 bg-gold" />
              The Founder
            </p>
          </Reveal>
          <SplitText
            as="h2"
            id="founder-title"
            lines={["Imran Ahmad.", { text: "They call him Tiger.", className: "text-gold-grad" }]}
            className="mt-5 text-[clamp(2.4rem,6.5vw,4.75rem)] font-bold text-cream"
          />

          <Reveal delay={0.15}>
            <p className="mt-8 text-lg leading-relaxed text-cream/80">
              The first certified calisthenics athlete from Kashmir. In 2021, with the support of the Indian Army, Imran set up Kashmir&apos;s first calisthenics academy in Srinagar. It was introduced to the public during World Tourism Week 2021.
            </p>
            <p className="mt-5 leading-relaxed text-cream/60">
              Today he leads Tiger&apos;s Physical Academy at Woolen Mills, Bemina, runs the elite outdoor brand The Mountain People as CEO, and inspires 124K followers with gravity-defying strength. His mission is simple: give Kashmir&apos;s youth a bar to hold on to.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 flex flex-wrap gap-2" stagger={0.06}>
            {credentials.map((c) => (
              <RevealItem key={c}>
                <span className="label inline-flex items-center gap-2 border border-gold/25 bg-olive-deep/40 px-3 py-2 text-[0.6rem] text-cream/85 transition-colors hover:border-gold-bright hover:text-gold-bright">
                  <span className="h-1 w-1 rotate-45 bg-gold-bright" />
                  {c}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="hairline mt-12 opacity-50" />
          <dl className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Followers", v: <CountUp to={124} suffix="K" /> },
              { k: "Posts", v: <CountUp to={Number(site.stats.posts)} /> },
              { k: "Founded", v: <CountUp to={2021} duration={2.4} /> },
            ].map((s) => (
              <div key={s.k} className="flex flex-col-reverse">
                <dt className="label mt-2 text-[0.6rem] text-gold">{s.k}</dt>
                <dd className="font-display text-[clamp(2rem,6vw,3.5rem)] font-bold leading-none text-cream">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
