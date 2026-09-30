import { travelPartners } from "@/data/homepage";
import { Reveal } from "@/components/home/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function B2BPartners() {
  return (
    <section id="partners" className="section partner-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="For Travel Partners"
            title="Build South India Journeys Together"
            description="Partner with Kalasam for curated spiritual, heritage and family journeys for your customers."
          />
        </Reveal>
        <div className="partner-grid">
          {travelPartners.map((partner) => (
            <Reveal key={partner.number}>
              <article className="partner-card">
                <div className="eyebrow">{partner.number}</div>
                <h3>{partner.title}</h3>
                <p>{partner.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
