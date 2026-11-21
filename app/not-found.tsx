import Button from "@/components/ui/Button";
import HexLogo from "@/components/ui/HexLogo";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 text-center grid-lines">
      <div className="absolute inset-0 vignette" />
      <div className="relative">
        <HexLogo className="mx-auto h-16 w-16" />
        <p className="label mt-8 text-[0.7rem] text-gold-bright">Error 404 · Off the map</p>
        <h1 className="mt-4 text-[clamp(3rem,12vw,8rem)] font-bold">Lost in the wild.</h1>
        <p className="mx-auto mt-4 max-w-md text-cream/60">This trail doesn&apos;t exist. Regroup at base camp.</p>
        <div className="mt-10">
          <Button href="/">Back to Base</Button>
        </div>
      </div>
    </section>
  );
}
