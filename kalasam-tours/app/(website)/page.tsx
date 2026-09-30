import { B2BPartners } from "@/components/home/B2BPartners";
import { Destinations } from "@/components/home/Destinations";
import { FamilyCeremonies } from "@/components/home/FamilyCeremonies";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Hero } from "@/components/home/Hero";
import { InternationalAudience } from "@/components/home/InternationalAudience";
import { SacredJourneys } from "@/components/home/SacredJourneys";
import { SeniorAssistance } from "@/components/home/SeniorAssistance";
import { TempleCircuit } from "@/components/home/TempleCircuit";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SacredJourneys />
      <TempleCircuit />
      <Destinations />
      <InternationalAudience />
      <FamilyCeremonies />
      <SeniorAssistance />
      <Testimonials />
      <B2BPartners />
      <FinalCTA />
    </>
  );
}
