import type { ReactNode } from "react";

import type { PatternDefinition } from "./patterns";

export function PatternShell({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <div style={{ marginBottom: "48px" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: "var(--pencil)",
          marginBottom: "12px",
        }}
      >
        {label}
      </p>
      <div
        style={{
          border: "2px solid var(--border-strong)",
          boxShadow: "var(--shadow-md)",
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function UsedComponents({ items }: { items: string[] }) {
  return (
    <div
      style={{
        borderTop: "1px solid var(--border-default)",
        padding: "10px 20px",
        background: "var(--paper)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        flexWrap: "wrap",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          color: "var(--pencil)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        Composto por:
      </span>
      {items.map((item) => (
        <code
          key={item}
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            color: "var(--ink)",
            background: "var(--paper-deep)",
            padding: "2px 6px",
          }}
        >
          {item}
        </code>
      ))}
    </div>
  );
}

export function PatternContract({
  definition,
}: {
  definition: PatternDefinition;
}) {
  const sections = [
    { title: "Variantes", items: definition.variants },
    { title: "Anatomia", items: definition.anatomy },
    { title: "Tokens", items: definition.tokens },
    { title: "Regras responsivas", items: definition.responsiveRules },
    {
      title: "Campos CMS",
      items: definition.cmsFields.map(
        (field) => `${field.key}${field.required ? " *" : ""} — ${field.type}`,
      ),
    },
  ];

  return (
    <div
      style={{
        border: "2px solid var(--border-default)",
        background: "var(--paper)",
        padding: "20px",
        marginBottom: "40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "18px",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--pencil)",
              margin: "0 0 6px",
            }}
          >
            Contrato do bloco
          </p>
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--ink)",
              margin: 0,
              lineHeight: 1,
            }}
          >
            {definition.label}
          </h3>
        </div>
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "10px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--accent)",
            border: "1px solid var(--accent)",
            padding: "4px 8px",
          }}
        >
          Prioridade {definition.wordpressPriority}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
        }}
      >
        {sections.map((section) => (
          <div
            key={section.title}
            style={{
              background: "var(--surface-raised)",
              border: "2px solid var(--border-default)",
              padding: "14px 14px 12px",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--pencil)",
                margin: "0 0 10px",
              }}
            >
              {section.title}
            </p>
            <ul style={{ margin: 0, paddingLeft: "18px", color: "var(--ink)" }}>
              {section.items.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    lineHeight: 1.55,
                    marginBottom: "4px",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
