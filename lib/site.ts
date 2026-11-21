/**
 * Global site configuration.
 * Anything marked TODO is placeholder data and must be replaced before launch.
 */

export const site = {
  name: "Tiger's Physical Academy",
  shortName: "TPA",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://teamtiger.in",
  tagline: "Kashmir's First Calisthenics & Physical Academy",
  description:
    "Tiger's Physical Academy, Srinagar: Kashmir's first calisthenics academy, founded by Imran Ahmad “Tiger”, the first certified calisthenics athlete from Kashmir. Calisthenics, parkour, self-defence (girls and women welcome), army and police fitness prep, and nutrition coaching.",

  founder: {
    name: "Imran Ahmad",
    alias: "Tiger",
    title: "First Certified Calisthenics Athlete from Kashmir",
  },

  contact: {
    // TODO: replace with the academy's real numbers. +91 98765 43210 is FAKE.
    phoneDisplay: "+91 98765 43210",
    phoneHref: "tel:+919876543210",
    // TODO: real WhatsApp number in international format, digits only.
    whatsapp: "919876543210",
    // TODO: replace with the real email address.
    email: "hello@tigersphysicalacademy.in",
  },

  address: {
    line1: "Woolen Mills, Bemina",
    city: "Srinagar",
    region: "Jammu & Kashmir",
    postalCode: "190018",
    country: "IN",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Woolen+Mills+Bemina+Srinagar+190018",
    mapsEmbed: "https://www.google.com/maps?q=Woolen+Mills,+Bemina,+Srinagar,+Jammu+and+Kashmir+190018&output=embed",
  },

  instagram: [
    {
      handle: "tiger__official__",
      label: "Imran “Tiger” Ahmad",
      role: "Personal · 124K followers",
      url: "https://www.instagram.com/tiger__official__/",
    },
    {
      handle: "tigers_physical_academy",
      label: "Tiger's Physical Academy",
      role: "Founder",
      url: "https://www.instagram.com/tigers_physical_academy/",
    },
    {
      handle: "themountainpeople_",
      label: "The Mountain People",
      role: "CEO",
      url: "https://www.instagram.com/themountainpeople_/",
    },
  ],

  partner: {
    handle: "muscleintense",
    label: "Muscle Intense SF",
    role: "Nutrition Partner",
    url: "https://www.instagram.com/muscleintense/",
  },

  stats: {
    followers: "124K",
    posts: "967",
    founded: "2021",
  },
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/academy", label: "Academy" },
  { href: "/mountain-people", label: "Mountain People" },
  { href: "/store", label: "Store" },
  { href: "/contact", label: "Contact" },
] as const;

export function whatsappLink(message = "Hi Tiger's Physical Academy, I want to join the academy.") {
  return `https://wa.me/${site.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}
