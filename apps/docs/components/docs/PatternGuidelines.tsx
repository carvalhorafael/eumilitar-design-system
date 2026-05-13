interface GuidelineRow {
  title: string;
  description: string;
  aside?: string;
  asideColor?: string;
}

interface PatternGuidelinesProps {
  rows: GuidelineRow[];
  layout?: "stack" | "split";
  footer?: string;
}

export function PatternGuidelines({
  rows,
  layout = "stack",
  footer,
}: PatternGuidelinesProps) {
  return (
    <div
      className="border-2 p-6"
      style={{
        borderColor: "var(--border-default)",
        background: "var(--paper)",
        fontFamily: "var(--font-mono)",
        fontSize: "12px",
      }}
    >
      {rows.map((row, index) => (
        <div
          key={`${row.title}-${index}`}
          className={layout === "split" ? "docs-guideline-row--split py-2 border-b last:border-0" : "flex flex-col py-3 border-b last:border-0"}
          style={{ borderColor: "var(--rule)", gap: layout === "split" ? undefined : "4px" }}
        >
          {layout === "split" ? (
            <>
              <span
                style={{
                  width: row.aside ? "96px" : "64px",
                  flexShrink: 0,
                  fontWeight: 700,
                  color: row.asideColor ?? "var(--pencil)",
                }}
              >
                {row.aside ?? row.title}
              </span>
              <span style={{ flex: 1, color: "var(--ink)", lineHeight: 1.6 }}>
                {row.description}
              </span>
            </>
          ) : (
            <>
              <div className="flex items-start justify-between gap-4">
                <span style={{ color: "var(--ink)", fontWeight: 600, lineHeight: 1.6 }}>
                  {row.title}
                </span>
                {row.aside ? (
                  <code
                    style={{
                      flexShrink: 0,
                      color: row.asideColor ?? "var(--pencil)",
                      fontSize: "11px",
                    }}
                  >
                    {row.aside}
                  </code>
                ) : null}
              </div>
              <span style={{ color: "var(--pencil)", fontSize: "11px" }}>
                ↳ {row.description}
              </span>
            </>
          )}
        </div>
      ))}
      {footer ? (
        <p style={{ marginTop: "16px", color: "var(--pencil)", lineHeight: 1.7, fontSize: "11px" }}>
          {footer}
        </p>
      ) : null}
    </div>
  );
}
