import { ImageCard } from "@/components/home/ImageCard";
import type { Journey } from "@/types/homepage";

export function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <article className="journey-card">
      <div className="journey-card__image">
        <ImageCard
          image={journey.image}
          sizes="(max-width: 600px) 100vw, (max-width: 850px) 80vw, 380px"
        />
      </div>
      <div className="journey-card__body">
        <div className="journey-card__eyebrow">
          {journey.number} · {journey.region}
        </div>
        <h3>{journey.title}</h3>
        <p>{journey.description}</p>
        <a className="text-link" href="#plan">
          Explore journey <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
