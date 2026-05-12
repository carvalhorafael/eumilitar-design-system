interface ComponentDemoProps {
  label?: string;
  code?: string;
  children: React.ReactNode;
  background?: "base" | "dark" | "brand";
}

const bgMap = {
  base: "var(--surface-base)",
  dark: "var(--surface-dark)",
  brand: "var(--surface-brand)",
};

export function ComponentDemo({
  label,
  code,
  children,
  background = "base",
}: ComponentDemoProps) {
  return (
    <div
      className="border-2 overflow-hidden"
      style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
    >
      {label && (
        <div
          className="px-5 py-2 border-b-2"
          style={{ borderColor: "var(--border-strong)", background: "var(--paper-deep)" }}
        >
          <span
            className="text-xs font-bold uppercase tracking-widest"
            style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
          >
            {label}
          </span>
        </div>
      )}
      <div
        className="px-8 py-10 flex flex-wrap items-center gap-4"
        style={{ background: bgMap[background] }}
      >
        {children}
      </div>
      {code && (
        <div
          className="px-5 py-4 border-t-2"
          style={{ borderColor: "var(--border-default)", background: "var(--surface-dark)" }}
        >
          <pre
            className="text-xs overflow-x-auto"
            style={{ fontFamily: "var(--font-mono)", color: "#85b890" }}
          >
            {code}
          </pre>
        </div>
      )}
    </div>
  );
}
