import { images } from "./images";

/* ------------------------------------------------------------------ */
/* Disciplines                                                         */
/* ------------------------------------------------------------------ */

export const disciplines = [
  {
    code: "01",
    title: "Calisthenics",
    blurb: "Pull-ups to muscle-ups, levers to planche. Master your own bodyweight under the coach who brought the sport to Kashmir.",
    image: images.disciplines.calisthenics,
  },
  {
    code: "02",
    title: "Parkour & Movement",
    blurb: "Vaults, precision jumps and flow. Train balance, power and fearless control in the real world.",
    image: images.disciplines.parkour,
  },
  {
    code: "03",
    title: "Self-Defence",
    blurb: "Practical, no-nonsense protection. Girls and women are welcome to join.",
    image: images.disciplines.selfDefence,
    badge: "Girls & Women Welcome",
  },
  {
    code: "04",
    title: "Army & Police Fitness Prep",
    blurb: "Run, pull, carry, repeat. Built to get you through recruitment physical tests and beyond.",
    image: images.disciplines.forces,
  },
  {
    code: "05",
    title: "Nutrition Coaching",
    blurb: "Fuel for performance, with guidance backed by our nutrition partner Muscle Intense SF.",
    image: images.disciplines.nutrition,
  },
] as const;

/* ------------------------------------------------------------------ */
/* Press                                                               */
/* ------------------------------------------------------------------ */

export const press = ["ANI", "Republic World", "The Kashmir Monitor", "Northlines"] as const;

/* ------------------------------------------------------------------ */
/* Academy: daily routine + physical standards                         */
/* TODO: ALL times and numbers below are PLACEHOLDERS. Confirm with Tiger. */
/* ------------------------------------------------------------------ */

export const routine = [
  { time: "05:00", title: "Reveille", detail: "Wake, hydrate, mobility flow." },
  { time: "05:30", title: "Dawn Run", detail: "5 km tempo along the Jhelum." },
  { time: "06:30", title: "Bar Session I", detail: "Pull, push, core. Skill work." },
  { time: "08:00", title: "Refuel", detail: "Protein-first breakfast." },
  { time: "10:00", title: "Self-Defence", detail: "Women & girls batch." },
  { time: "12:00", title: "Recovery", detail: "Stretch, rest, nutrition." },
  { time: "16:00", title: "Parkour Lab", detail: "Vaults, precision, flow." },
  { time: "17:30", title: "Forces Prep", detail: "Army & police test drills." },
  { time: "19:00", title: "Bar Session II", detail: "Strength & static holds." },
  { time: "21:00", title: "Lights Out", detail: "Sleep is training too." },
] as const;

export const standards = [
  { metric: "Pull-ups", value: "15", unit: "reps", note: "Strict, dead hang" },
  { metric: "Push-ups", value: "50", unit: "reps", note: "Unbroken" },
  { metric: "Dips", value: "25", unit: "reps", note: "Parallel bars" },
  { metric: "Plank", value: "3:00", unit: "min", note: "Hollow body" },
  { metric: "1.6 km Run", value: "6:30", unit: "min", note: "Forces standard" },
  { metric: "Muscle-up", value: "1", unit: "clean", note: "Graduation rep" },
] as const;

/* ------------------------------------------------------------------ */
/* Academy success stories (short wins)                                */
/* TODO: placeholder outcomes. Replace with real trainee results.      */
/* ------------------------------------------------------------------ */

export const successStories = [
  { stat: "0 → 12", label: "Pull-ups in 10 weeks", who: "Trainee, Bemina" },
  { stat: "1st", label: "Muscle-up after 4 months", who: "Trainee, Srinagar" },
  { stat: "Selected", label: "Cleared police physical test", who: "Forces Prep batch" },
] as const;

/* ------------------------------------------------------------------ */
/* Batches                                                             */
/* TODO: batch dates, timings and seat counts are PLACEHOLDERS.        */
/* ------------------------------------------------------------------ */

export const nextBatch = {
  name: "Foundation Batch",
  starts: "1 March 2027",
  timing: "Mon–Sat · 06:30 & 17:30",
  seatsLeft: 8,
  seatsTotal: 30,
};

/* ------------------------------------------------------------------ */
/* Mountain People                                                     */
/* TODO: drills, durations and locations are PLACEHOLDERS.             */
/* ------------------------------------------------------------------ */

export const drills = [
  { code: "MP-01", title: "Altitude Conditioning", location: "Gulmarg · 2,650 m", detail: "Acclimatise, breathe, climb. Cardio and load carry in thin air." },
  { code: "MP-02", title: "Land Navigation", location: "Dachigam forest", detail: "Map, compass and terrain reading. No GPS, no phones." },
  { code: "MP-03", title: "Wilderness Survival", location: "Lidder Valley", detail: "Shelter, water, fire and food. Stay alive with what you carry." },
  { code: "MP-04", title: "River Crossing", location: "Sindh River, Sonamarg", detail: "Rope systems, buddy lines and safe fording techniques." },
  { code: "MP-05", title: "Multi-Day Trek", location: "Kashmir Great Lakes", detail: "Five days, 70 km, full packs. Teamwork under fatigue." },
  { code: "MP-06", title: "Night Operations", location: "Classified ridgeline", detail: "Headtorch discipline, night movement and camp security." },
] as const;

export const mountainGallery = [
  images.mountain.trek,
  images.mountain.night,
  images.mountain.forest,
  images.mountain.fire,
  images.mountain.clouds,
  images.mountain.camp,
  images.mountain.ridge,
  images.mountain.lake,
] as const;

export const programmes = [
  "Calisthenics",
  "Parkour & Movement",
  "Self-Defence (Girls & Women)",
  "Self-Defence (Open)",
  "Army & Police Fitness Prep",
  "Nutrition Coaching",
  "Mountain People Unit",
] as const;
