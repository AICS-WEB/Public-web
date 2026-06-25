import ButtonLink from "./ButtonLink.jsx";

export default function FeatureSection({ feature }) {
  const image = (
    <picture className="feature-media">
      <source media="(max-width: 767px)" srcSet={feature.mobileImage} />
      <img src={feature.image} alt="" />
    </picture>
  );

  const copy = (
    <div className="feature-copy">
      <h2>{feature.title}</h2>
      <p>{feature.text}</p>
      <ButtonLink href={feature.href}>자세히 보기</ButtonLink>
    </div>
  );

  return (
    <section className={`feature-section feature-${feature.align}`}>
      <div className="feature-grid">{feature.align === "right" ? <>{image}{copy}</> : <>{copy}{image}</>}</div>
    </section>
  );
}
