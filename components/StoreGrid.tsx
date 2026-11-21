"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { CartIcon } from "./ui/Icons";
import { categories, formatINR, products, type Product } from "@/lib/products";

type Filter = (typeof categories)[number];

/** Store UI only. Cart lives in local state; wire up a real checkout later. */
export default function StoreGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [cart, setCart] = useState<Product[]>([]);

  const visible = useMemo(() => (filter === "All" ? products : products.filter((p) => p.category === filter)), [filter]);
  const total = cart.reduce((s, p) => s + p.price, 0);

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-16 z-30 -mx-4 border-y border-gold/10 bg-ink/85 px-4 py-3 backdrop-blur-xl sm:mx-0 sm:border sm:px-3">
        <div className="flex items-center justify-between gap-4">
          <div role="tablist" aria-label="Filter products" className="no-scrollbar -mx-1 flex gap-1 overflow-x-auto px-1">
            {categories.map((c) => {
              const active = c === filter;
              const count = c === "All" ? products.length : products.filter((p) => p.category === c).length;
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c)}
                  className={`label relative shrink-0 px-4 py-2.5 text-[0.65rem] transition-colors ${active ? "text-ink" : "text-cream/60 hover:text-cream"}`}
                >
                  {active && <motion.span layoutId="filter-pill" className="absolute inset-0 bg-gold-bright clip-angle-sm" transition={{ type: "spring", stiffness: 420, damping: 34 }} />}
                  <span className="relative">
                    {c} <span className={active ? "text-ink/60" : "text-cream/30"}>{count}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <p className="label hidden shrink-0 items-center gap-2 text-[0.62rem] text-cream/60 md:flex">
            <CartIcon className="h-4 w-4 text-gold-bright" /> {cart.length} · {formatINR(total)}
          </p>
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" role="tabpanel" aria-live="polite">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
            >
              <ProductCard product={p} onAdd={(x) => setCart((c) => [...c, x])} priority={i < 3} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Floating cart pill */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-x-4 bottom-4 z-40 mx-auto flex max-w-md items-center justify-between gap-4 border border-gold/40 bg-coal/95 p-3 pl-5 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.9)] backdrop-blur-xl"
            role="status"
          >
            <div className="flex items-center gap-3">
              <span className="relative">
                <CartIcon className="h-6 w-6 text-gold-bright" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gold-bright text-[0.65rem] font-bold text-ink">{cart.length}</span>
              </span>
              <span>
                <span className="block font-display text-lg leading-none">{formatINR(total)}</span>
                <span className="label text-[0.55rem] text-cream/45">Checkout coming soon</span>
              </span>
            </div>
            {/* TODO: connect to a real checkout (Shopify, Razorpay, etc.) */}
            <button type="button" onClick={() => setCart([])} className="label h-10 border border-gold/30 px-4 text-[0.6rem] text-cream/70 transition-colors hover:border-gold-bright hover:text-gold-bright">
              Clear
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
