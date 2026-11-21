"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  /** Final bar height (CSS length). */
  bar?: string;
  duration?: number;
  delay?: number;
  top?: ReactNode;
  bottom?: ReactNode;
};

const ease = [0.76, 0, 0.24, 1] as const;

/**
 * Movie-intro letterbox. Bars start closed (covering the frame), then part like
 * a shutter and settle as thin cinema bars that carry HUD text.
 */
export default function Letterbox({ bar = "clamp(56px, 9vh, 96px)", duration = 1.5, delay = 0.1, top, bottom }: Props) {
  return (
    <>
      <motion.div
        aria-hidden={!top}
        initial={{ height: "50.5%" }}
        animate={{ height: bar }}
        transition={{ duration, ease, delay }}
        className="absolute inset-x-0 top-0 z-30 flex items-end overflow-hidden bg-ink"
      >
        {top}
      </motion.div>
      <motion.div
        aria-hidden={!bottom}
        initial={{ height: "50.5%" }}
        animate={{ height: bar }}
        transition={{ duration, ease, delay }}
        className="absolute inset-x-0 bottom-0 z-30 flex items-start overflow-hidden bg-ink"
      >
        {bottom}
      </motion.div>
      {/* Gold seam flash at the moment the shutter opens */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
        transition={{ duration: 1.1, times: [0, 0.45, 1], delay: delay - 0.05 }}
        className="absolute inset-x-0 top-1/2 z-40 h-px origin-center bg-gold-bright shadow-[0_0_24px_4px_rgba(212,170,58,0.6)]"
      />
    </>
  );
}

/** Small HUD label used inside letterbox bars. */
export function Hud({ children, className = "", delay = 1.4 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`label flex w-full items-center justify-between gap-4 px-4 text-[0.58rem] text-cream/45 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function RecDot({ label = "REC" }: { label?: string }) {
  return (
    <span className="flex items-center gap-2">
      <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-red-600" />
      {label}
    </span>
  );
}
