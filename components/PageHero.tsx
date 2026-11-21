"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";
import SplitText from "./ui/SplitText";
import Letterbox, { Hud, RecDot } from "./ui/Letterbox";

type Props = {
  file: string; // e.g. "02 / Academy"
  eyebrow: string;
  title: (string | { text: string; className?: string })[];
  intro: string;
  image: { src: string; alt: string; position?: string };
  children?: ReactNode;
  tall?: boolean;
};

const ease = [0.22, 1, 0.36, 1] as const;

/** Cinematic hero for inner pages: shorter shutter intro, same grade and grain. */
export default function PageHero({ file, eyebrow, title, intro, image, children, tall }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className={`relative flex w-full overflow-hidden bg-ink ${tall ? "min-h-[100svh]" : "min-h-[88svh] lg:min-h-[82vh]"}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <motion.div initial={{ scale: 1.2 }} animate={{ scale: 1 }} transition={{ duration: 2.4, ease }} className="absolute inset-0">
          <div className="absolute inset-0 animate-kenburns">
            <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className="object-cover grayscale-[30%] contrast-125" style={{ objectPosition: image.position }} />
          </div>
        </motion.div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-olive-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
      <div className="absolute inset-0 scanlines opacity-50" />
      <div className="absolute inset-0 vignette" />

      <motion.div style={{ opacity: fade }} className="relative z-20 mx-auto flex w-full max-w-7xl flex-col justify-end px-4 pb-[calc(clamp(48px,7vh,72px)+3rem)] pt-32 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.9 }}
          className="label flex items-center gap-3 text-[0.68rem] text-gold-bright"
        >
          <span className="h-px w-10 bg-gold-bright" />
          {eyebrow}
        </motion.p>
        <SplitText as="h1" trigger="mount" delay={1} stagger={0.08} lines={title} className="mt-5 max-w-5xl text-[clamp(2.75rem,min(8.5vw,12vh),7.5rem)] font-bold leading-[0.88] text-cream" />
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease, delay: 1.6 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 md:text-lg"
        >
          {intro}
        </motion.p>
        {children && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 1.8 }} className="mt-8">
            {children}
          </motion.div>
        )}
      </motion.div>

      <Letterbox
        bar="clamp(48px, 7vh, 72px)"
        duration={1.2}
        bottom={
          <Hud className="h-full" delay={1.3}>
            <RecDot label={`File ${file}`} />
            <span className="hidden sm:inline">Tiger&apos;s Physical Academy · Srinagar</span>
            <span>J&amp;K</span>
          </Hud>
        }
      />
    </section>
  );
}
