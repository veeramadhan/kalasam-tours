import { assistanceFeatures, seniorImage } from "@/data/homepage";
import { ImageCard } from "@/components/home/ImageCard";
import { Reveal } from "@/components/home/Reveal";

export function SeniorAssistance() {
  return (
    <section id="senior" className="section senior-section">
      <div className="container senior-layout">
        <Reveal>
          <div className="senior-image">
            <ImageCard
              image={seniorImage}
              sizes="(max-width: 850px) 100vw, 40vw"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="senior-copy">
            <div className="eyebrow">Travel With Confidence</div>
            <h2>Care for Every Generation</h2>
            <div className="ornament ornament-left" aria-hidden="true" />
            <p className="body-copy">
              For senior travellers, comfort is not an extra. Our journeys can
              be planned with gentle pacing, convenient stays, assisted
              transfers and thoughtful support throughout the experience.
            </p>
            <div className="feature-grid">
              {assistanceFeatures.map((feature) => (
                <div className="feature" key={feature.title}>
                  <strong>{feature.title}</strong>
                  <span>{feature.description}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
