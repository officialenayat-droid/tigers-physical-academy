/**
 * ONE place for every image on the site.
 *
 * Everything except `founder` is an Unsplash placeholder. To swap in Tiger's
 * own photos: drop the file into /public/images and change the path here,
 * e.g. hero: img("/images/hero.jpg"). Nothing else needs to change.
 */

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=1600`;

export type SiteImage = { src: string; alt: string; /** CSS object-position, keeps faces in frame */ position?: string };

export const images = {
  // REAL photo of Imran "Tiger" Ahmad. Keep this. object-position keeps his face in frame.
  founder: {
    src: "/images/imran_tiger.jpg",
    alt: "Imran Ahmad “Tiger”, founder of Tiger's Physical Academy, Srinagar, standing beside an armoured vehicle in the snow",
    position: "45% 25%",
  },
  // Tight face crop of the founder photo, used in small badges.
  founderAvatar: { src: "/images/imran_tiger_avatar.jpg", alt: "Imran “Tiger” Ahmad" },

  // TODO: replace placeholders below with Tiger's own photos.
  hero: { src: u("1526506118085-60ce8714f8c5"), alt: "Athlete hanging from a pull-up bar in a dark gym", position: "50% 30%" },
  academyHero: { src: u("1605296867304-46d5465a13f1"), alt: "Athlete preparing for a heavy lift in low light", position: "50% 50%" },
  storeHero: { src: u("1622260614153-03223fb72052"), alt: "Green expedition backpack on rocks", position: "50% 50%" },
  contactHero: { src: u("1571902943202-507ec2618e8f"), alt: "Black and white training hall", position: "50% 50%" },
  finalCta: { src: u("1583454110551-21f2fa2afe61"), alt: "Hand gripping a dumbbell", position: "50% 50%" },
  trainees: { src: u("1534438327276-14e5300c3a48"), alt: "Rows of dumbbells in a training hall", position: "50% 50%" },
  women: { src: u("1541534741688-6078c6bfb5c5"), alt: "Woman training with a barbell", position: "50% 30%" },

  disciplines: {
    calisthenics: { src: u("1598971639058-fab3c3109a00"), alt: "Athlete doing push-ups", position: "50% 50%" },
    parkour: { src: u("1552674605-db6ffd4facb5"), alt: "Silhouettes of runners at dusk", position: "50% 50%" },
    selfDefence: { src: u("1555597673-b21d5c935865"), alt: "Martial artist in stance at sunset", position: "50% 50%" },
    forces: { src: u("1599058917212-d750089bc07e"), alt: "Athlete training with battle ropes", position: "60% 50%" },
    nutrition: { src: u("1490645935967-10de6ba17061"), alt: "Healthy whole-food meal", position: "50% 50%" },
  },

  mountain: {
    hero: { src: u("1454496522488-7a8e488e8606"), alt: "Snow-covered Himalayan peak", position: "50% 40%" },
    section: { src: u("1486870591958-9b9d0d1dda99"), alt: "Mountain rising above golden grassland", position: "50% 40%" },
    forest: { src: u("1448375240586-882707db888b"), alt: "Dark, misty forest", position: "50% 50%" },
    trek: { src: u("1551632811-561732d1e306"), alt: "Two trekkers with packs on a mountain trail", position: "50% 50%" },
    night: { src: u("1519681393784-d120267933ba"), alt: "Milky Way over snowy ridgeline", position: "50% 50%" },
    camp: { src: u("1504280390367-361c6d9f38f4"), alt: "View from inside a tent into a forest", position: "50% 50%" },
    fire: { src: u("1478131143081-80f7f84ca84d"), alt: "Group around a campfire", position: "50% 50%" },
    ridge: { src: u("1476611338391-6f395a0ebc7b"), alt: "Silhouettes on a ridge at sunset", position: "50% 50%" },
    clouds: { src: u("1506905925346-21bda4d32df4"), alt: "Peaks above a sea of clouds", position: "50% 50%" },
    lake: { src: u("1508672019048-805c876b67e2"), alt: "Lone figure on a jetty in a mountain lake", position: "50% 50%" },
    woods: { src: u("1441974231531-c6227db76b6e"), alt: "Trail through a pine forest", position: "50% 50%" },
  },
} satisfies Record<string, unknown>;

export { u as unsplash };
