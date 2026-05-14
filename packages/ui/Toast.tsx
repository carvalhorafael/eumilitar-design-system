"use client";

import type { ReactNode } from "react";
import { useState } from "react";

export type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps {
  variant?: ToastVariant;
  title?: string;
  children?: ReactNode;
  action?: ReactNode;
  dismissible?: boolean;
  closeLabel?: string;
  onDismiss?: () => void;
  className?: string;
}

export interface ToastViewportProps {
  children: ReactNode;
  position?: "top" | "bottom";
  className?: string;
}

const defaultTitle: Record<ToastVariant, string> = {
  info: "Informação",
  success: "Sucesso",
  warning: "Atenção",
  error: "Erro",
};

export function Toast({
  variant = "info",
  title,
  children,
  action,
  dismissible = false,
  closeLabel = "Fechar notificação",
  onDismiss,
  className,
}: ToastProps) {
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  const handleDismiss = () => {
    setHidden(true);
    onDismiss?.();
  };

  return (
    <div
      className={["ds-toast", className].filter(Boolean).join(" ")}
      data-slot="toast"
      data-variant={variant}
      role={variant === "error" || variant === "warning" ? "alert" : "status"}
    >
      <div className="ds-toast__mark" data-slot="mark" aria-hidden="true" />
      <div className="ds-toast__content" data-slot="content">
        <p className="ds-toast__title" data-slot="title">
          {title ?? defaultTitle[variant]}
        </p>
        {children ? (
          <div className="ds-toast__body" data-slot="body">
            {children}
          </div>
        ) : null}
      </div>
      {action ? (
        <div className="ds-toast__action" data-slot="action">
          {action}
        </div>
      ) : null}
      {dismissible ? (
        <button
          type="button"
          className="ds-toast__close"
          data-slot="close"
          aria-label={closeLabel}
          onClick={handleDismiss}
        >
          x
        </button>
      ) : null}
    </div>
  );
}

export function ToastViewport({ children, position = "bottom", className }: ToastViewportProps) {
  return (
    <div
      className={["ds-toast-viewport", className].filter(Boolean).join(" ")}
      data-slot="toast-viewport"
      data-position={position}
    >
      {children}
    </div>
  );
}
