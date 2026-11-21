import SplitText from "./SplitText";
import Reveal from "./Reveal";

type Props = {
  index?: string;
  eyebrow: string;
  title: (string | { text: string; className?: string })[];
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ index, eyebrow, title, intro, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      <Reveal blur={false} y={16}>
        <p className={`label flex items-center gap-3 text-[0.7rem] text-gold-bright ${center ? "justify-center" : ""}`}>
          {index && <span className="text-mute">{index}</span>}
          <span className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>
      </Reveal>
      <SplitText lines={title} className="mt-5 text-[clamp(2.4rem,7vw,5rem)] font-bold text-cream" />
      {intro && (
        <Reveal delay={0.2}>
          <p className={`mt-6 max-w-xl text-base leading-relaxed text-cream/65 md:text-lg ${center ? "mx-auto" : ""}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
