import { features } from "../data/siteContent.js";

function ResearchAreaCard({ area }) {
  return (
    <article className="insight-card">
      <a href={area.href} target="_blank" rel="noopener noreferrer">
        <div className="insight-image" style={{ backgroundImage: `url(${area.image})` }} />
        <div className="insight-copy">
          <h3>
            <span>Research</span>
            {area.title}
          </h3>
          <p>{area.text}</p>
        </div>
      </a>
    </article>
  );
}

export default function KeyResearchAreasSection() {
  return (
    <section className="section insight-section key-research-section">
      <div className="inside">
        <h2 className="section-title">Key Research Areas</h2>
        <div className="insight-grid">
          {features.map((area) => (
            <ResearchAreaCard key={area.title} area={area} />
          ))}
        </div>
      </div>
    </section>
  );
}
