import { useEffect, useState } from "react";
import {
  SITE_TITLE,
  NAV_LINKS,
  CONTENT_SECTIONS,
  SKEPTICISMLOGO,
  FACTCHECKINGLOGO,
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
        <div className="hero-panel hero-left">
          <div className="hero-inner">
          <img src={SKEPTICISMLOGO} alt="SkepticismLogo" className="hero-logo" />
          <h2 className="hero-title">Skepticism</h2>
          </div>
        </div>

        <div className="hero-panel hero-right">
          <div className="hero-inner">
          <img src={FACTCHECKINGLOGO} alt="FactCheckingLogo" className="hero-logo" />
          <h2 className="hero-title">Fact Checking</h2>
          </div>
        </div>
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
