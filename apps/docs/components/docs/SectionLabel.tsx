interface SectionLabelProps {
  number?: string;
  title: string;
  description?: string;
}

export function SectionLabel({ number, title, description }: SectionLabelProps) {
  return (
    <div
      className="mb-8 pb-6 border-b-2"
      style={{ borderColor: "var(--border-default)" }}
    >
      {number && (
        <span
          className="text-xs font-bold tracking-widest uppercase block mb-1"
          style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
        >
          {number}
        </span>
      )}
      <h2
        className="text-xl sm:text-2xl font-black uppercase leading-none"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-2 text-sm max-w-2xl"
          style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
