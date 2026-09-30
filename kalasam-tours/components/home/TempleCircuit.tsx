import { cholaCircuitImage, cholaCircuitSteps } from "@/data/homepage";
import { ImageCard } from "@/components/home/ImageCard";
import { Reveal } from "@/components/home/Reveal";

export function TempleCircuit() {
  return (
    <section id="circuits" className="section dark-section">
      <div className="container circuit-layout">
        <Reveal>
          <div className="circuit-image">
            <ImageCard
              image={cholaCircuitImage}
              sizes="(max-width: 850px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="circuit-copy">
            <div className="eyebrow">Signature Experience</div>
            <h2>The Chola Temple Circuit</h2>
            <div className="ornament ornament-left" aria-hidden="true" />
            <p className="body-copy">
              A thoughtfully paced pilgrimage through the architectural
              brilliance of the Chola era — created for travellers who want
              more than a checklist of destinations.
            </p>
            <div className="steps">
              {cholaCircuitSteps.map((step, index) => (
                <div className="step" key={step.place}>
                  <span className="step-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="step-copy">
                    <strong>{step.place}</strong>
                    <br />
                    {step.description}
                  </span>
                </div>
              ))}
            </div>
            <a className="button button-gold circuit-button" href="#plan">
              Build This Journey
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
