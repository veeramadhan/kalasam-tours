"use client";

import { useEffect, useState } from "react";

const navigation = [
  { label: "Journeys", href: "#journeys" },
  { label: "Temple Circuits", href: "#circuits" },
  { label: "Ceremonies", href: "#ceremonies" },
  { label: "Senior Care", href: "#senior" },
  { label: "B2B", href: "#partners" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");

    if (!hero || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.05 },
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="site-header"
      data-scrolled={scrolled}
      data-menu-open={open}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
        }
      }}
    >
      <div className="container nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            𑁍
          </span>
          <span>KALASAM</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-cta" href="#plan">
          Plan My Journey
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="menu-toggle"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.7" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="mobile-cta"
            href="#plan"
            onClick={() => setOpen(false)}
          >
            Plan My Journey
          </a>
        </nav>
      )}
    </header>
  );
}