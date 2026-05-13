"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      { href: "/componentes/botao",    label: "01 — Button" },
      { href: "/componentes/badge",    label: "02 — Badge" },
      { href: "/componentes/card",     label: "03 — Card" },
      { href: "/componentes/input",    label: "04 — Input & Textarea" },
      { href: "/componentes/select",   label: "05 — Select" },
      { href: "/componentes/checkbox", label: "06 — Checkbox & Radio" },
      { href: "/componentes/alert",     label: "07 — Alert" },
      { href: "/componentes/accordion", label: "08 — Accordion" },
      { href: "/componentes/table",     label: "09 — Table" },
      { href: "/componentes/navbar",    label: "10 — Navbar" },
      { href: "/componentes/drawer",    label: "11 — Drawer" },
      { href: "/componentes/tabs",      label: "12 — Tabs" },
      { href: "/componentes/breadcrumbs", label: "13 — Breadcrumbs" },
    ],
  },
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
