import { Reveal } from "@/components/home/Reveal";
import { ImageCard } from "@/components/home/ImageCard";
import type { HomeImage } from "@/types/homepage";

const heroImage: HomeImage = {
  src: "/images/hero-temple.webp",
  alt: "A towering South Indian temple gopuram illuminated by the warm evening sun",
};

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-media">
        <ImageCard
          image={heroImage}
          sizes="100vw"
          priority
          className="hero-image"
        />
      </div>
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-fade" aria-hidden="true" />
      <Reveal className="hero-content">
        <div className="kicker">Kalasam Tours · South India</div>
        <h1 id="hero-title">
          Journeys Beyond
          <br />
          Destinations
        </h1>
        <div className="ornament" aria-hidden="true" />
        <p className="hero-copy">
          Travel into the sacred heart of South India — where ancient temples,
          living traditions and unforgettable moments become one meaningful
          journey.
        </p>
        <div className="button-row">
          <a className="button button-gold" href="#journeys">
            Explore Journeys
          </a>
          <a className="button button-outline" href="#plan">
            Plan My Journey
          </a>
        </div>
      </Reveal>
      <a className="scroll-cue" href="#journeys">
        SCROLL TO DISCOVER ↓
      </a>
    </section>
  );
}
