import { Badge, Button, Card, CardBody, CardHeader, Input } from "@eumilitar/ui";
import { getPatternDefinition } from "@eumilitar/patterns";

const hero = getPatternDefinition("hero");

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "var(--surface-base)",
        padding: "48px 20px",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: "960px",
          display: "grid",
          gap: "24px",
        }}
      >
        <section
          style={{
            display: "grid",
            gap: "16px",
            padding: "24px",
            border: "2px solid var(--border-strong)",
            background: "var(--surface-raised)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Badge variant="brand">Consumer real</Badge>
            <Badge variant="outline">fora do docs</Badge>
          </div>

          <div style={{ display: "grid", gap: "8px" }}>
            <h1
              style={{
                margin: 0,
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 0.92,
                textTransform: "uppercase",
              }}
            >
              Biblioteca consumida por outro app Next
            </h1>
            <p
              style={{
                margin: 0,
                maxWidth: "60ch",
                color: "var(--text-secondary)",
                fontSize: "1.0625rem",
                lineHeight: 1.5,
              }}
            >
              Este app existe para validar o consumo de tokens, CSS compartilhado,
              components React e contratos de blocos fora do app de documentação.
            </p>
          </div>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button>Quero validar a biblioteca</Button>
            <Button variant="secondary">Ver contratos</Button>
          </div>
        </section>

        <div
          style={{
            display: "grid",
            gap: "24px",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          <Card>
            <CardHeader>
              <div style={{ display: "grid", gap: "4px" }}>
                <strong>Contrato de bloco</strong>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                  Leitura direta de @eumilitar/patterns
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <div style={{ display: "grid", gap: "12px" }}>
                <p style={{ margin: 0 }}>
                  <strong>{hero?.label}</strong> tem prioridade WordPress{" "}
                  <strong>{hero?.wordpressPriority}</strong>.
                </p>
                <p style={{ margin: 0 }}>
                  Variantes: {hero?.variants.join(", ")}.
                </p>
                <p style={{ margin: 0 }}>
                  Campos CMS obrigatórios:{" "}
                  {hero?.cmsFields.filter((field) => field.required).length}.
                </p>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <div style={{ display: "grid", gap: "4px" }}>
                <strong>Primitive React</strong>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                  Uso de @eumilitar/ui em um consumer separado
                </span>
              </div>
            </CardHeader>
            <CardBody>
              <div style={{ display: "grid", gap: "12px" }}>
                <Input
                  label="Seu email"
                  helperText="Campo renderizado a partir do pacote compartilhado."
                  placeholder="voce@eumilitar.com"
                />
                <Button variant="urgent">Quero receber novidades</Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </main>
  );
}
