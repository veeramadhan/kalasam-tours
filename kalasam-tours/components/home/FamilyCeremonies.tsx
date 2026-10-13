import Link from "next/link";
import { ceremonyImage } from "@/data/homepage";
import { ImageCard } from "@/components/home/ImageCard";
import { Reveal } from "@/components/home/Reveal";

export function FamilyCeremonies() {
  return (
    <section
      id="ceremonies"
      className="ceremony-section"
      aria-labelledby="ceremony-title"
    >
      <Reveal>
        <div className="ceremony-image">
          <ImageCard
            image={ceremonyImage}
            sizes="(max-width: 850px) 100vw, 50vw"
          />
        </div>
      </Reveal>
      <Reveal className="ceremony-copy">
        <div className="eyebrow">Life&apos;s Sacred Milestones</div>
        <h2 id="ceremony-title">Celebrate Your Family&apos;s Story</h2>
        <div className="ornament ornament-left" aria-hidden="true" />
        <p className="body-copy">
          Mark your 60th marriage anniversary, family ceremony or spiritual
          milestone with a journey designed around the people who matter most.
        </p>
        <p className="body-copy">
          From temple coordination and accommodation to transport and
          day-by-day assistance, every detail is thoughtfully arranged.
        </p>
        <Link className="button button-gold" href="/#plan">
          Plan a Family Ceremony
        </Link>
      </Reveal>
    </section>
  );
}
