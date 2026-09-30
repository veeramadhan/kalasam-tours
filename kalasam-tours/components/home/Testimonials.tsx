import { testimonialImage } from "@/data/homepage";
import { ImageCard } from "@/components/home/ImageCard";
import { Reveal } from "@/components/home/Reveal";

export function Testimonials() {
  return (
    <section className="section testimonial-section">
      <div className="container testimonial-layout">
        <Reveal>
          <div className="testimonial-image">
            <ImageCard
              image={testimonialImage}
              sizes="(max-width: 850px) 100vw, 50vw"
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="quote-card">
            <h2 className="sr-only">A journey to remember</h2>
            <div className="eyebrow">Journeys That Stay With You</div>
            <div className="quote-mark" aria-hidden="true">
              “
            </div>
            <blockquote>
              Every detail felt thoughtful. We could simply be present with our
              family and the sacred places we came to experience.
            </blockquote>
            <p className="quote-meta">PLACEHOLDER TESTIMONIAL · Singapore</p>
            <div className="ornament ornament-left" aria-hidden="true" />
            <p className="quote-note">
              Sample content for design preview — replace with verified
              customer reviews.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
