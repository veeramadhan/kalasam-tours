import { ImageCard } from "@/components/home/ImageCard";
import type { Journey } from "@/types/homepage";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function JourneyCard({
  journey,
  priority = false,
}: {
  journey: Journey;
  priority?: boolean;
}) {
  const enquiryMessage = `Hello Kalasam Tourism, I would like to know more about the ${journey.title} journey in ${journey.region}.`;

  return (
    <article className="journey-card">
      <div className="journey-card__image">
        <ImageCard
          image={journey.image}
          sizes="(max-width: 600px) 100vw, (max-width: 850px) 80vw, 380px"
          priority={priority}
        />
      </div>
      <div className="journey-card__body">
        <div className="journey-card__eyebrow">
          {journey.number} · {journey.region}
        </div>
        <h3>{journey.title}</h3>
        <p>{journey.description}</p>
        <a
          className="text-link"
          href={createWhatsAppUrl(enquiryMessage)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ask about the ${journey.title} journey on WhatsApp`}
        >
          Explore journey <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
