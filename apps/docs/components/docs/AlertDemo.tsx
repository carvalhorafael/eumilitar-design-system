"use client";

import { useState } from "react";
import { Alert } from "@/components/ui/Alert";

export function DismissDemo() {
  const [visible, setVisible] = useState({
    default: true,
    success: true,
    error: true,
    warning: true,
    urgent: true,
  });

  const reset = () =>
    setVisible({ default: true, success: true, error: true, warning: true, urgent: true });

  const allDismissed = !Object.values(visible).some(Boolean);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
      {visible.default && (
        <Alert variant="default" title="Informação" dismissible onDismiss={() => setVisible((p) => ({ ...p, default: false }))}>
          As inscrições para o próximo ciclo abrem em 15 dias.
        </Alert>
      )}
      {visible.success && (
        <Alert variant="success" title="Inscrição confirmada" dismissible onDismiss={() => setVisible((p) => ({ ...p, success: false }))}>
          Seu cadastro foi registrado com sucesso. Você receberá um e-mail de confirmação.
        </Alert>
      )}
      {visible.error && (
        <Alert variant="error" title="Erro no pagamento" dismissible onDismiss={() => setVisible((p) => ({ ...p, error: false }))}>
          Não foi possível processar o pagamento. Verifique os dados do cartão e tente novamente.
        </Alert>
      )}
      {visible.warning && (
        <Alert variant="warning" title="Prazo se encerrando" dismissible onDismiss={() => setVisible((p) => ({ ...p, warning: false }))}>
          Faltam 3 dias para o encerramento das inscrições. Finalize seu cadastro.
        </Alert>
      )}
      {visible.urgent && (
        <Alert variant="urgent" title="Última vaga disponível" dismissible onDismiss={() => setVisible((p) => ({ ...p, urgent: false }))}>
          Restam apenas 1 vaga na turma de Sargento do Exército. Garanta agora.
        </Alert>
      )}
      {allDismissed && (
        <div style={{ textAlign: "center", padding: "16px" }}>
          <button
            onClick={reset}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--pencil)",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            Restaurar alertas
          </button>
        </div>
      )}
    </div>
  );
}
