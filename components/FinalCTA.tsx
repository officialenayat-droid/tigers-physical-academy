import ParallaxImage from "./ui/ParallaxImage";
import SplitText from "./ui/SplitText";
import Reveal from "./ui/Reveal";
import Button from "./ui/Button";
import { WhatsAppIcon } from "./ui/Icons";
import { images } from "@/lib/images";
import { whatsappLink } from "@/lib/site";

type Props = {
  eyebrow?: string;
  lines?: (string | { text: string; className?: string })[];
  text?: string;
  cta?: { href: string; label: string };
};

export default function FinalCTA({
  eyebrow = "Your move",
  lines = ["Build.", { text: "Don't Break.", className: "text-gold-grad" }],
  text = "Every legend in Kashmir's calisthenics story started with one dead hang. Come to Bemina. Grab the bar.",
  cta = { href: "/contact", label: "Join the Academy" },
}: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-ink" aria-label="Join">
      <ParallaxImage src={images.finalCta.src} alt="" className="absolute inset-0 -z-10" imgClassName="grayscale contrast-125 opacity-50" strength={12} />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink" />
      <div className="absolute inset-0 -z-10 scanlines opacity-50" />
      <div className="absolute inset-0 -z-10 vignette" />

      <div className="mx-auto flex min-h-[80svh] max-w-7xl flex-col items-center justify-center px-4 py-28 text-center sm:px-6 lg:px-8">
        <Reveal blur={false} y={12}>
          <p className="label flex items-center gap-3 text-[0.7rem] text-gold-bright">
            <span className="h-px w-8 bg-gold" /> {eyebrow} <span className="h-px w-8 bg-gold" />
          </p>
        </Reveal>
        <SplitText lines={lines} className="mt-6 text-[clamp(3.5rem,14vw,11rem)] font-bold leading-[0.85] text-cream" stagger={0.1} />
        <Reveal delay={0.25}>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-cream/70">{text}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={cta.href} size="lg" full>{cta.label}</Button>
            <Button href={whatsappLink()} external variant="ghost" size="lg" arrow={false} full icon={<WhatsAppIcon className="h-5 w-5" />}>
              WhatsApp Us
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
