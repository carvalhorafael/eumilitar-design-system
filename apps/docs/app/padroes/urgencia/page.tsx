import { Header } from "@/components/layout/Header";
import { PatternGuidelines } from "@/components/docs/PatternGuidelines";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Button, Badge, Alert, Card, CardBody } from "@carvalhorafael/eumilitar-ui";
import { getPatternDefinition } from "@carvalhorafael/eumilitar-patterns";
import { PatternContract, PatternShell, UsedComponents } from "@carvalhorafael/eumilitar-patterns/docs";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Padrão — Urgência" };

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 6h8M6 2l4 4-4 4" />
  </svg>
);

const urgencyDefinition = getPatternDefinition("urgency");

export default function UrgenciaPage() {
  return (
    <div>
      <Header
        section="Padrões — 02"
        title="Urgência"
        description="Padrões para comunicar escassez real: vagas limitadas, prazo próximo, último lote. Use com parcimônia — o impacto depende da raridade."
      />

      <div className="px-10 py-10 max-w-5xl">
        {urgencyDefinition ? <PatternContract definition={urgencyDefinition} /> : null}

        <SectionLabel
          number="02.1"
          title="Banner de Topo"
          description="Alert urgent largura total no topo da página. Máxima visibilidade, mínimo espaço. Dispensável pelo usuário."
        />
        <PatternShell label="Banner de prazo — topo de página">
          <div>
            <Alert
              variant="urgent"
              title="Inscrições encerram em 18h"
              dismissible
            >
              Último dia para garantir sua vaga na turma de Julho. Após o prazo, não haverá nova turma até Setembro.
            </Alert>
            <div style={{ background: "var(--surface-raised)", padding: "32px 24px" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)", margin: 0 }}>
                Conteúdo da página...
              </p>
            </div>
          </div>
          <UsedComponents items={["Alert (urgent, dismissible)"]} />
        </PatternShell>

        <SectionLabel
          number="02.2"
          title="Bloco CTA de Conversão Máxima"
          description="Seção dedicada a urgência: fundo escuro, contador de vagas, botão urgent. Use no final de páginas de vendas."
        />
        <PatternShell label="Bloco CTA — fundo escuro + urgência">
          <div style={{ background: "var(--surface-dark)", padding: "56px 48px", textAlign: "center" }}>
            <div style={{ marginBottom: "20px" }}><Badge variant="urgent">Última turma do semestre</Badge></div>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 900,
              textTransform: "uppercase",
              color: "var(--text-inverse)",
              lineHeight: 1,
              margin: "0 0 12px",
            }}>
              Restam apenas{" "}
              <span style={{ color: "var(--fire)" }}>7 vagas</span>
            </h2>
            <p style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "var(--text-inverse-muted)",
              margin: "0 0 32px",
              lineHeight: 1.6,
            }}>
              Turma de Sargento do Exército — Acesso imediato após confirmação do pagamento.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
              <Button variant="urgent" size="lg" icon={<ArrowIcon />} iconPosition="right">
                Garantir minha vaga
              </Button>
              <Button variant="ghost-inverse" size="lg">
                Ver detalhes do curso
              </Button>
            </div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--border-inverse-soft)",
              marginTop: "20px",
              letterSpacing: "0.05em",
            }}>
              Vagas atualizadas em tempo real · Garantia de 7 dias
            </p>
          </div>
          <UsedComponents items={["Badge (urgent)", "Button (urgent, ghost)"]} />
        </PatternShell>

        <SectionLabel
          number="02.3"
          title="Card de Vaga Única"
          description="Card compacto para mostrar disponibilidade restrita em listas de cursos ou grade de turmas."
        />
        <PatternShell label="Cards de turma com escassez">
          <div style={{ background: "var(--paper)", padding: "32px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", maxWidth: "800px" }}>

              {/* Turma normal */}
              <Card variant="default" shadow="sm">
                <CardBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <Badge variant="ex" size="sm">Exército</Badge>
                    <Badge variant="brand" size="sm">28 vagas</Badge>
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px" }}>
                    Sargento — Turma Ago
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--pencil)", margin: "0 0 16px" }}>
                    Início: 05/08/2025 · 6 meses de acesso
                  </p>
                  <Button variant="primary" size="sm" style={{ width: "100%" }}>
                    Inscrever-se
                  </Button>
                </CardBody>
              </Card>

              {/* Turma urgente */}
              <Card variant="default" shadow="sm" style={{ borderColor: "var(--fire)" }}>
                <CardBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <Badge variant="ex" size="sm">Exército</Badge>
                    <Badge variant="urgent" size="sm" dot>3 vagas</Badge>
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px" }}>
                    Sargento — Turma Jul
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--pencil)", margin: "0 0 16px" }}>
                    Início: 07/07/2025 · 6 meses de acesso
                  </p>
                  <Button variant="urgent" size="sm" style={{ width: "100%" }}>
                    Garantir última vaga →
                  </Button>
                </CardBody>
              </Card>

              {/* Turma esgotada */}
              <Card variant="default" shadow="sm" style={{ opacity: 0.6 }}>
                <CardBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                    <Badge variant="ex" size="sm">Exército</Badge>
                    <Badge variant="default" size="sm">Esgotado</Badge>
                  </div>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", margin: "0 0 6px" }}>
                    Sargento — Turma Jun
                  </p>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "var(--pencil)", margin: "0 0 16px" }}>
                    Início: 02/06/2025 · Encerrado
                  </p>
                  <Button variant="secondary" size="sm" disabled style={{ width: "100%" }}>
                    Esgotado
                  </Button>
                </CardBody>
              </Card>

            </div>
          </div>
          <UsedComponents items={["Card", "Badge (urgent, brand, ex)", "Button (primary, urgent, secondary)"]} />
        </PatternShell>

        <SectionLabel
          number="02.4"
          title="Regra de Uso — Hierarquia de Urgência"
        />
        <PatternGuidelines
          layout="split"
          rows={[
            { title: "Baixo", aside: "Baixo", asideColor: "var(--pencil)", description: "Alert warning — prazo em dias, atenção necessária mas não crítica." },
            { title: "Médio", aside: "Médio", asideColor: "var(--fire)", description: "Alert urgent + Badge urgent — vagas abaixo de 20%, prazo em horas." },
            { title: "Máximo", aside: "Máximo", asideColor: "var(--fire)", description: "Bloco CTA 02.2 — última turma, vagas em unidade, prazo < 24h." },
          ]}
          footer="Nunca use os três níveis simultaneamente na mesma página — o usuário perde a referência de urgência real."
        />

      </div>
    </div>
  );
}
