import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Breadcrumbs } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Breadcrumbs" };

const items = [
  { href: "/", label: "Início" },
  { href: "/componentes/botao", label: "Componentes" },
  { label: "Breadcrumbs" },
];

export default function BreadcrumbsPage() {
  return (
    <div>
      <Header
        section="Componentes — 13"
        title="Breadcrumbs"
        description="Navegação estrutural para indicar hierarquia e retorno de contexto em documentação, áreas internas e fluxos com profundidade."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="13.1"
          title="Hierarquia"
          description="O último item recebe aria-current por padrão. Links anteriores podem usar renderLink para integrar Next Link ou outro roteador."
        />
        <ComponentDemo
          label="Breadcrumbs padrão"
          code={`<Breadcrumbs\n  items={[\n    { href: "/", label: "Início" },\n    { href: "/componentes/botao", label: "Componentes" },\n    { label: "Breadcrumbs" },\n  ]}\n/>`}
        >
          <Breadcrumbs items={items} />
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="13.2"
            title="Contrato"
            description="A API privilegia itens simples e integração explícita com roteadores via renderLink."
          />
          <div className="grid gap-3">
            {[
              ["items", "BreadcrumbItem[]", "Lista de itens com href, label e current opcional"],
              ["label", "string", "Nome acessível da navegação"],
              ["separator", "ReactNode", "Separador visual entre níveis"],
              ["renderLink", "function", "Renderização customizada de links"],
            ].map(([prop, token, value]) => (
              <div
                key={prop}
                className="grid gap-1 border-2 p-4 sm:grid-cols-[140px_180px_1fr]"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface-raised)" }}
              >
                <span style={{ color: "var(--text-secondary)" }}>{prop}</span>
                <strong style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{token}</strong>
                <span style={{ color: "var(--pencil)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
