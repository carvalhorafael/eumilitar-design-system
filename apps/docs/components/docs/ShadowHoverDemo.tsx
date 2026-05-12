"use client";

const shadows = [
  { token: "--shadow-sm",    value: "2px 2px 0 var(--ink)",    label: "SM" },
  { token: "--shadow-md",    value: "4px 4px 0 var(--ink)",    label: "MD" },
  { token: "--shadow-lg",    value: "6px 6px 0 var(--ink)",    label: "LG" },
  { token: "--shadow-brand", value: "4px 4px 0 var(--accent)", label: "Brand" },
];

export function ShadowHoverDemo() {
  return (
    <div
      className="border-2 p-8 flex flex-wrap gap-8 items-center"
      style={{
        borderColor: "var(--border-strong)",
        background: "var(--surface-base)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      {shadows.map((s) => {
        const [ox, oy] = s.value.split(" ");
        return (
          <div key={s.token} className="flex flex-col items-center gap-3">
            <div
              style={{
                width: "80px",
                height: "80px",
                background: s.label === "Brand" ? "var(--accent-pale)" : "var(--paper)",
                border: "2px solid var(--border-strong)",
                boxShadow: s.value,
                cursor: "pointer",
                transition: "box-shadow 100ms ease, transform 100ms ease",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
                (e.currentTarget as HTMLElement).style.transform = `translate(${ox}, ${oy})`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = s.value;
                (e.currentTarget as HTMLElement).style.transform = "translate(0, 0)";
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "var(--pencil)",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--pencil-soft)",
                textTransform: "uppercase",
              }}
            >
              {s.token}
            </span>
          </div>
        );
      })}
    </div>
  );
}
