import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { componentCount, componentGroups } from "@/lib/componentCatalog";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Componentes" };

function groupId(title: string) {
  return `component-group-${title.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function ComponentesPage() {
  return (
    <div>
      <Header
        section="Componentes"
        title="Componentes"
        description={`${componentCount} componentes documentados, organizados por função de interface.`}
      />

      <div className="docs-page max-w-6xl">
        <div className="grid grid-cols-1 gap-8">
          {componentGroups.map((group) => (
            <section key={group.title} aria-labelledby={groupId(group.title)}>
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2
                    id={groupId(group.title)}
                    className="font-black uppercase leading-none"
                    style={{
                      color: "var(--ink)",
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.75rem, 8vw, 2.75rem)",
                    }}
                  >
                    {group.title}
                  </h2>
                  <p
                    className="mt-2 max-w-2xl text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}
                  >
                    {group.description}
                  </p>
                </div>
                <span
                  className="text-xs font-bold uppercase"
                  style={{ color: "var(--pencil)", fontFamily: "var(--font-mono)" }}
                >
                  {String(group.items.length).padStart(2, "0")} itens
                </span>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {group.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block border-2 p-4 transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                    style={{
                      background: "var(--surface-raised)",
                      borderColor: "var(--border-strong)",
                      boxShadow: "var(--shadow-sm)",
                      textDecoration: "none",
                    }}
                  >
                    <span
                      className="mb-3 block text-xs font-bold uppercase"
                      style={{ color: "var(--text-brand)", fontFamily: "var(--font-mono)" }}
                    >
                      {item.number}
                    </span>
                    <span
                      className="block text-xl font-black uppercase leading-none"
                      style={{ color: "var(--ink)", fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="mt-3 block text-sm"
                      style={{ color: "var(--text-secondary)", lineHeight: 1.5 }}
                    >
                      {item.description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
