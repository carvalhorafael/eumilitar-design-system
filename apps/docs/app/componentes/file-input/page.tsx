import { ComponentDemo } from "@/components/docs/ComponentDemo";
import { SectionLabel } from "@/components/docs/SectionLabel";
import { Header } from "@/components/layout/Header";
import { FileInput } from "@carvalhorafael/eumilitar-ui";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "FileInput" };

export default function FileInputPage() {
  return (
    <div>
      <Header
        section="Componentes — 20"
        title="FileInput"
        description="Campo de arquivo para documentos, comprovantes e anexos, preservando labels e estados dos formulários."
      />

      <div className="docs-page max-w-4xl">
        <SectionLabel
          number="20.1"
          title="Anexos"
          description="Use FileInput quando o fluxo exige envio de documentos ou arquivos de apoio."
        />
        <ComponentDemo
          label="Envio de documento"
          code={`<FileInput\n  label="Comprovante de escolaridade"\n  accept=".pdf,.jpg,.png"\n  helperText="PDF, JPG ou PNG até 10MB."\n/>`}
        >
          <div className="grid gap-4">
            <FileInput
              label="Comprovante de escolaridade"
              accept=".pdf,.jpg,.png"
              helperText="PDF, JPG ou PNG até 10MB."
            />
            <FileInput
              label="Documento obrigatório"
              inputState="error"
              helperText="Envie o arquivo para continuar."
              required
            />
          </div>
        </ComponentDemo>
      </div>
    </div>
  );
}
