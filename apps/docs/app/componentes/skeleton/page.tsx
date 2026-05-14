import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Skeleton } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Skeleton" };

export default function SkeletonPage() {
  return (
    <div>
      <Header
        section="Componentes — 16"
        title="Skeleton"
        description="Placeholder visual para carregamento de blocos, linhas de texto e elementos circulares sem gerar mudança brusca de layout."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="16.1"
          title="Carregamento estrutural"
          description="Use Skeleton quando o layout já é conhecido e os dados ainda estão chegando."
        />
        <ComponentDemo
          label="Variações"
          code={`<Skeleton variant="text" lines={3} />\n<Skeleton variant="block" />\n<Skeleton variant="circle" />`}
        >
          <div className="grid gap-5">
            <Skeleton variant="text" lines={3} />
            <Skeleton variant="block" height={120} />
            <div className="flex items-center gap-4">
              <Skeleton variant="circle" />
              <div className="grid flex-1 gap-2">
                <Skeleton variant="text" lines={2} />
              </div>
            </div>
          </div>
        </ComponentDemo>

        <div className="mt-10">
          <SectionLabel
            number="16.2"
            title="Contrato"
            description="Skeleton é decorativo para tecnologias assistivas. O container de tela deve anunciar carregamento quando necessário."
          />
          <div className="grid gap-3">
            {[
              ["variant", "text | block | circle", "Formato visual do placeholder"],
              ["lines", "number", "Quantidade de linhas na variante text"],
              ["width / height", "CSSProperties", "Dimensões customizadas"],
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
