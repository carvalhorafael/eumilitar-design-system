import { Header } from "@/components/layout/Header";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Navbar, type NavbarGroup } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Navbar" };

const groups: NavbarGroup[] = [
  {
    label: "Fundamentos",
    items: [
      { href: "/fundamentos/cores", label: "01 — Cores" },
      { href: "/fundamentos/tipografia", label: "02 — Tipografia" },
      { href: "/fundamentos/espacamento", label: "03 — Espaçamento" },
    ],
  },
  {
    label: "Componentes",
    items: [
      { href: "/componentes/botao", label: "01 — Button" },
      { href: "/componentes/input", label: "04 — Input" },
      { href: "/componentes/navbar", label: "10 — Navbar" },
    ],
  },
];

function Brand() {
  return (
    <>
      <span
        className="block text-xs font-bold uppercase"
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
  );
}

export default function NavbarPage() {
  return (
    <div>
      <Header
        section="Componentes — 10"
        title="Navbar"
        description="Navegação responsiva com menu hamburguer no mobile e painel persistente em desktop. Use para documentação, áreas internas e estruturas com múltiplos grupos."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="10.1"
          title="Mobile-first"
          description="A navegação começa compacta com botão hamburguer. Em desktop, o painel permanece aberto como navegação lateral."
        />
        <ComponentDemo
          label="Navbar responsiva"
          code={`<Navbar\n  brand={<Brand />}\n  groups={groups}\n  activeHref=\"/componentes/navbar\"\n/>`}
        >
          <div style={{ width: "100%", maxWidth: "360px", border: "2px solid var(--border-strong)" }}>
            <Navbar brand={<Brand />} groups={groups} activeHref="/componentes/navbar" />
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="10.2"
            title="Contrato"
            description="O componente recebe grupos de links, caminho ativo, marca e uma função opcional para renderizar links com o roteador do consumer."
          />
          <div
            className="border-2 overflow-hidden"
            style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
          >
            {[
              { prop: "brand", token: "ReactNode", value: "Marca ou logotipo do produto" },
              { prop: "groups", token: "NavbarGroup[]", value: "Grupos com label e links" },
              { prop: "activeHref", token: "string", value: "Rota ativa para realce visual" },
              { prop: "renderLink", token: "function", value: "Integra Next Link, CMS ou roteador customizado" },
              { prop: "menuLabel / closeLabel", token: "string", value: "Labels acessíveis do botão mobile" },
            ].map((row, i) => (
              <div
                key={row.prop}
                className="flex flex-col gap-1 border-b px-5 py-3 sm:flex-row sm:items-center sm:gap-4"
                style={{
                  borderColor: i < 4 ? "var(--border-default)" : "transparent",
                  background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
                }}
              >
                <span className="text-sm sm:w-36 sm:shrink-0" style={{ color: "var(--text-secondary)" }}>{row.prop}</span>
                <span className="text-sm font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{row.token}</span>
                <span className="text-sm" style={{ color: "var(--pencil)" }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
