"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { SiteImage } from "@/lib/images";

type Props = { items: readonly SiteImage[] };

const frameW = ["w-[62vw]", "w-[40vw]", "w-[50vw]", "w-[36vw]", "w-[58vw]", "w-[42vw]", "w-[48vw]", "w-[40vw]"];

/**
 * Desktop: pinned, scroll-driven horizontal film strip.
 * Mobile: native horizontal snap scroller.
 */
export default function MountainGallery({ items }: Props) {
  const section = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (track.current) setDistance(Math.max(0, track.current.scrollWidth - window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      {/* Desktop pinned strip */}
      <div ref={section} className="relative hidden lg:block" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <motion.div ref={track} style={{ x }} className="flex w-max items-center gap-6 pl-[8vw] pr-[8vw]">
            {items.map((img, i) => (
              <figure key={img.src} className={`group relative h-[64vh] shrink-0 overflow-hidden ${frameW[i % frameW.length]} ${i % 2 ? "mt-[10vh]" : "-mt-[6vh]"}`}>
                <Image src={img.src} alt={img.alt} fill sizes="60vw" className="object-cover grayscale-[40%] transition-all duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-105 group-hover:grayscale-0" style={{ objectPosition: img.position }} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute inset-0 scanlines opacity-30" />
                <figcaption className="label absolute bottom-4 left-4 flex items-center gap-3 text-[0.6rem] text-cream/80">
                  <span className="text-gold-bright">{String(i + 1).padStart(2, "0")}</span> {img.alt}
                </figcaption>
              </figure>
            ))}
          </motion.div>
          <div className="mx-auto mt-10 h-px w-[40vw] bg-cream/10">
            <motion.div style={{ width: bar }} className="h-full bg-gold-bright" />
          </div>
        </div>
      </div>

      {/* Mobile snap scroller */}
      <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4 lg:hidden">
        {items.map((img, i) => (
          <figure key={img.src} className="relative aspect-[3/4] w-[78vw] max-w-sm shrink-0 snap-center overflow-hidden">
            <Image src={img.src} alt={img.alt} fill sizes="80vw" className="object-cover" style={{ objectPosition: img.position }} />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <figcaption className="label absolute bottom-3 left-3 text-[0.58rem] text-cream/80">
              <span className="text-gold-bright">{String(i + 1).padStart(2, "0")}</span> {img.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
