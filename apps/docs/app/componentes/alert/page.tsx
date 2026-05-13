import { Header } from "@/components/layout/Header";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { Alert } from "@carvalhorafael/eumilitar-ui";
import { DismissDemo } from "@/components/docs/AlertDemo";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Alert" };

export default function AlertPage() {
  return (
    <div>
      <Header
        section="Componentes — 07"
        title="Alert"
        description="Feedback contextual inline. Cinco variantes mapeadas ao sistema de estados e urgência — de informação neutra a prazo crítico."
      />

      <div className="px-10 py-10 max-w-4xl">

        <SectionLabel
          number="07.1"
          title="Variantes"
          description="Hierarquia de atenção: Default para informações neutras, Success/Error para feedback de ação, Warning para prazo próximo, Urgent para escassez real."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo
            label="Default — informação neutra"
            code={`<Alert variant="default" title="Informação">\n  As inscrições para o próximo ciclo abrem em 15 dias.\n</Alert>`}
          >
            <Alert variant="default" title="Informação">
              As inscrições para o próximo ciclo abrem em 15 dias.
            </Alert>
          </ComponentDemo>

          <ComponentDemo
            label="Success — confirmação de ação"
            code={`<Alert variant="success" title="Inscrição confirmada">\n  Seu cadastro foi registrado. Você receberá um e-mail de confirmação.\n</Alert>`}
          >
            <Alert variant="success" title="Inscrição confirmada">
              Seu cadastro foi registrado com sucesso. Você receberá um e-mail de confirmação.
            </Alert>
          </ComponentDemo>

          <ComponentDemo
            label="Error — falha ou bloqueio"
            code={`<Alert variant="error" title="Erro no pagamento">\n  Não foi possível processar o pagamento. Verifique os dados do cartão.\n</Alert>`}
          >
            <Alert variant="error" title="Erro no pagamento">
              Não foi possível processar o pagamento. Verifique os dados do cartão e tente novamente.
            </Alert>
          </ComponentDemo>

          <ComponentDemo
            label="Warning — prazo ou atenção"
            code={`<Alert variant="warning" title="Prazo se encerrando">\n  Faltam 3 dias para o encerramento das inscrições.\n</Alert>`}
          >
            <Alert variant="warning" title="Prazo se encerrando">
              Faltam 3 dias para o encerramento das inscrições. Finalize seu cadastro.
            </Alert>
          </ComponentDemo>

          <ComponentDemo
            label="Urgent — escassez crítica, vaga única"
            code={`<Alert variant="urgent" title="Última vaga disponível">\n  Restam apenas 1 vaga na turma de Sargento do Exército.\n</Alert>`}
          >
            <Alert variant="urgent" title="Última vaga disponível">
              Restam apenas 1 vaga na turma de Sargento do Exército. Garanta agora.
            </Alert>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="07.2"
          title="Apenas corpo — sem título"
          description="Para mensagens curtas que dispensam hierarquia interna."
        />
        <div className="flex flex-col gap-4 mb-10">
          <ComponentDemo label="Sem título">
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
              <Alert variant="success">Senha atualizada com sucesso.</Alert>
              <Alert variant="error">CPF já cadastrado no sistema.</Alert>
              <Alert variant="warning">Sua sessão expira em 5 minutos.</Alert>
            </div>
          </ComponentDemo>
        </div>

        <SectionLabel
          number="07.3"
          title="Dispensável — com botão de fechar"
          description="Passe dismissible para exibir o botão X. O estado interno é gerenciado pelo próprio componente."
        />
        <ComponentDemo
          label="Clique no X para dispensar cada alerta"
          code={`<Alert variant="urgent" title="Última vaga" dismissible>\n  Restam apenas 1 vaga.\n</Alert>`}
        >
          <DismissDemo />
        </ComponentDemo>

        <SectionLabel
          number="07.4"
          title="Ícone customizado"
          description="Sobrescreva o ícone padrão via prop icon."
        />
        <ComponentDemo
          label="Ícone customizado"
          code={`<Alert variant="warning" icon={<MeuIcone />} title="Atenção">...</Alert>`}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
            <Alert
              variant="warning"
              title="Documento pendente"
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="1" width="10" height="14" rx="1" />
                  <line x1="5" y1="5" x2="11" y2="5" />
                  <line x1="5" y1="8" x2="11" y2="8" />
                  <line x1="5" y1="11" x2="8" y2="11" />
                </svg>
              }
            >
              O envio do certificado de reservista ainda está pendente.
            </Alert>
            <Alert
              variant="default"
              title="Novo comunicado"
              icon={
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 4l6 5 6-5" />
                  <rect x="1" y="3" width="14" height="10" rx="1" />
                </svg>
              }
            >
              O edital do CFO Exército 2025 foi publicado. Confira as novidades.
            </Alert>
          </div>
        </ComponentDemo>

        <SectionLabel
          number="07.5"
          title="Banner — largura total"
          description="Alert sem container fixo ocupa 100% da largura do pai. Ideal para avisos no topo de páginas ou seções."
        />
        <div className="mb-10">
          <div
            className="border-2 overflow-hidden"
            style={{ borderColor: "var(--border-default)" }}
          >
            <Alert variant="urgent" title="Inscrições encerram em 24h">
              Esta é a última oportunidade para garantir sua vaga no curso preparatório para Sargento do Exército. Após o prazo, nenhuma nova inscrição será aceita.
            </Alert>
            <div style={{ padding: "24px", background: "var(--surface-raised)" }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--pencil)" }}>
                Conteúdo da página abaixo do banner...
              </p>
            </div>
          </div>
        </div>

        <SectionLabel
          number="07.6"
          title="Regra de uso — Urgência"
          description="A hierarquia de urgência deve ser respeitada para preservar a atenção do usuário."
        />
        <div
          className="border-2 p-6 mb-10"
          style={{
            borderColor: "var(--border-default)",
            background: "var(--paper)",
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            color: "var(--pencil)",
          }}
        >
          {[
            { variant: "default", label: "default", desc: "Informações gerais, datas futuras, anúncios neutros" },
            { variant: "success", label: "success", desc: "Confirmação de ação concluída pelo usuário" },
            { variant: "error",   label: "error",   desc: "Falha, bloqueio ou dado inválido" },
            { variant: "warning", label: "warning", desc: "Prazo próximo (dias), atenção necessária" },
            { variant: "urgent",  label: "urgent",  desc: "Escassez real de vagas ou prazo em horas — use com parcimônia" },
          ].map((row) => (
            <div key={row.variant} className="flex items-start gap-4 py-2 border-b last:border-0" style={{ borderColor: "var(--rule)" }}>
              <span style={{ width: "72px", flexShrink: 0, color: "var(--ink)", fontWeight: 700 }}>{row.label}</span>
              <span style={{ color: "var(--pencil)" }}>{row.desc}</span>
            </div>
          ))}
        </div>

        <SectionLabel number="07.7" title="Tokens Usados" />
        <div
          className="border-2 overflow-hidden"
          style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}
        >
          {[
            { prop: "border (success)",  token: "--state-success",      value: "var(--b-700) #1f4d2a" },
            { prop: "bg (success)",      token: "--state-success-pale",  value: "var(--b-50)" },
            { prop: "border (error)",    token: "--state-error",         value: "#922020" },
            { prop: "bg (error)",        token: "--state-error-pale",    value: "#f7eaea" },
            { prop: "border (warning)",  token: "--fire",                value: "#C4521A" },
            { prop: "bg (warning)",      token: "--fire-pale",           value: "#F7E8DC" },
            { prop: "bg (urgent)",       token: "--fire",                value: "#C4521A (fundo sólido)" },
            { prop: "title font",        token: "--font-mono",           value: "12px 700 uppercase" },
            { prop: "body font",         token: "--font-body",           value: "14px Barlow" },
          ].map((row, i) => (
            <div
              key={row.prop}
              className="flex items-center gap-4 px-5 py-3 border-b"
              style={{
                borderColor: i < 8 ? "var(--border-default)" : "transparent",
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
