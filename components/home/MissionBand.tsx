"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef } from "react";
import HexLogo from "../ui/HexLogo";

// TODO: confirm exact wording with Tiger / the original press interview.
const QUOTE =
  "I urge the youth involved in drugs and wrong activities to come to the academy. Work on your physique. Work on your life.";
const HIGHLIGHT = new Set(["physique.", "life."]);

function Word({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const gold = HIGHLIGHT.has(word);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }} className={gold ? "text-gold-grad" : "text-cream"}>
        {word}
      </motion.span>
    </span>
  );
}

/** Scroll-scrubbed quote: words light up as you read down the page. */
export default function MissionBand() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.55"] });
  const words = QUOTE.split(" ");
  const lineX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={ref} className="relative overflow-hidden border-y border-gold/15 bg-olive-deep py-24 md:py-36" aria-label="Mission">
      <div className="absolute inset-0 grid-lines opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent to-ink/60" />
      <motion.div style={{ x: lineX }} aria-hidden className="pointer-events-none absolute -bottom-6 left-0 select-none whitespace-nowrap font-display text-[16vw] font-bold uppercase leading-none text-outline opacity-30">
        Mission · Mission · Mission
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <HexLogo className="h-10 w-10" />
          <p className="label text-[0.7rem] text-gold-bright">The Mission</p>
          <span className="hairline flex-1 opacity-40" />
        </div>

        <blockquote className="mt-10">
          <span aria-hidden className="block font-display text-8xl leading-[0.5] text-gold">“</span>
          <p className="font-display text-[clamp(1.9rem,5.2vw,4.25rem)] font-semibold uppercase leading-[1.02]">
            <span className="sr-only">{QUOTE}</span>
            <span aria-hidden>
              {words.map((w, i) => (
                <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
              ))}
            </span>
          </p>
          <footer className="mt-10 flex items-center gap-4">
            <span className="h-px w-12 bg-gold-bright" />
            <cite className="label not-italic text-[0.7rem] text-cream/70">
              Imran “Tiger” Ahmad <span className="text-gold">· Founder</span>
            </cite>
          </footer>
        </blockquote>
      </div>
    </section>
  );
}
