import { Reveal } from "@/components/home/Reveal";
import { createWhatsAppUrl } from "@/lib/whatsapp";

export function FinalCTA() {
  return (
    <section id="plan" className="final-cta">
      <Reveal>
        <div className="eyebrow">Begin Your Journey</div>
        <h2>Tell us where your heart wants to go.</h2>
        <p>
          Share your dates, family needs, preferred destinations and purpose.
          Our team will shape a thoughtful South Indian journey around you.
        </p>
        <div className="button-row">
          <a
            className="button button-gold"
            href={createWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Us
          </a>
          <a
            className="button button-outline"
            href="mailto:hello@kalasamtourism.com"
          >
            Send an Enquiry
          </a>
        </div>
      </Reveal>
    </section>
  );
}
