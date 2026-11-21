"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  blur?: boolean;
  as?: "div" | "li" | "section" | "article" | "span";
  amount?: number;
};

/** Scroll-reveal wrapper: fades, lifts and de-blurs content once it enters the viewport. */
export default function Reveal({ children, className, delay = 0, y = 36, x = 0, blur = true, as = "div", amount = 0.25 }: Props) {
  const variants: Variants = {
    hidden: { opacity: 0, y, x, filter: blur ? "blur(8px)" : "blur(0px)" },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay },
    },
  };
  const M = motion[as];
  return (
    <M className={className} variants={variants} initial="hidden" whileInView="show" viewport={{ once: true, amount }}>
      {children}
    </M>
  );
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({ children, className, stagger = 0.1, amount = 0.15 }: { children: ReactNode; className?: string; stagger?: number; amount?: number }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}
