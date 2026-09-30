type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${className}`.trim()}>
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      <div className="ornament" aria-hidden="true" />
      {description ? <p>{description}</p> : null}
    </div>
  );
}
