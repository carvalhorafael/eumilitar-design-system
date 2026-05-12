import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Button" };

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const StarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function BotaoPage() {
  return (
    <div>
      <Header
        section="Componentes — 01"
        title="Button"
        description="Cinco variantes, três tamanhos. Hover com deslocamento de sombra neo-brutalista — a sombra colapsa e o botão translada 2px."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel number="01.1" title="Variantes" description="Hierarquia de ação: use Primary para a ação principal, Secondary para ações secundárias, Ghost para ações terciárias." />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Primary — ação principal"
            code={`<Button variant="primary">Inscrever-se</Button>`}
          >
            <Button variant="primary">Inscrever-se</Button>
            <Button variant="primary" icon={<ArrowIcon />} iconPosition="right">Ver cursos</Button>
            <Button variant="primary" disabled>Desabilitado</Button>
          </ComponentDemo>

          <ComponentDemo
            label="Secondary — ação secundária"
            code={`<Button variant="secondary">Saiba mais</Button>`}
          >
            <Button variant="secondary">Saiba mais</Button>
            <Button variant="secondary" icon={<ArrowIcon />} iconPosition="right">Acessar portal</Button>
            <Button variant="secondary" disabled>Desabilitado</Button>
          </ComponentDemo>

          <ComponentDemo
            label="Ghost — ação terciária"
            code={`<Button variant="ghost">Cancelar</Button>`}
          >
            <Button variant="ghost">Cancelar</Button>
            <Button variant="ghost" icon={<ArrowIcon />} iconPosition="right">Ver detalhes</Button>
            <Button variant="ghost" disabled>Desabilitado</Button>
          </ComponentDemo>

          <ComponentDemo
            label="Danger — ação destrutiva"
            code={`<Button variant="danger">Excluir conta</Button>`}
          >
            <Button variant="danger">Excluir conta</Button>
            <Button variant="danger" disabled>Desabilitado</Button>
          </ComponentDemo>

          <ComponentDemo
            label="Brand Inverse — sobre fundo escuro ou verde"
            background="brand"
            code={`<Button variant="brand-inverse">Começar agora</Button>`}
          >
            <Button variant="brand-inverse">Começar agora</Button>
            <Button variant="brand-inverse" icon={<ArrowIcon />} iconPosition="right">Ver planos</Button>
          </ComponentDemo>

          <ComponentDemo
            label="Urgent — CTA de conversão máxima, escassez"
            code={`<Button variant="urgent">Garantir última vaga →</Button>`}
          >
            <Button variant="urgent">Garantir última vaga →</Button>
            <Button variant="urgent" size="lg" icon={<ArrowIcon />} iconPosition="right">Inscrever agora</Button>
            <Button variant="urgent" disabled>Esgotado</Button>
          </ComponentDemo>
        </div>

        {/* Hierarquia de urgência */}
        <div className="mb-10">
          <ComponentDemo label="Hierarquia — Verde normal × Laranja urgente">
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <Button variant="primary" size="md">Ver todos os cursos</Button>
              <Button variant="urgent" size="md">Garantir última vaga →</Button>
            </div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pencil)", maxWidth: "260px", lineHeight: 1.7 }}>
              <strong style={{ color: "var(--ink)", display: "block", marginBottom: "4px" }}>Regra de uso:</strong>
              Use <code style={{ color: "var(--text-brand)" }}>primary</code> (verde) para a ação principal da interface.
              Reserve <code style={{ color: "var(--fire)" }}>urgent</code> (laranja) exclusivamente quando há escassez ou prazo real — não como estilo decorativo.
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel number="01.2" title="Tamanhos" />
        <ComponentDemo
          label="SM · MD · LG"
          code={`<Button size="sm">Pequeno</Button>\n<Button size="md">Médio</Button>\n<Button size="lg">Grande</Button>`}
        >
          <Button size="sm">Pequeno</Button>
          <Button size="md">Médio</Button>
          <Button size="lg">Grande</Button>
        </ComponentDemo>

        <div className="mt-4 mb-10">
          <ComponentDemo
            label="Com ícone — SM · MD · LG"
            code={`<Button size="sm" icon={<Icon />}>Filtrar</Button>`}
          >
            <Button size="sm" icon={<StarIcon />}>Destaque</Button>
            <Button size="md" icon={<StarIcon />}>Destaque</Button>
            <Button size="lg" icon={<StarIcon />}>Destaque</Button>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="01.3"
          title="Comportamento de Hover"
          description="A sombra offset colapsa e o botão se desloca 2px — simulando pressão física. É o padrão neo-brutalista deste design system."
        />
        <div
          className="border-2 p-6"
          style={{
            borderColor: "var(--border-default)",
            background: "var(--paper)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--pencil)",
          }}
        >
          <p className="mb-2">Estado normal: <code style={{ color: "var(--ink)" }}>box-shadow: 4px 4px 0 var(--ink)</code></p>
          <p className="mb-2">Estado hover: <code style={{ color: "var(--ink)" }}>box-shadow: none; transform: translate(2px, 2px)</code></p>
          <p>Transition: <code style={{ color: "var(--ink)" }}>100ms ease</code></p>
        </div>

        <div className="mt-4 mb-10">
          <ComponentDemo label="Passe o mouse para ver o efeito">
            <Button variant="primary">Hover aqui</Button>
            <Button variant="secondary">Hover aqui</Button>
            <Button variant="danger">Hover aqui</Button>
          </ComponentDemo>
        </div>

        <SectionLabel number="01.4" title="Tokens Usados" />
        <div
          className="border-2 overflow-hidden"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
        >
          {[
            { prop: "background (primary)", token: "--surface-brand", value: "#1f4d2a" },
            { prop: "color (primary)", token: "--text-inverse", value: "#f5f0e8" },
            { prop: "border", token: "--border-strong", value: "#433c34" },
            { prop: "box-shadow", token: "--shadow-md", value: "4px 4px 0 var(--ink)" },
            { prop: "font-family", token: "--font-body", value: "'Barlow', sans-serif" },
            { prop: "border-radius", token: "--radius-sm", value: "2px" },
            { prop: "padding (md)", token: "--sp-2 / --sp-4", value: "8px / 16px" },
          ].map((row, i) => (
            <div
              key={row.prop}
              className="flex items-center gap-4 px-5 py-3 border-b"
              style={{
                borderColor: i < 6 ? "var(--border-default)" : "transparent",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
              }}
            >
              <span className="w-40 shrink-0 text-sm" style={{ color: "var(--text-secondary)" }}>{row.prop}</span>
              <span className="flex-1 text-sm font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{row.token}</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}>{row.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
