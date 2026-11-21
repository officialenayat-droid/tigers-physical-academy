import { unsplash } from "./images";

/**
 * Store catalogue (UI only, no backend yet).
 * TODO: ALL product names, prices, descriptions and images below are PLACEHOLDERS.
 * Replace with real gear, real prices (INR) and Tiger's own product photos.
 */

export const categories = ["All", "Apparel", "Load Carry", "Footwear", "Survival"] as const;
export type Category = Exclude<(typeof categories)[number], "All">;

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number; // INR
  compareAt?: number;
  tag?: string;
  blurb: string;
  image: { src: string; alt: string };
};

export const products: Product[] = [
  {
    id: "tpa-stripe-tee",
    name: "TPA Tiger Stripe Training Tee",
    category: "Apparel",
    price: 1299,
    tag: "Bestseller",
    blurb: "Sweat-wicking, built for muscle-ups and long sessions.",
    image: { src: unsplash("1521572163474-6864f9cf17ab"), alt: "Training t-shirt" },
  },
  {
    id: "mp-field-hoodie",
    name: "Mountain People Field Hoodie",
    category: "Apparel",
    price: 2799,
    blurb: "Heavyweight fleece for Kashmir winters and dawn treks.",
    image: { src: unsplash("1556821840-3a63f95609a7"), alt: "Grey field hoodie" },
  },
  {
    id: "assault-pack-30",
    name: "30L Assault Pack",
    category: "Load Carry",
    price: 4499,
    compareAt: 4999,
    tag: "New",
    blurb: "Ruck-ready. Load it, strap it, climb.",
    image: { src: unsplash("1622260614153-03223fb72052"), alt: "Green 30 litre pack" },
  },
  {
    id: "trail-assault-boots",
    name: "Trail Assault Boots",
    category: "Footwear",
    price: 6499,
    blurb: "Ankle support and grip for scree, snow and river beds.",
    image: { src: unsplash("1520639888713-7851133b1ed0"), alt: "Leather trail boots" },
  },
  {
    id: "urban-daypack",
    name: "Urban Ops Daypack",
    category: "Load Carry",
    price: 2299,
    blurb: "Low-profile carry for the daily grind.",
    image: { src: unsplash("1553062407-98eeb64c6a62"), alt: "Navy daypack" },
  },
  {
    id: "alpine-bivvy",
    name: "Alpine Bivvy Shelter",
    category: "Survival",
    price: 3899,
    tag: "Limited",
    blurb: "One-person shelter, packs smaller than a water bottle.",
    image: { src: unsplash("1504280390367-361c6d9f38f4"), alt: "Bivvy shelter opening onto a forest" },
  },
];

export const formatINR = (n: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
