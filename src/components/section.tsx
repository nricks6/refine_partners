type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "alt" | "dark";
  watermark?: boolean | "single";
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
  watermark = false,
}: SectionProps) {
  const variants = {
    default: "bg-cream",
    alt: "bg-cream-dark",
    dark: "bg-charcoal text-cream",
  };

  const watermarkClass = watermark === "single" ? "watermark-single" : watermark ? "watermark-bg" : "";

  return (
    <section id={id} className={`py-20 lg:py-28 ${variants[variant]} ${watermarkClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-widest text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 font-serif text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-charcoal-light">
          {description}
        </p>
      )}
    </div>
  );
}
