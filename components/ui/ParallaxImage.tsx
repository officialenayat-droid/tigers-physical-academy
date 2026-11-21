"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  position?: string;
  className?: string;
  strength?: number;
  sizes?: string;
  priority?: boolean;
  imgClassName?: string;
};

/** Image that drifts against scroll direction inside its frame. */
export default function ParallaxImage({ src, alt, position = "50% 50%", className = "", strength = 12, sizes = "100vw", priority, imgClassName = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);
  return (
    <div ref={ref} className={`overflow-hidden ${className || "relative"}`}>
      <motion.div style={{ y }} className="absolute -inset-y-[18%] inset-x-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={`object-cover ${imgClassName}`} style={{ objectPosition: position }} />
      </motion.div>
    </div>
  );
}
