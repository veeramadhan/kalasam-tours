import { destinations } from "@/data/homepage";
import { ImageCard } from "@/components/home/ImageCard";
import { Reveal } from "@/components/home/Reveal";
import { SectionHeading } from "@/components/home/SectionHeading";

export function Destinations() {
  return (
    <section id="destinations" className="section destinations-section">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Destinations"
            title="South India, Curated Beautifully"
          />
        </Reveal>
        <div className="destination-grid">
          {destinations.map((destination, index) => (
            <Reveal className="destination" key={destination.title}>
              <ImageCard
                image={destination.image}
                sizes={
                  index === 0
                    ? "(max-width: 600px) 100vw, (max-width: 850px) 100vw, 50vw"
                    : "(max-width: 600px) 100vw, (max-width: 850px) 50vw, 25vw"
                }
              />
              <div className="destination-label">
                <small>{destination.region}</small>
                <h3>{destination.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
