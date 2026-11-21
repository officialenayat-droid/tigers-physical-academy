import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal, { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import HexLogo from "@/components/ui/HexLogo";
import { InstagramIcon, PinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { nextBatch } from "@/lib/content";
import { images } from "@/lib/images";
import { site, whatsappLink } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Join",
  description: "Join Tiger's Physical Academy at Woolen Mills, Bemina, Srinagar (J&K 190018). Enquire about calisthenics, parkour, self-defence, forces prep, nutrition and The Mountain People.",
  path: "/contact",
});

export default function ContactPage() {
  const pct = Math.round(((nextBatch.seatsTotal - nextBatch.seatsLeft) / nextBatch.seatsTotal) * 100);
  return (
    <>
      <PageHero
        file="05 / Contact"
        eyebrow="Report to HQ · Bemina, Srinagar"
        title={["Report", { text: "for duty.", className: "text-gold-grad" }]}
        intro="Ready to start? Send an enquiry, message us on WhatsApp or walk into the academy at Woolen Mills, Bemina."
        image={images.contactHero}
      >
        <Button href={whatsappLink()} external size="lg" arrow={false} icon={<WhatsAppIcon className="h-5 w-5" />}>
          WhatsApp Now
        </Button>
      </PageHero>

      <section className="relative bg-ink py-20 md:py-32" aria-label="Enquiry form">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <SectionHeading index="01" eyebrow="Enquiry" title={["Join the", { text: "academy.", className: "text-cream/40" }]} />
            <Reveal delay={0.2} className="mt-10">
              <ContactForm />
            </Reveal>
          </div>

          <aside className="space-y-4 lg:col-span-5 lg:pt-4">
            {/* Next batch */}
            {/* TODO: batch dates + seat counts are placeholders (lib/content.ts) */}
            <Reveal y={40}>
              <div className="group relative overflow-hidden border border-gold/40 bg-olive-deep p-6 sm:p-8">
                <div className="absolute inset-0 grid-lines opacity-60" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="label flex items-center gap-2 text-[0.62rem] text-gold-bright">
                        <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold-bright" /> Next Batch
                      </p>
                      <h3 className="mt-3 text-3xl font-bold">{nextBatch.name}</h3>
                    </div>
                    <HexLogo className="h-12 w-12 shrink-0 transition-transform duration-700 group-hover:rotate-[60deg]" />
                  </div>
                  <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-gold/20 pt-5">
                    <div>
                      <dt className="label text-[0.55rem] text-cream/50">Starts</dt>
                      <dd className="mt-1 font-display text-xl uppercase">{nextBatch.starts}</dd>
                    </div>
                    <div>
                      <dt className="label text-[0.55rem] text-cream/50">Timing</dt>
                      <dd className="mt-1 text-sm text-cream/85">{nextBatch.timing}</dd>
                    </div>
                  </dl>
                  <div className="mt-6">
                    <div className="flex justify-between text-xs">
                      <span className="label text-[0.55rem] text-cream/50">Seats filled</span>
                      <span className="font-display text-gold-bright">{nextBatch.seatsLeft} left</span>
                    </div>
                    <div className="mt-2 h-1.5 bg-ink/60">
                      <div className="h-full bg-gold-bright" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Direct lines */}
            <Reveal y={40} delay={0.1}>
              <div className="border border-gold/15 bg-coal p-6 sm:p-8">
                <p className="label text-[0.62rem] text-gold">Direct Lines</p>
                {/* TODO: placeholder email (lib/site.ts) */}
                <ul className="mt-5 space-y-4 text-sm">
                  <li>
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cream/80 hover:text-gold-bright">
                      <WhatsAppIcon className="h-5 w-5 text-gold-bright" /> WhatsApp · {site.contact.whatsappDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={site.contact.phoneHref} className="flex items-center gap-3 text-cream/80 hover:text-gold-bright">
                      <PhoneIcon className="h-5 w-5 text-gold-bright" /> {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.contact.email}`} className="flex items-center gap-3 break-all text-cream/80 hover:text-gold-bright">
                      <MailIcon className="h-5 w-5 shrink-0 text-gold-bright" /> {site.contact.email}
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* Location */}
      <section className="relative border-y border-gold/10 bg-coal" aria-label="Location">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <SectionHeading index="02" eyebrow="Location" title={["Woolen Mills,", { text: "Bemina.", className: "text-gold-grad" }]} />
            <Reveal delay={0.2}>
              <address className="mt-8 flex gap-4 not-italic text-lg text-cream/75">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-gold-bright" />
                <span>
                  {site.name}
                  <br />
                  {site.address.line1}, {site.address.city}
                  <br />
                  {site.address.region} {site.address.postalCode}
                </span>
              </address>
              <div className="mt-8">
                <Button href={site.address.mapsUrl} external variant="ghost">Get Directions</Button>
              </div>
            </Reveal>
          </div>
          <Reveal className="relative min-h-[360px] lg:min-h-full" blur={false} y={0}>
            <iframe
              title="Map: Woolen Mills, Bemina, Srinagar"
              src={site.address.mapsEmbed}
              className="absolute inset-0 h-full w-full border-0 opacity-80 grayscale invert-[0.92] hue-rotate-180 contrast-[0.9]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 border-l border-gold/15 shadow-[inset_0_0_80px_rgba(5,5,5,0.9)]" />
          </Reveal>
        </div>
      </section>

      {/* Instagram */}
      <section className="bg-ink py-20 md:py-28" aria-label="Instagram">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading index="03" eyebrow="Follow the Mission" title={["Three", { text: "handles.", className: "text-cream/40" }]} />
          <RevealGroup className="mt-12 grid gap-3 md:grid-cols-3" stagger={0.1}>
            {site.instagram.map((ig) => (
              <RevealItem key={ig.handle}>
                <a href={ig.url} target="_blank" rel="noopener noreferrer" className="brackets group relative flex h-full flex-col justify-between gap-10 overflow-hidden border border-gold/15 bg-coal p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/45 sm:p-8">
                  <span className="absolute inset-0 origin-bottom scale-y-0 bg-olive-deep transition-transform duration-700 ease-[var(--ease-cine)] group-hover:scale-y-100" />
                  <span className="relative flex items-center justify-between">
                    <span className="label text-[0.6rem] text-gold">{ig.role}</span>
                    <InstagramIcon className="h-6 w-6 text-gold-bright transition-transform duration-500 group-hover:rotate-12" />
                  </span>
                  <span className="relative">
                    <span className="block break-all font-display text-2xl uppercase text-cream">@{ig.handle}</span>
                    <span className="mt-1 block text-sm text-cream/50">{ig.label}</span>
                  </span>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
