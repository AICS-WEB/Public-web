export default function ButtonLink({ href, children, className = "", target }) {
  return (
    <a className={`button-link ${className}`} href={href} target={target} rel={target ? "noreferrer" : undefined}>
      <span className="button-arrow" aria-hidden="true" />
      {children}
    </a>
  );
}
