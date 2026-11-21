/**
 * Trainee stories.
 *
 * - Kamran Khaliq: based on his quote in The Kashmir Monitor. Still re-check the
 *   exact wording against the article before launch.
 * - TODO VERIFY / REPLACE: the Akrar-ul-Haq and Imran Ahmad Lone quotes are
 *   PARAPHRASED from press coverage, not verbatim. Confirm them with the trainees
 *   or replace them with real, approved quotes (with permission to publish).
 */

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  source?: string;
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    name: "Kamran Khaliq",
    role: "Trainee",
    quote:
      "Watching Imran sir perform gravity-defying stunts motivated me to explore calisthenics. It changed me, physically and mentally.",
    source: "The Kashmir Monitor",
    verified: true,
  },
  {
    // TODO VERIFY: paraphrased from press coverage.
    name: "Akrar-ul-Haq",
    role: "Trainee",
    quote:
      "Before the academy I had no direction. Now my mornings start on the bars, and the discipline follows me everywhere else.",
    source: "Paraphrased from press coverage",
    verified: false,
  },
  {
    // TODO VERIFY: paraphrased from press coverage.
    name: "Imran Ahmad Lone",
    role: "Trainee",
    quote:
      "No machines, no excuses. Just your body, a bar and a coach who pushes you past what you thought was possible.",
    source: "Paraphrased from press coverage",
    verified: false,
  },
];
