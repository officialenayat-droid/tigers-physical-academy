import Link from "next/link";
import HexLogo from "./ui/HexLogo";
import { InstagramIcon, PinIcon, PhoneIcon, MailIcon } from "./ui/Icons";
import { nav, site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-coal">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />

      {/* Giant outlined sign-off */}
      <div aria-hidden className="relative select-none overflow-hidden pt-16">
        <p className="whitespace-nowrap text-center font-display text-[10.5vw] font-bold uppercase leading-[0.85] text-outline">
          Build. Don&apos;t Break.
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <HexLogo className="h-14 w-14" />
            <div>
              <p className="font-display text-2xl font-bold uppercase leading-none">Tiger&apos;s</p>
              <p className="label mt-1 text-[0.6rem] text-gold-bright">Physical Academy</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
            Kashmir&apos;s first calisthenics academy. Set up with Indian Army support and introduced during World Tourism Week 2021. Founded by Imran Ahmad “Tiger”.
          </p>
        </div>

        <div className="lg:col-span-2">
          <h3 className="label text-[0.65rem] text-gold">Navigate</h3>
          <ul className="mt-5 space-y-3">
            {nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-cream/70 transition-colors hover:text-gold-bright">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="label text-[0.65rem] text-gold">Instagram</h3>
          <ul className="mt-5 space-y-4">
            {site.instagram.map((ig) => (
              <li key={ig.handle}>
                <a href={ig.url} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border border-gold/30 text-gold-bright transition-colors group-hover:bg-gold-bright group-hover:text-ink">
                    <InstagramIcon />
                  </span>
                  <span>
                    <span className="block text-sm text-cream transition-colors group-hover:text-gold-bright">@{ig.handle}</span>
                    <span className="label block text-[0.58rem] text-cream/40">{ig.role}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h3 className="label text-[0.65rem] text-gold">Visit HQ</h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-cream/70">
            <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex gap-3 hover:text-gold-bright">
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {site.address.line1}
                <br />
                {site.address.city}, J&amp;K {site.address.postalCode}
              </span>
            </a>
            {/* TODO: placeholder phone + email (see lib/site.ts) */}
            <a href={site.contact.phoneHref} className="flex gap-3 hover:text-gold-bright">
              <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="flex gap-3 break-all hover:text-gold-bright">
              <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {site.contact.email}
            </a>
          </address>
          <p className="mt-6 text-xs text-cream/40">
            Nutrition partner:{" "}
            <a href={site.partner.url} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold-bright">
              @{site.partner.handle}
            </a>
          </p>
        </div>
      </div>

      <div className="relative border-t border-gold/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-2 px-4 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="label text-[0.6rem]">Srinagar · Kashmir · Est. 2021</p>
        </div>
      </div>
    </footer>
  );
}
