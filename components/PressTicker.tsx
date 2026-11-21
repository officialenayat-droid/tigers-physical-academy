import { press } from "@/lib/content";

/** Infinite "As Seen In" marquee. List is duplicated so the -50% loop is seamless. */
export default function PressTicker() {
  const row = [...press, ...press, ...press];
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-ink py-10" aria-label="As seen in">
      <div className="mx-auto mb-6 flex max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <p className="label shrink-0 text-[0.65rem] text-gold-bright">As Seen In</p>
        <span className="hairline flex-1 opacity-40" />
        <p className="label shrink-0 text-[0.6rem] text-cream/40">Press · Jan 2022</p>
      </div>
      <ul className="sr-only">
        {press.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
      <div aria-hidden className="group overflow-hidden mask-fade-x">
        <div className="flex w-max animate-marquee items-center group-hover:[animation-play-state:paused]">
          {[...row, ...row].map((p, i) => (
            <span key={i} className="flex items-center">
              <span
                className={`whitespace-nowrap px-8 font-display text-4xl font-bold uppercase transition-colors hover:text-gold-bright md:text-6xl ${
                  i % 2 ? "text-outline-gold" : "text-cream/85"
                }`}
              >
                {p}
              </span>
              <span className="h-3 w-3 rotate-45 border border-gold" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
