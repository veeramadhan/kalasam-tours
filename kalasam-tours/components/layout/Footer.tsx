import Link from "next/link";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/#top">
            <span className="brand-mark" aria-hidden="true">
              𑁍
            </span>
            <span>KALASAM</span>
          </Link>
          <p className="mt-4">
            Journeys beyond destinations.
            <br />
            Spiritual · Heritage · Family
          </p>
        </div>

        <div>
          <h2 className="footer-title">Explore</h2>
          <Link className="block" href="/#journeys">Journeys</Link>
          <Link className="block" href="/#destinations">Destinations</Link>
          <Link className="block" href="/#circuits">Temple Circuits</Link>
        </div>

        <div>
          <h2 className="footer-title">Plan</h2>
          <Link className="block" href="/#ceremonies">Family Ceremonies</Link>
          <Link className="block" href="/#senior">Senior Assistance</Link>
          <Link className="block" href="/#partners">B2B Partners</Link>
        </div>

        <div>
          <h2 className="footer-title">Connect</h2>
          <p>Chennai · Tamil Nadu<br />India</p>
          <a href="mailto:hello@kalasamTours.com">
            hello@kalasamTours.com
          </a>
        </div>
      </div>

      <div className="container footer-copy">
        © 2026 Kalasam Tours · Design prototype · Images are visual placeholders
        and should be replaced with licensed brand photography.
      </div>
    </footer>
  );
}
