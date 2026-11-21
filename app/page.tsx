import Hero from "@/components/home/Hero";
import Founder from "@/components/home/Founder";
import MissionBand from "@/components/home/MissionBand";
import Disciplines from "@/components/home/Disciplines";
import MountainTeaser from "@/components/home/MountainTeaser";
import PressTicker from "@/components/PressTicker";
import GearPreview from "@/components/home/GearPreview";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PressTicker />
      <Founder />
      <MissionBand />
      <Disciplines />
      <MountainTeaser />
      <GearPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
