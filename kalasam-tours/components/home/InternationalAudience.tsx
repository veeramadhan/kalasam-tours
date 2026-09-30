import { Reveal } from "@/components/home/Reveal";

const countries = ["🇲🇾 Malaysia", "🇸🇬 Singapore", "🇱🇰 Sri Lanka"];

export function InternationalAudience() {
  return (
    <section className="section international-section">
      <div className="container international-layout">
        <Reveal>
          <div className="international-copy">
            <div className="eyebrow">For Our Global Tamil Community</div>
            <h2>
              From Malaysia, Singapore &amp; Sri Lanka to Sacred South India
            </h2>
            <div className="ornament ornament-left" aria-hidden="true" />
            <p className="body-copy">
              Whether you are returning to your roots, travelling with parents
              or bringing the whole family, Kalasam designs the journey around
              your purpose — not simply a fixed package.
            </p>
            <a className="button button-gold" href="#plan">
              Tell Us Your Story
            </a>
          </div>
        </Reveal>
        <Reveal>
          <aside className="passport-card" aria-label="Welcome home">
            <div className="eyebrow">Welcome Home</div>
            <h2>
              Your heritage.
              <br />
              Your journey.
            </h2>
            <p>
              Airport assistance · Comfortable stays · Temple guidance ·
              Private transfers · Family-friendly pacing
            </p>
            <div className="country-list">
              {countries.map((country) => (
                <span className="country" key={country}>
                  {country}
                </span>
              ))}
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
