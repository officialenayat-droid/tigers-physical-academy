import ParallaxImage from "../ui/ParallaxImage";
import SplitText from "../ui/SplitText";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { images } from "@/lib/images";

const chips = ["Altitude", "Navigation", "Survival", "River Crossing", "Night Ops"];

export default function MountainTeaser() {
  return (
    <section className="relative isolate overflow-hidden bg-ink" aria-label="The Mountain People">
      <ParallaxImage
        src={images.mountain.section.src}
        alt={images.mountain.section.alt}
        position={images.mountain.section.position}
        strength={14}
        className="absolute inset-0 -z-10"
        imgClassName="grayscale-[40%] contrast-110"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/40 to-ink" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-olive-deep/80 via-transparent to-transparent mix-blend-multiply" />
      <div className="absolute inset-0 -z-10 vignette" />
      {/* static cinema bars */}
      <div className="absolute inset-x-0 top-0 h-10 bg-ink md:h-16" />
      <div className="absolute inset-x-0 bottom-0 h-10 bg-ink md:h-16" />

      {/* crosshair */}
      <div aria-hidden className="absolute right-[12%] top-1/3 hidden h-40 w-40 md:block">
        <div className="absolute inset-0 rounded-full border border-gold/30" />
        <div className="absolute inset-6 rounded-full border border-gold/15" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gold/30" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-gold/30" />
        <span className="label absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[0.55rem] text-gold/80">Alt. 3,800 m</span>
      </div>

      <div className="mx-auto flex min-h-[92svh] max-w-7xl flex-col justify-center px-4 py-32 sm:px-6 lg:px-8">
        <Reveal blur={false} y={16}>
          <p className="label flex items-center gap-3 text-[0.7rem] text-gold-bright">
            <span className="text-mute">03</span>
            <span className="h-px w-8 bg-gold" />
            Elite Outdoor Unit · CEO: Imran “Tiger” Ahmad
          </p>
        </Reveal>
        <SplitText
          lines={["The", { text: "Mountain", className: "text-gold-grad" }, "People"]}
          className="mt-6 text-[clamp(3.5rem,13vw,10rem)] font-bold leading-[0.85] text-cream"
        />
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-cream/75">
            Where the academy ends, the wilderness begins. Jungle, glacier and river. The Mountain People take trained bodies into Kashmir&apos;s hardest terrain.
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {chips.map((c) => (
              <li key={c} className="label border border-cream/20 bg-ink/40 px-3 py-2 text-[0.6rem] text-cream/80 backdrop-blur-sm">
                {c}
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Button href="/mountain-people" size="lg">Enter the Unit</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
