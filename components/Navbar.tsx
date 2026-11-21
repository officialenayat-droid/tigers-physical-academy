"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import HexLogo from "./ui/HexLogo";
import { InstagramIcon, WhatsAppIcon } from "./ui/Icons";
import { nav, site, whatsappLink } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu on navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll + Escape to close while menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className={`fixed inset-x-0 top-0 transition-all duration-500 ${open ? "z-[58]" : "z-50"} ${
          scrolled && !open ? "border-b border-gold/15 bg-ink/70 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav aria-label="Main" className={`mx-auto flex max-w-7xl items-center justify-between px-4 transition-all duration-500 sm:px-6 lg:px-8 ${scrolled ? "h-16" : "h-20"}`}>
          <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name}, home`}>
            <HexLogo className="h-10 w-10 transition-transform duration-700 ease-[var(--ease-cine)] group-hover:rotate-[60deg]" />
            <span className="leading-none">
              <span className="block font-display text-lg font-bold uppercase tracking-wide text-cream">Tiger&apos;s</span>
              <span className="label block text-[0.58rem] text-gold-bright">Physical Academy</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {nav.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`label relative px-4 py-2 text-[0.72rem] transition-colors ${isActive(l.href) ? "text-cream" : "text-cream/55 hover:text-cream"}`}
                >
                  {l.label}
                  {isActive(l.href) && (
                    <motion.span layoutId="nav-underline" className="absolute inset-x-4 -bottom-0.5 h-px bg-gold-bright" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="label hidden h-10 items-center bg-gold-bright px-5 text-[0.7rem] text-ink clip-angle-sm transition-colors hover:bg-cream sm:inline-flex"
            >
              Join Now
            </Link>
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative flex h-11 w-11 flex-col items-center justify-center gap-[7px] border border-gold/30 lg:hidden"
            >
              <motion.span animate={open ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }} className="block h-px w-5 bg-cream" />
              <motion.span animate={open ? { rotate: -45, y: -4.5, width: 20 } : { rotate: 0, y: 0, width: 14 }} className="ml-auto mr-[11px] block h-px bg-gold-bright" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[55] flex flex-col bg-coal grid-lines lg:hidden"
          >
            <div className="h-20 shrink-0" />
            <ul className="flex flex-1 flex-col justify-center gap-1 px-6">
              {nav.map((l, i) => (
                <li key={l.href} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.06 }}
                  >
                    <Link href={l.href} className="group flex items-baseline gap-4 py-2">
                      <span className="label text-[0.65rem] text-gold">0{i + 1}</span>
                      <span className={`font-display text-[clamp(2.5rem,11vw,4rem)] font-bold uppercase leading-none transition-colors ${isActive(l.href) ? "text-gold-bright" : "text-cream group-hover:text-gold-bright"}`}>
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
              exit={{ opacity: 0 }}
              className="space-y-5 border-t border-gold/15 px-6 py-6"
            >
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="label flex h-12 items-center justify-center gap-3 bg-gold-bright text-xs text-ink clip-angle">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp the Academy
              </a>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {site.instagram.map((ig) => (
                  <a key={ig.handle} href={ig.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-cream/60 hover:text-gold-bright">
                    <InstagramIcon /> @{ig.handle}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
