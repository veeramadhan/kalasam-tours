import { journeys } from "@/data/homepage";
import { JourneyCard } from "@/components/home/JourneyCard";
import { Reveal } from "@/components/home/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function SacredJourneys() {
  return (
    <section id="journeys" className="section journeys-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Sacred South India"
            title="Where Every Journey Has a Story"
            description="Curated spiritual and heritage experiences across Tamil Nadu, Kerala and Karnataka — designed with care for families, elders and travellers from around the world."
          />
        </Reveal>
        <div className="journey-grid">
          {journeys.map((journey) => (
            <Reveal key={journey.number}>
              <JourneyCard journey={journey} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
