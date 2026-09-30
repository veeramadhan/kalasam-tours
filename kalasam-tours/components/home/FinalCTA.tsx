import { Reveal } from "@/components/home/Reveal";

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
            href="https://wa.me/919999999999?text=Hello%20Kalasam%20Tourism%2C%20I%20would%20like%20to%20plan%20a%20journey."
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
