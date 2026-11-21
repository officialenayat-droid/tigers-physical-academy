"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Line = { text: string; className?: string };

type Props = {
  lines: (string | Line)[];
  className?: string;
  delay?: number;
  stagger?: number;
  /** "mount" animates on load (heroes); "view" animates when scrolled into view. */
  trigger?: "mount" | "view";
  as?: "h1" | "h2" | "h3" | "p";
  id?: string;
};

/**
 * Cinematic masked word reveal. Each word rises out of a clipping mask with a
 * slight rotation, staggered across lines.
 */
export default function SplitText({ lines, className, delay = 0, stagger = 0.07, trigger = "view", as = "h2", id }: Props) {
  const Tag = motion[as];
  let i = 0;
  const words: ReactNode[] = lines.map((l, li) => {
    const line = typeof l === "string" ? { text: l } : l;
    return (
      <span key={li} className="block">
        {line.text.split(" ").map((w, wi) => {
          const idx = i++;
          return (
            <span key={wi} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block will-change-transform ${line.className ?? ""}`}
                variants={{
                  hidden: { y: "110%", rotate: 4, opacity: 0 },
                  show: {
                    y: "0%",
                    rotate: 0,
                    opacity: 1,
                    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: delay + idx * stagger },
                  },
                }}
              >
                {w}
                {" "}
              </motion.span>
            </span>
          );
        })}
      </span>
    );
  });

  const triggerProps =
    trigger === "mount"
      ? { initial: "hidden", animate: "show" }
      : { initial: "hidden", whileInView: "show", viewport: { once: true, amount: 0.4 } };

  return (
    <Tag id={id} className={className} {...triggerProps}>
      {words}
    </Tag>
  );
}
