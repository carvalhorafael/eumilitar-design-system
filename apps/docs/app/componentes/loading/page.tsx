import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Loading } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Loading" };

export default function LoadingPage() {
  return (
    <div>
      <Header
        section="Componentes — 17"
        title="Loading"
        description="Indicadores indeterminados para ações curtas, carregamento inline e estados transitórios de interface."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="17.1"
          title="Estados rápidos"
          description="Use Loading quando o usuário precisa saber que uma ação está em andamento, sem reservar a estrutura completa de um Skeleton."
        />
        <ComponentDemo
          label="Variações"
          code={`<Loading variant="spinner" />\n<Loading variant="dots" />\n<Loading variant="bar" />`}
        >
          <div className="flex flex-wrap items-center gap-6">
            <Loading variant="spinner" label="Carregando conteúdo" />
            <Loading variant="dots" label="Processando" />
            <Loading variant="bar" label="Sincronizando" />
            <Loading variant="spinner" size="lg" label="Carregando em destaque" />
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="17.2"
            title="Contrato"
            description="O componente usa role status e label acessível para comunicar carregamento sem depender apenas da animação."
          />
          <div className="grid gap-3">
            {[
              ["variant", "spinner | dots | bar", "Formato do indicador"],
              ["size", "sm | md | lg", "Escala visual"],
              ["label", "string", "Nome acessível do status"],
            ].map(([prop, token, value]) => (
              <div
                key={prop}
                className="grid gap-1 border-2 p-4 sm:grid-cols-[140px_220px_1fr]"
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
