import SectionHeading from "../ui/SectionHeading";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import Button from "../ui/Button";
import ProductCard from "../ProductCard";
import { products } from "@/lib/products";

export default function GearPreview() {
  return (
    <section className="relative bg-ink py-24 md:py-36" aria-label="Gear store preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading index="04" eyebrow="Tactical Gear" title={["Kit for", { text: "the climb.", className: "text-gold-grad" }]} />
          <Button href="/store" variant="ghost">Enter Store</Button>
        </div>
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {products.slice(0, 4).map((p) => (
            <RevealItem key={p.id}>
              <ProductCard product={p} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
