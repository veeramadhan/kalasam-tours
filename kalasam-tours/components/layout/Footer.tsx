export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              𑁍
            </span>
            <span>KALASAM</span>
          </a>
          <p className="mt-4">
            Journeys beyond destinations.
            <br />
            Spiritual · Heritage · Family
          </p>
        </div>

        <div>
          <h2 className="footer-title">Explore</h2>
          <a className="block" href="#journeys">Journeys</a>
          <a className="block" href="#destinations">Destinations</a>
          <a className="block" href="#circuits">Temple Circuits</a>
        </div>

        <div>
          <h2 className="footer-title">Plan</h2>
          <a className="block" href="#ceremonies">Family Ceremonies</a>
          <a className="block" href="#senior">Senior Assistance</a>
          <a className="block" href="#partners">B2B Partners</a>
        </div>

        <div>
          <h2 className="footer-title">Connect</h2>
          <p>Chennai · Tamil Nadu<br />India</p>
          <a href="mailto:hello@kalasamtourism.com">
            hello@kalasamtourism.com
          </a>
        </div>
      </div>

      <div className="container footer-copy">
        © 2026 Kalasam Tourism · Design prototype · Images are visual placeholders
        and should be replaced with licensed brand photography.
      </div>
    </footer>
  );
}