"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { formatINR, type Product } from "@/lib/products";
import { CartIcon, ArrowIcon } from "./ui/Icons";

type Props = { product: Product; onAdd?: (p: Product) => void; priority?: boolean };

export default function ProductCard({ product, onAdd, priority }: Props) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd?.(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1600);
  };

  return (
    <article className="group relative flex h-full flex-col border border-gold/10 bg-coal transition-colors duration-500 hover:border-gold/40">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover grayscale-[25%] transition-all duration-[1.2s] ease-[var(--ease-cine)] group-hover:scale-[1.07] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coal via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 scanlines opacity-20" />
        {product.tag && (
          <span className="label absolute left-3 top-3 bg-gold-bright px-2.5 py-1.5 text-[0.55rem] text-ink clip-angle-sm">{product.tag}</span>
        )}
        <span className="label absolute right-3 top-3 text-[0.55rem] text-cream/60">{product.category}</span>
        {/* sweep line on hover */}
        <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold-bright transition-transform duration-700 ease-[var(--ease-cine)] group-hover:scale-x-100" />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3 className="font-display text-xl font-semibold uppercase leading-tight tracking-wide text-cream">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-cream/55">{product.blurb}</p>
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-display text-2xl font-bold text-gold-bright">{formatINR(product.price)}</span>
          {product.compareAt && <span className="text-sm text-cream/35 line-through">{formatINR(product.compareAt)}</span>}
        </div>

        <div className="mt-auto pt-5">
          {onAdd ? (
            <button
              type="button"
              onClick={handleAdd}
              className="group/btn label relative flex h-11 w-full items-center justify-center gap-2 overflow-hidden bg-gold-bright text-[0.68rem] text-ink clip-angle-sm"
              aria-live="polite"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-cream transition-transform duration-500 ease-[var(--ease-cine)] group-hover/btn:scale-x-100" />
              <motion.span key={added ? "y" : "n"} initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative flex items-center gap-2">
                {added ? (
                  <>Added ✓</>
                ) : (
                  <>
                    <CartIcon /> Add to Cart
                  </>
                )}
              </motion.span>
            </button>
          ) : (
            <Link href="/store" className="label inline-flex items-center gap-2 text-[0.65rem] text-gold-bright">
              View in Store <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
