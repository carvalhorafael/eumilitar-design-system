"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    label: "Fundamentos",
    items: [
      { href: "/fundamentos/cores",       label: "01 — Cores" },
      { href: "/fundamentos/tipografia",  label: "02 — Tipografia" },
      { href: "/fundamentos/espacamento", label: "03 — Espaçamento" },
      { href: "/fundamentos/tokens",      label: "04 — Tokens" },
      { href: "/fundamentos/sombras",     label: "05 — Sombras & Efeitos" },
    ],
  },
  {
    label: "Padrões",
    items: [
      { href: "/padroes/hero",     label: "01 — Hero" },
      { href: "/padroes/urgencia", label: "02 — Urgência" },
      { href: "/padroes/captacao", label: "03 — Captação" },
      { href: "/padroes/faq",        label: "04 — FAQ" },
      { href: "/padroes/beneficios",   label: "05 — Benefícios" },
      { href: "/padroes/depoimentos",  label: "06 — Depoimentos" },
      { href: "/padroes/landing",      label: "07 — Landing Page" },
    ],
  },
  {
    label: "Componentes",
    items: [
      { href: "/componentes/botao",    label: "01 — Button" },
      { href: "/componentes/badge",    label: "02 — Badge" },
      { href: "/componentes/card",     label: "03 — Card" },
      { href: "/componentes/input",    label: "04 — Input & Textarea" },
      { href: "/componentes/select",   label: "05 — Select" },
      { href: "/componentes/checkbox", label: "06 — Checkbox & Radio" },
      { href: "/componentes/alert",     label: "07 — Alert" },
      { href: "/componentes/accordion", label: "08 — Accordion" },
      { href: "/componentes/table",     label: "09 — Table" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="w-56 shrink-0 border-r-2 flex flex-col"
      style={{
        borderColor: "var(--border-strong)",
        background: "var(--paper)",
        minHeight: "100vh",
      }}
    >
      {/* Logo */}
      <div
        className="px-5 py-4 border-b-2"
        style={{ borderColor: "var(--border-strong)" }}
      >
        <Link href="/" className="block">
          <span
            className="text-xs font-bold tracking-widest uppercase block"
            style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)", fontSize: "10px" }}
          >
            EuMilitar
          </span>
          <span
            className="font-black uppercase leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)", fontSize: "17px" }}
          >
            Design System
          </span>
        </Link>
      </div>

      {/* Navegação */}
      <nav className="flex-1 py-5 overflow-y-auto">
        {nav.map((group) => (
          <div key={group.label} className="mb-5">
            <span
              className="px-5 block mb-1"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--pencil)",
              }}
            >
              {group.label}
            </span>
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center px-5 py-1.5 text-sm transition-all"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "13px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--text-brand)" : "var(--text-secondary)",
                    background: active ? "var(--accent-pale)" : "transparent",
                    borderLeft: active
                      ? "3px solid var(--accent)"
                      : "3px solid transparent",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Versão */}
      <div
        className="px-5 py-3 border-t-2"
        style={{ borderColor: "var(--border-default)" }}
      >
        <span
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)" }}
        >
          v0.1.0 — alpha
        </span>
      </div>
    </aside>
  );
}
