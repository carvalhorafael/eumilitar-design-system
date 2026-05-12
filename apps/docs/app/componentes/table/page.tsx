"use client";

import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Table, Thead, Tbody, Tr, Th, Td, DataTable, type Column } from "@/components/ui/Table";
import { Badge } from "@/components/ui/Badge";

/* ── Dados de exemplo ── */

const concursos = [
  { forca: "Exército Brasileiro", cargo: "Sargento — Músico",     vagas: 40,  inscricoes: "Mar–Abr 2025", prova: "Jun 2025",  status: "Previsto" },
  { forca: "Marinha do Brasil",   cargo: "Marinheiro-Aprendiz",   vagas: 900, inscricoes: "Aberto",       prova: "Mai 2025",  status: "Aberto" },
  { forca: "Força Aérea",         cargo: "Estágio de Adaptação",  vagas: 250, inscricoes: "Encerrado",    prova: "Abr 2025",  status: "Encerrado" },
  { forca: "Polícia Militar SP",  cargo: "Soldado PM",            vagas: 2700,inscricoes: "Aberto",       prova: "Jun 2025",  status: "Aberto" },
  { forca: "Corpo de Bombeiros",  cargo: "Soldado CBM",           vagas: 80,  inscricoes: "Jul–Ago 2025", prova: "Set 2025",  status: "Previsto" },
];

type Concurso = typeof concursos[0];

const statusVariant: Record<string, "brand" | "urgent" | "outline"> = {
  Aberto: "brand",
  Encerrado: "outline",
  Previsto: "outline",
};

const materias = [
  { materia: "Língua Portuguesa",   ex: true,  mb: true,  fab: true,  pm: true },
  { materia: "Matemática",          ex: true,  mb: true,  fab: true,  pm: true },
  { materia: "Inglês",              ex: false, mb: true,  fab: true,  pm: false },
  { materia: "Física",              ex: false, mb: true,  fab: true,  pm: false },
  { materia: "Informática",         ex: true,  mb: false, fab: true,  pm: false },
  { materia: "Conhecimentos Gerais",ex: true,  mb: true,  fab: true,  pm: true },
  { materia: "Redação",             ex: true,  mb: false, fab: false, pm: true },
];

const Tick = ({ ok }: { ok: boolean }) => (
  <span style={{ color: ok ? "var(--state-success)" : "var(--pencil-soft)", fontSize: "16px" }}>
    {ok ? "✓" : "—"}
  </span>
);

export default function TablePage() {
  return (
    <div>
      <Header
        section="Componentes — 09"
        title="Table"
        description="Tabela de dados com primitivos composáveis (Table, Thead, Tbody, Tr, Th, Td) e o atalho DataTable para casos simples. Hover por linha, listrado opcional."
      />

      <div className="px-10 py-10 max-w-5xl">

        <SectionLabel
          number="09.1"
          title="DataTable — atalho para dados simples"
          description="Passe columns e data. O componente cuida do markup, listrado e hover."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Calendário de concursos"
            code={`<DataTable\n  columns={columns}\n  data={concursos}\n  striped\n/>`}
          >
            <DataTable<Concurso>
              striped
              keyField="cargo"
              columns={[
                { key: "forca",      label: "Força",     render: (r) => <span style={{ fontWeight: 500 }}>{r.forca}</span> },
                { key: "cargo",      label: "Cargo / Concurso" },
                { key: "vagas",      label: "Vagas",  align: "center", muted: true },
                { key: "inscricoes", label: "Inscrições", muted: true },
                { key: "prova",      label: "Prova",      muted: true },
                {
                  key: "status", label: "Status", align: "center",
                  render: (r) => (
                    <Badge
                      variant={statusVariant[r.status] ?? "default"}
                      size="sm"
                    >
                      {r.status}
                    </Badge>
                  ),
                },
              ] satisfies Column<Concurso>[]}
              data={concursos}
            />
          </ComponentDemo>
        </div>

        <SectionLabel
          number="09.2"
          title="Primitivos composáveis"
          description="Use Table + Thead + Tbody + Tr + Th + Td para controle total sobre estrutura e conteúdo."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label="Matriz de matérias por força">
            <Table>
              <Thead>
                <tr>
                  <Th>Matéria</Th>
                  <Th align="center">EX</Th>
                  <Th align="center">MB</Th>
                  <Th align="center">FAB</Th>
                  <Th align="center">PM</Th>
                </tr>
              </Thead>
              <Tbody>
                {materias.map((row, i) => (
                  <Tr key={row.materia} striped index={i}>
                    <Td>{row.materia}</Td>
                    <Td align="center"><Tick ok={row.ex} /></Td>
                    <Td align="center"><Tick ok={row.mb} /></Td>
                    <Td align="center"><Tick ok={row.fab} /></Td>
                    <Td align="center"><Tick ok={row.pm} /></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="09.3"
          title="Sem listrado — hoverable"
          description="striped={false} com hover destacado. Bom para tabelas de configuração ou comparação de planos."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label="Comparação de planos">
            <Table>
              <Thead>
                <tr>
                  <Th>Recurso</Th>
                  <Th align="center">Gratuito</Th>
                  <Th align="center">Mensal</Th>
                  <Th align="center">Anual</Th>
                </tr>
              </Thead>
              <Tbody>
                {[
                  { recurso: "Acesso às trilhas",          free: "2 forças", mensal: "Todas", anual: "Todas" },
                  { recurso: "Banco de questões",          free: "200 itens", mensal: "Ilimitado", anual: "Ilimitado" },
                  { recurso: "Simulados cronometrados",    free: "—", mensal: "Semanais", anual: "Semanais" },
                  { recurso: "Correção de redação por IA", free: "—", mensal: "2/mês", anual: "Ilimitado" },
                  { recurso: "Suporte por e-mail",         free: "—", mensal: "48h", anual: "24h" },
                  { recurso: "Certificado de conclusão",   free: "—", mensal: "✓", anual: "✓" },
                ].map((row, i) => (
                  <Tr key={row.recurso} index={i}>
                    <Td>{row.recurso}</Td>
                    <Td align="center" muted>{row.free}</Td>
                    <Td align="center">{row.mensal}</Td>
                    <Td align="center" style={{ fontWeight: row.anual !== row.mensal ? 600 : 400, color: row.anual !== row.mensal ? "var(--accent)" : undefined }}>
                      {row.anual}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </ComponentDemo>
        </div>

        <SectionLabel number="09.4" title="Tokens Usados" />
        <div
          className="border-2 overflow-hidden"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
        >
          {[
            { prop: "container border",  token: "--border-strong",  value: "2px solid #433c34" },
            { prop: "header bg",         token: "--paper-deep",     value: "#e3d8bd" },
            { prop: "header border",     token: "--border-strong",  value: "2px solid (bottom)" },
            { prop: "header font",       token: "--font-mono",      value: "11px 700 uppercase" },
            { prop: "row bg (par)",      token: "--surface-raised", value: "#ffffff" },
            { prop: "row bg (ímpar)",    token: "--paper",          value: "#ede4cf" },
            { prop: "row separator",     token: "--border-default", value: "1px solid #c8bda5" },
            { prop: "hover bg",         token: "--highlight",       value: "rgba(255,220,80,0.42)" },
            { prop: "cell color",        token: "--ink",            value: "#1a1612" },
            { prop: "cell color (muted)",token: "--pencil",         value: "#7d7164" },
          ].map((row, i) => (
            <div
              key={row.prop}
              className="flex items-center gap-4 px-5 py-3 border-b"
              style={{
                borderColor: i < 9 ? "var(--border-default)" : "transparent",
                background: i % 2 === 0 ? "var(--surface-raised)" : "var(--paper)",
              }}
            >
              <span className="w-44 shrink-0 text-sm" style={{ color: "var(--text-secondary)" }}>{row.prop}</span>
              <span className="flex-1 text-sm font-bold" style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}>{row.token}</span>
              <span className="text-sm" style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}>{row.value}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
