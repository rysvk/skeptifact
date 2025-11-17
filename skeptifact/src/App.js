import { useEffect, useState } from "react";
import {
  SITE_TITLE,
  NAV_LINKS,
  HERO_BG_URL,
  HERO_TITLE,
  CONTENT_SECTIONS,
  LOGO192,
} from "./constants";
import "./App.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Try to preload the hero image so we can detect path issues early.
    const img = new Image();
    img.onload = () => {
      // image loaded successfully — set CSS variable on :root
      document.documentElement.style.setProperty('--hero-bg', `url('${HERO_BG_URL}')`);
      console.debug('Hero background loaded:', HERO_BG_URL);
      // log computed value to help debug CSS variable visibility
      const val = getComputedStyle(document.documentElement).getPropertyValue('--hero-bg');
      console.debug('Computed --hero-bg:', val);
    };
    img.onerror = (err) => {
      console.error('Failed to load hero background at', HERO_BG_URL, err);
      // leave a visible outline on .hero to indicate missing bg (optional)
      document.documentElement.style.setProperty('--hero-bg', "none");
    };
    img.src = HERO_BG_URL;
  }, []);

  // set the document title from constants so the browser tab shows the site title
  useEffect(() => {
    if (SITE_TITLE) document.title = SITE_TITLE;
  }, [SITE_TITLE]);

  return (
    <div className="site-root">
      {/* TOP NAVBAR */}
      <header className={`topbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          {/* LOGO */}
          <div className="logo">
            <img src={LOGO192} alt="logo" className="logo-img" />
            <span className={`site-title ${scrolled ? "inverted" : ""}`}>{SITE_TITLE}</span>
          </div>

          {/* NAV LINKS */}
          <nav className="nav-links">
            {NAV_LINKS.map((item) => (
              <a key={item} href="#" className={`nav-link ${scrolled ? "scrolled" : ""}`}>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
      </section>

      {/* CONTENT SECTION */}
      <div className="content">
        {CONTENT_SECTIONS.map((section, idx) => (
          <div key={section.heading || idx} className="content-section">
            <h2 className="content-heading"><strong>{section.heading}</strong></h2>
            {Array.isArray(section.paragraphs) &&
              section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="lead-paragraph">
                  {para}
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
