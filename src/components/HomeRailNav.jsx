import { useEffect, useState } from "react";

const sections = [
  { label: "Home", href: "#home" },
  { label: "Insight", href: "#insight" },
  { label: "About", href: "#about" },
  { label: "Areas", href: "#areas" },
  { label: "Research", href: "#research" },
  { label: "Location", href: "#location" },
];

export default function HomeRailNav() {
  const [activeHref, setActiveHref] = useState(sections[0].href);

  useEffect(() => {
    let frame = 0;

    const updateActiveSection = () => {
      frame = 0;
      const marker = window.innerHeight * 0.46;
      let nextActive = sections[0].href;

      for (const section of sections) {
        const element = document.querySelector(section.href);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= marker) {
          nextActive = section.href;
        }
        if (rect.top <= marker && rect.bottom > marker) {
          break;
        }
      }

      setActiveHref(nextActive);
    };

    const requestUpdate = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const navigateTo = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    setActiveHref(href);
  };

  return (
    <nav className="home-rail-nav" aria-label="Home sections">
      {sections.map((section) => {
        const isActive = activeHref === section.href;

        return (
          <a
            className={isActive ? "is-active" : ""}
            href={section.href}
            aria-current={isActive ? "location" : undefined}
            key={section.href}
            onClick={(event) => navigateTo(event, section.href)}
          >
            <span aria-hidden="true" />
            {section.label}
          </a>
        );
      })}
    </nav>
  );
}
