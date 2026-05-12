"use client";

import { useState, ReactNode } from "react";

export type AlertVariant = "default" | "success" | "error" | "warning" | "urgent";

interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children?: ReactNode;
  icon?: ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
}

const config: Record<AlertVariant, {
  bg: string;
  border: string;
  titleColor: string;
  bodyColor: string;
  iconColor: string;
  shadow: string;
}> = {
  default: {
    bg:         "var(--paper)",
    border:     "var(--border-strong)",
    titleColor: "var(--ink)",
    bodyColor:  "var(--pencil)",
    iconColor:  "var(--pencil)",
    shadow:     "var(--shadow-sm)",
  },
  success: {
    bg:         "var(--state-success-pale)",
    border:     "var(--state-success)",
    titleColor: "var(--state-success)",
    bodyColor:  "var(--ink-soft)",
    iconColor:  "var(--state-success)",
    shadow:     "2px 2px 0 var(--state-success)",
  },
  error: {
    bg:         "var(--state-error-pale)",
    border:     "var(--state-error)",
    titleColor: "var(--state-error)",
    bodyColor:  "var(--ink-soft)",
    iconColor:  "var(--state-error)",
    shadow:     "2px 2px 0 var(--state-error)",
  },
  warning: {
    bg:         "var(--fire-pale)",
    border:     "var(--fire)",
    titleColor: "var(--fire)",
    bodyColor:  "var(--ink-soft)",
    iconColor:  "var(--fire)",
    shadow:     "2px 2px 0 var(--fire)",
  },
  urgent: {
    bg:         "var(--fire)",
    border:     "var(--ink)",
    titleColor: "#f5f0e8",
    bodyColor:  "rgba(245,240,232,0.85)",
    iconColor:  "#f5f0e8",
    shadow:     "var(--shadow-md)",
  },
};

const defaultIcons: Record<AlertVariant, ReactNode> = {
  default: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="6" />
      <line x1="8" y1="5" x2="8" y2="8.5" />
      <circle cx="8" cy="11" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  success: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="6" />
      <polyline points="5,8.5 7,10.5 11,6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  ),
  error: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="8" r="6" />
      <line x1="5.5" y1="5.5" x2="10.5" y2="10.5" />
      <line x1="10.5" y1="5.5" x2="5.5" y2="10.5" />
    </svg>
  ),
  warning: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2L14.5 13H1.5L8 2Z" strokeLinejoin="miter" />
      <line x1="8" y1="6.5" x2="8" y2="9.5" />
      <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  urgent: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 2L14.5 13H1.5L8 2Z" strokeLinejoin="miter" />
      <line x1="8" y1="6.5" x2="8" y2="9.5" />
      <circle cx="8" cy="11.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="2.5" y1="2.5" x2="11.5" y2="11.5" />
    <line x1="11.5" y1="2.5" x2="2.5" y2="11.5" />
  </svg>
);

export function Alert({
  variant = "default",
  title,
  children,
  icon,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const [dismissed, setDismissed] = useState(false);
  const c = config[variant];

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    onDismiss?.();
  };

  return (
    <div
      role="alert"
      style={{
        display: "flex",
        gap: "12px",
        padding: "14px 16px",
        border: "2px solid",
        borderColor: c.border,
        borderRadius: "var(--radius-sm)",
        background: c.bg,
        boxShadow: c.shadow,
        width: "100%",
      }}
    >
      {/* Icon */}
      <span
        style={{
          color: c.iconColor,
          flexShrink: 0,
          marginTop: title ? "2px" : "0",
          display: "flex",
          alignItems: title ? "flex-start" : "center",
        }}
      >
        {icon ?? defaultIcons[variant]}
      </span>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: c.titleColor,
              marginBottom: children ? "4px" : 0,
              lineHeight: 1.3,
            }}
          >
            {title}
          </p>
        )}
        {children && (
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: c.bodyColor,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            {children}
          </p>
        )}
      </div>

      {/* Dismiss button */}
      {dismissible && (
        <button
          onClick={handleDismiss}
          aria-label="Fechar"
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "2px",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: c.iconColor,
            opacity: 0.7,
            transition: "opacity 100ms ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
        >
          <CloseIcon />
        </button>
      )}
    </div>
  );
}
