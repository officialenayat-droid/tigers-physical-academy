"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Button from "../ui/Button";
import SplitText from "../ui/SplitText";
import Letterbox, { Hud, RecDot } from "../ui/Letterbox";
import { InstagramIcon } from "../ui/Icons";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24, filter: "blur(6px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, ease, delay },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-ink lg:h-[100svh] lg:min-h-[720px]" aria-label="Introduction">
      {/* Background: parallax wrapper + Ken Burns inner */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.25, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 animate-kenburns">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="100vw"
              className="object-cover grayscale-[35%] contrast-125"
              style={{ objectPosition: images.hero.position }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Grade: olive tint, bottom fade, scanlines, vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-olive-deep/80 via-ink/40 to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/40" />
      <div className="absolute inset-0 scanlines opacity-60" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 grid-lines opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_40%,transparent)]" />

      {/* Content */}
      <motion.div style={{ y: contentY, opacity: fade }} className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl lg:h-full lg:min-h-0 flex-col justify-end px-4 pb-[calc(clamp(56px,9vh,96px)+2.5rem)] pt-28 sm:px-6 lg:px-8">
        <motion.p {...fadeUp(1.2)} className="label flex items-center gap-3 text-[0.68rem] text-gold-bright">
          <span className="h-px w-10 bg-gold-bright" />
          Srinagar · Kashmir · Est. 2021
        </motion.p>

        <SplitText
          as="h1"
          trigger="mount"
          delay={1.3}
          stagger={0.08}
          className="mt-5 max-w-5xl text-[clamp(2.75rem,min(8vw,11.5vh),7.5rem)] font-bold leading-[0.88] tracking-[-0.015em] text-cream"
          lines={["Kashmir's First", { text: "Calisthenics", className: "text-gold-grad" }, "& Physical Academy"]}
        />

        <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <motion.p {...fadeUp(2.0)} className="max-w-xl text-base leading-relaxed text-cream/75 md:text-lg">
              Founded by <strong className="font-semibold text-cream">Imran Ahmad “Tiger”</strong>, the first certified calisthenics athlete from Kashmir. Set up with Indian Army support and introduced during World Tourism Week 2021.
            </motion.p>
            <motion.div {...fadeUp(2.2)} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="/contact" size="lg" full>Join Academy</Button>
              <Button href="/mountain-people" variant="ghost" size="lg" arrow={false} full>Mountain People</Button>
              <Button href="/store" variant="ghost" size="lg" arrow={false} full>Tactical Gear</Button>
            </motion.div>
          </div>

          {/* Followers badge */}
          <motion.a
            {...fadeUp(2.5)}
            href={site.instagram[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="brackets group flex w-full max-w-xs items-center gap-4 border border-gold/20 bg-ink/50 p-4 backdrop-blur-md transition-colors hover:border-gold/50 sm:w-auto"
          >
            <span className="relative h-14 w-14 shrink-0 overflow-hidden clip-hex bg-gold">
              <span className="absolute inset-[2px] overflow-hidden clip-hex">
                <Image src={images.founder.src} alt="" fill sizes="56px" className="object-cover" style={{ objectPosition: images.founder.position }} />
              </span>
            </span>
            <span>
              <span className="flex items-baseline gap-2">
                <span className="font-display text-3xl font-bold leading-none text-cream">{site.stats.followers}</span>
                <span className="label text-[0.6rem] text-gold-bright">Followers</span>
              </span>
              <span className="mt-1.5 flex items-center gap-1.5 text-xs text-cream/55 transition-colors group-hover:text-cream">
                <InstagramIcon className="h-3.5 w-3.5" /> @{site.instagram[0].handle}
              </span>
            </span>
          </motion.a>
        </div>
      </motion.div>

      <Letterbox
        bottom={
          <Hud className="h-full" delay={1.6}>
            <RecDot label="REC · TPA/HQ" />
            <span className="hidden sm:inline">34.0837° N · 74.7973° E</span>
            <span className="flex items-center gap-3">
              Scroll
              <span className="relative h-6 w-px overflow-hidden bg-cream/15">
                <motion.span
                  className="absolute inset-x-0 top-0 h-2 bg-gold-bright"
                  animate={{ y: [-8, 24] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
              </span>
            </span>
          </Hud>
        }
      />
    </section>
  );
}
