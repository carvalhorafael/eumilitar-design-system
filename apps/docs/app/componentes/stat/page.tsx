import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { Stat, Stats } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Stat" };

export default function StatPage() {
  return (
    <div>
      <Header section="Componentes — 23" title="Stat" description="Blocos de métrica para prova social, dashboards simples e indicadores de performance." />
      <div className="docs-page max-w-4xl">
        <SectionLabel number="23.1" title="Métricas" description="Use Stats para agrupar indicadores escaneáveis." />
        <ComponentDemo label="Indicadores" code={`<Stats>\n  <Stat title="Aprovados" value="2.4k" description="em concursos militares" />\n</Stats>`}>
          <Stats>
            <Stat title="Aprovados" value="2.4k" description="em concursos militares" trend="+18% no ciclo" />
            <Stat title="Simulados" value="128" description="questões por trilha" />
            <Stat title="Presença" value="92%" description="nas aulas ao vivo" />
          </Stats>
        </ComponentDemo>
      </div>
    </div>
  );
}
