import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Avatar, Status } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Avatar" };

export default function AvatarPage() {
  return (
    <div>
      <Header section="Componentes — 24" title="Avatar" description="Representação compacta de pessoas, turmas ou perfis com imagem, fallback e status opcional." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="24.1" title="Identidade visual" description="Use fallback textual quando não houver imagem confiável." />
        <ComponentDemo label="Tamanhos" code={`<Avatar fallback="RC" />\n<Avatar fallback="EM" size="lg" />`}>
          <div className="flex flex-wrap items-center gap-5">
            <Avatar fallback="RC" size="sm" />
            <Avatar fallback="EM" />
            <Avatar fallback="AL" size="lg" status={<Status label="Online" tone="success" size="sm" />} />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
