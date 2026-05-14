"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { componentGroups } from "@/lib/componentCatalog";
import { Navbar, type NavbarGroup } from "@carvalhorafael/eumilitar-ui";

const nav: NavbarGroup[] = [
  {
    label: "Biblioteca",
    items: [
      { href: "/biblioteca/instalacao",   label: "01 — Instalação" },
      { href: "/biblioteca/uso",          label: "02 — Uso" },
    ],
  },
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
      { href: "/componentes", label: "Todos os componentes" },
    ],
  },
  ...componentGroups.map((group) => ({
    label: group.title,
    items: group.items.map((item) => ({
      href: item.href,
      label: `${item.number} — ${item.title}`,
    })),
  })),
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <Navbar
      brand={
        <>
          <span
            className="text-xs font-bold uppercase block"
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
        </>
      }
      groups={nav}
      activeHref={pathname}
      menuLabel="Abrir navegação"
      closeLabel="Fechar navegação"
      renderLink={({ item, active, className, style, onClick }) => (
        <Link
          href={item.href}
          className={className}
          style={{
            ...style,
            fontWeight: active ? 600 : 400,
          }}
          onClick={onClick}
        >
          {item.label}
        </Link>
      )}
      version={
        <span
          style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--pencil-soft)" }}
        >
          v0.1.0 — alpha
        </span>
      }
    />
  );
}
