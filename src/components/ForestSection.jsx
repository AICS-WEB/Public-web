import ButtonLink from "./ButtonLink.jsx";
import { labLocation } from "../data/siteContent.js";

function LocationInfoItem({ item }) {
  return (
    <div className="location-info-item">
      <h3>{item.label}</h3>
      <p>{item.value}</p>
    </div>
  );
}

export default function ForestSection() {
  return (
    <section className="forest-section location-section">
      <div className="inside location-header">
        <h2>{labLocation.title}</h2>
        <ButtonLink href={labLocation.mapHref} target="_blank">
          Get Directions
        </ButtonLink>
      </div>

      <div className="inside location-layout">
        <div className="location-map-wrap">
          <iframe
            className="location-map"
            title="AICS Lab Location Map"
            src={labLocation.mapSrc}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="location-info">
          {labLocation.details.map((item) => (
            <LocationInfoItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
