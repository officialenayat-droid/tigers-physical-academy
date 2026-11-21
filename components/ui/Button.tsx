import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowIcon } from "./Icons";

type Variant = "gold" | "ghost" | "olive";

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: "md" | "lg" | "sm";
  arrow?: boolean;
  external?: boolean;
  className?: string;
  icon?: ReactNode;
  /** Full width on mobile, natural width from sm up. */
  full?: boolean;
};

const sizes = {
  sm: "h-10 px-5 text-[0.7rem]",
  md: "h-12 px-6 text-xs",
  lg: "h-14 px-8 text-[0.8rem]",
};

/**
 * Angled clip-path button. "ghost" uses a 1px gold shell + dark core so the
 * border follows the clipped corners. A gold sweep fills it on hover.
 */
export default function Button({
  href,
  children,
  variant = "gold",
  size = "md",
  arrow = true,
  external,
  className = "",
  icon,
  full,
}: Props) {
  const w = full ? "w-full sm:w-auto" : "";
  const inner = (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[var(--ease-cine)] group-hover/btn:scale-x-100 ${
          variant === "gold" ? "bg-cream" : "bg-gold-bright"
        }`}
      />
      <span className="relative z-10 flex items-center gap-3">
        {icon}
        {children}
        {arrow && (
          <ArrowIcon className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-cine)] group-hover/btn:translate-x-1" />
        )}
      </span>
    </>
  );

  const base = `group/btn label relative inline-flex select-none items-center justify-center overflow-hidden whitespace-nowrap clip-angle transition-colors duration-300 ${sizes[size]}`;

  const styles: Record<Variant, string> = {
    gold: `${base} bg-gold-bright text-ink`,
    olive: `${base} bg-olive text-cream hover:text-ink`,
    ghost: `${base} text-cream hover:text-ink`,
  };

  const content =
    variant === "ghost" ? (
      <span className={`relative inline-flex clip-angle bg-gold/60 p-px ${w} ${className}`}>
        <span className={`${styles.ghost} ${w} bg-ink/80 backdrop-blur-sm`}>{inner}</span>
      </span>
    ) : (
      <span className={`${styles[variant]} ${w} ${className}`}>{inner}</span>
    );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={full ? "flex w-full sm:inline-flex sm:w-auto" : "inline-flex"}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={full ? "flex w-full sm:inline-flex sm:w-auto" : "inline-flex"}>
      {content}
    </Link>
  );
}
