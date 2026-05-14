import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Avatar, Button, List, Status } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "List" };

export default function ListPage() {
  return (
    <div>
      <Header section="Componentes — 26" title="List" description="Lista estruturada de itens com mídia, descrição, metadado e ação opcional." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="26.1" title="Linhas informativas" description="Use List para filas, registros recentes, alunos, turmas e tarefas." />
        <ComponentDemo label="Lista de alunos" code={`<List items={items} label="Alunos" />`}>
          <List
            label="Alunos"
            items={[
              { title: "Mariana Costa", description: "Turma ESA", media: <Avatar fallback="MC" />, meta: <Status label="Ativa" tone="success" /> },
              { title: "João Lima", description: "Turma EsPCEx", media: <Avatar fallback="JL" />, action: <Button size="sm" variant="secondary">Abrir</Button> },
              { title: "Ana Souza", description: "Documentos pendentes", media: <Avatar fallback="AS" />, meta: <Status label="Pendente" tone="warning" /> },
            ]}
          />
        </ComponentDemo>
      </div>
    </div>
  );
}
