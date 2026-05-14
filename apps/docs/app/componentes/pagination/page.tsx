import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { PaginationDemo } from "@/components/docs/PaginationDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Pagination" };

export default function PaginationPage() {
  return (
    <div>
      <Header section="Componentes — 28" title="Pagination" description="Navegação entre páginas de listas, tabelas e resultados paginados." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="28.1" title="Resultados paginados" description="Pode funcionar com callback ou links gerados pelo consumer." />
        <ComponentDemo label="Paginação" code={`<Pagination page={2} totalPages={5} getHref={(page) => \`?page=\${page}\`} />`}>
          <PaginationDemo />
        </ComponentDemo>
      </div>
    </div>
  );
}
