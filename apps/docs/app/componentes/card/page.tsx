import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Card" };

export default function CardPage() {
  return (
    <div>
      <Header
        section="Componentes — 03"
        title="Card"
        description="Containers de conteúdo com estrutura Header / Body / Footer. Quatro variantes de cor, cinco de sombra."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel number="03.1" title="Estrutura" description="Composição via sub-componentes: Card + CardHeader + CardBody + CardFooter." />
        <ComponentDemo
          label="Card completo — Header + Body + Footer"
          code={`<Card>\n  <CardHeader>...</CardHeader>\n  <CardBody>...</CardBody>\n  <CardFooter>...</CardFooter>\n</Card>`}
        >
          <Card style={{ width: "280px" }}>
            <CardHeader>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--pencil)", display: "block", marginBottom: "4px" }}>
                01 — Destaque
              </span>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", lineHeight: 1.1 }}>
                EsPCEx 2025
              </p>
            </CardHeader>
            <CardBody>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "12px" }}>
                Escola Preparatória de Cadetes do Exército. 40 vagas disponíveis.
              </p>
              <Badge variant="ex" size="sm" dot>Inscrições abertas</Badge>
            </CardBody>
            <CardFooter style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button size="sm" variant="primary">Ver curso →</Button>
            </CardFooter>
          </Card>
        </ComponentDemo>

        <div className="mt-10 mb-4">
          <SectionLabel number="03.2" title="Variantes de Cor" />
        </div>
        <ComponentDemo label="Default · Brand · Dark · Ghost">
          {(["default", "brand", "dark", "ghost"] as const).map((variant) => (
            <Card key={variant} variant={variant} shadow="md" style={{ width: "160px" }}>
              <CardBody>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: variant === "default" || variant === "ghost" ? "var(--pencil)" : "rgba(245,240,232,0.6)", display: "block", marginBottom: "6px" }}>
                  {variant}
                </span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, textTransform: "uppercase", color: variant === "default" || variant === "ghost" ? "var(--ink)" : "#f5f0e8", lineHeight: 1.1 }}>
                  Variante
                </p>
              </CardBody>
            </Card>
          ))}
        </ComponentDemo>

        <div className="mt-10 mb-4">
          <SectionLabel number="03.3" title="Variantes de Sombra" description="Sombras offset sem blur — intensidade crescente." />
        </div>
        <ComponentDemo label="none · sm · md · lg · brand">
          {(["none", "sm", "md", "lg", "brand"] as const).map((shadow) => (
            <Card key={shadow} variant="default" shadow={shadow} style={{ width: "120px" }}>
              <CardBody>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--pencil)", display: "block", marginBottom: "4px" }}>
                  shadow
                </span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)" }}>
                  {shadow}
                </p>
              </CardBody>
            </Card>
          ))}
        </ComponentDemo>

        <div className="mt-10 mb-4">
          <SectionLabel number="03.4" title="Exemplos de Uso Real" />
        </div>

        {/* Exemplo: grid de cursos */}
        <ComponentDemo label="Grid de cursos — pattern de catálogo">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", width: "100%" }}>
            {[
              { titulo: "EsPCEx", forca: "ex" as const, vagas: "40", nivel: "Médio" },
              { titulo: "EN — Naval", forca: "mb" as const, vagas: "60", nivel: "Médio" },
              { titulo: "EPCAR", forca: "fab" as const, vagas: "30", nivel: "Médio" },
              { titulo: "CFO PM/SP", forca: "pm" as const, vagas: "200", nivel: "Superior" },
            ].map((curso) => (
              <Card key={curso.titulo} shadow="sm">
                <div
                  style={{
                    height: "6px",
                    background: `var(--${curso.forca})`,
                  }}
                />
                <CardBody>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, textTransform: "uppercase", color: "var(--ink)", lineHeight: 1.1 }}>
                      {curso.titulo}
                    </p>
                    <Badge variant={curso.forca} size="sm">{curso.forca.toUpperCase()}</Badge>
                  </div>
                  <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginBottom: "10px" }}>
                    {curso.vagas} vagas · Nível {curso.nivel}
                  </p>
                  <Button size="sm" variant="secondary">Ver detalhes</Button>
                </CardBody>
              </Card>
            ))}
          </div>
        </ComponentDemo>

        {/* Exemplo: card de destaque */}
        <div className="mt-4">
          <ComponentDemo label="Card de destaque — variante brand" background="dark">
            <Card variant="brand" shadow="lg" style={{ maxWidth: "360px", width: "100%" }}>
              <CardHeader style={{ borderColor: "rgba(245,240,232,0.15)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--b-300)", display: "block", marginBottom: "6px" }}>
                  Em destaque
                </span>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 900, textTransform: "uppercase", color: "#f5f0e8", lineHeight: 1.05 }}>
                  Turma de Elite 2025
                </p>
              </CardHeader>
              <CardBody>
                <p style={{ fontSize: "14px", color: "var(--b-200)", lineHeight: 1.6, marginBottom: "16px" }}>
                  Preparação intensiva para os principais concursos militares com taxa de aprovação de 78%.
                </p>
                <Button variant="brand-inverse" size="md">Garantir vaga →</Button>
              </CardBody>
              <CardFooter style={{ background: "rgba(0,0,0,0.2)", borderColor: "rgba(245,240,232,0.1)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--b-300)" }}>
                  Vagas limitadas · Encerramento em 30/03
                </span>
              </CardFooter>
            </Card>
          </ComponentDemo>
        </div>

      </div>
    </div>
  );
}
