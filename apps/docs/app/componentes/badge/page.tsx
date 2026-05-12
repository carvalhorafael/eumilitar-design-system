import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Badge } from "@/components/ui/Badge";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Badge" };

export default function BadgePage() {
  return (
    <div>
      <Header
        section="Componentes — 02"
        title="Badge"
        description="Rótulos compactos para status, categorias e forças militares. Monospace em caixa alta com tracking largo — linguagem de field manual."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel number="02.1" title="Variantes Base" />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Default · Brand · Outline · Dark"
            code={`<Badge variant="default">Novo</Badge>\n<Badge variant="brand">Aprovado</Badge>\n<Badge variant="outline">Inativo</Badge>\n<Badge variant="dark">Beta</Badge>`}
          >
            <Badge variant="default">Padrão</Badge>
            <Badge variant="brand">Aprovado</Badge>
            <Badge variant="outline">Pendente</Badge>
            <Badge variant="dark">Beta</Badge>
          </ComponentDemo>

          <ComponentDemo
            label="Com ponto de status"
            code={`<Badge variant="brand" dot>Online</Badge>`}
          >
            <Badge variant="brand" dot>Ativo</Badge>
            <Badge variant="default" dot>Offline</Badge>
            <Badge variant="dark" dot>Processando</Badge>
          </ComponentDemo>

          <ComponentDemo
            label="Tamanhos — SM · MD"
            code={`<Badge size="sm">Pequeno</Badge>\n<Badge size="md">Médio</Badge>`}
          >
            <Badge size="sm" variant="brand">SM — Compacto</Badge>
            <Badge size="md" variant="brand">MD — Padrão</Badge>
          </ComponentDemo>
        </div>

        <SectionLabel number="02.2" title="Urgência" description="Use --fire / --urgent para escassez, prazo e CTAs críticos. Reserve para a informação mais importante da tela — não dilua." />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Variante urgent — base, com dot, tamanhos"
            code={`<Badge variant="urgent">Último lote</Badge>\n<Badge variant="urgent" dot>3 vagas restantes</Badge>`}
          >
            <Badge variant="urgent">Último lote</Badge>
            <Badge variant="urgent" dot>3 vagas restantes</Badge>
            <Badge variant="urgent" size="sm" dot>Encerra hoje</Badge>
          </ComponentDemo>

          <ComponentDemo label="Verde × Laranja — hierarquia de urgência">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Badge variant="brand">Inscrições abertas</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pencil)" }}>ação normal</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="urgent" dot>Último lote</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pencil)" }}>urgência máxima</span>
              </div>
              <div className="flex items-center gap-3">
                <Badge variant="default" dot>Encerrado</Badge>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--pencil)" }}>neutro / inativo</span>
              </div>
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="02.3"
          title="Variantes de Forças"
          description="Uma variante por força militar. Use para categorizar conteúdo por corporação."
        />
        <ComponentDemo
          label="Exército · Marinha · FAB · PM · Bombeiros"
          code={`<Badge variant="ex">Exército</Badge>\n<Badge variant="mb">Marinha</Badge>\n<Badge variant="fab">FAB</Badge>\n<Badge variant="pm">PM</Badge>\n<Badge variant="bm">Bombeiros</Badge>`}
        >
          <Badge variant="ex">EX — Exército</Badge>
          <Badge variant="mb">MB — Marinha</Badge>
          <Badge variant="fab">FAB — Aérea</Badge>
          <Badge variant="pm">PM — Polícia</Badge>
          <Badge variant="bm">BM — Bombeiros</Badge>
        </ComponentDemo>

        <div className="mt-4 mb-10">
          <ComponentDemo label="Com dot de status" background="dark">
            <Badge variant="ex" dot>EX — Exército</Badge>
            <Badge variant="mb" dot>MB — Marinha</Badge>
            <Badge variant="fab" dot>FAB</Badge>
            <Badge variant="pm" dot>PM</Badge>
            <Badge variant="bm" dot>BM</Badge>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="02.3"
          title="Uso em Contexto"
          description="Como badges aparecem dentro de cards e listas."
        />
        <ComponentDemo label="Card com badge de força">
          <div
            style={{
              border: "2px solid var(--border-strong)",
              boxShadow: "var(--shadow-md)",
              background: "var(--paper)",
              maxWidth: "300px",
              width: "100%",
            }}
          >
            <div
              style={{
                padding: "16px 20px",
                borderBottom: "2px solid var(--border-default)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "18px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--ink)",
                }}
              >
                EsPCEx 2025
              </span>
              <Badge variant="ex" size="sm">Exército</Badge>
            </div>
            <div style={{ padding: "16px 20px" }}>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", marginBottom: "12px", lineHeight: 1.5 }}>
                Escola Preparatória de Cadetes do Exército. 40 vagas.
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                <Badge variant="default" size="sm" dot>Inscrições abertas</Badge>
                <Badge variant="outline" size="sm">Gratuito</Badge>
              </div>
            </div>
          </div>
        </ComponentDemo>

      </div>
    </div>
  );
}
