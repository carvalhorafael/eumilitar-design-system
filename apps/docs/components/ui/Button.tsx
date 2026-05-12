"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "ghost-inverse" | "danger" | "brand-inverse" | "urgent";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
  primary: {
    background: "var(--surface-brand)",
    color: "var(--text-inverse)",
    border: "2px solid var(--border-strong)",
    boxShadow: "var(--shadow-md)",
  },
  secondary: {
    background: "var(--paper)",
    color: "var(--ink)",
    border: "2px solid var(--border-strong)",
    boxShadow: "var(--shadow-sm)",
  },
  ghost: {
    background: "transparent",
    color: "var(--ink)",
    border: "2px solid transparent",
    boxShadow: "none",
  },
  danger: {
    background: "var(--bm)",
    color: "#f5f0e8",
    border: "2px solid var(--border-strong)",
    boxShadow: "var(--shadow-md)",
  },
  "brand-inverse": {
    background: "var(--n-50)",
    color: "var(--surface-brand)",
    border: "2px solid var(--n-50)",
    boxShadow: "var(--shadow-md)",
  },
  "ghost-inverse": {
    background: "transparent",
    color: "rgba(245,240,232,0.80)",
    border: "2px solid rgba(245,240,232,0.30)",
    boxShadow: "none",
  },
  urgent: {
    background: "var(--fire)",
    color: "#f5f0e8",
    border: "2px solid var(--border-strong)",
    boxShadow: "var(--shadow-urgent)",
  },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
  sm: { padding: "6px 12px", fontSize: "11px", letterSpacing: "0.06em" },
  md: { padding: "8px 16px", fontSize: "13px", letterSpacing: "0.05em" },
  lg: { padding: "12px 24px", fontSize: "15px", letterSpacing: "0.04em" },
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "left",
      children,
      style,
      disabled,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-body)",
          fontWeight: 700,
          textTransform: "uppercase",
          lineHeight: 1,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.45 : 1,
          transition: "box-shadow 100ms ease, transform 100ms ease",
          userSelect: "none",
          whiteSpace: "nowrap",
          borderRadius: "var(--radius-sm)",
          ...variantStyles[variant],
          ...sizeStyles[size],
          ...style,
        }}
        onMouseEnter={(e) => {
          if (disabled) return;
          const el = e.currentTarget;
          if (variant === "ghost") {
            el.style.background = "var(--paper)";
            el.style.borderColor = "var(--border-default)";
          } else if (variant === "ghost-inverse") {
            el.style.background = "rgba(245,240,232,0.12)";
            el.style.borderColor = "rgba(245,240,232,0.55)";
            el.style.color = "#f5f0e8";
          } else {
            el.style.boxShadow = "none";
            el.style.transform = "translate(2px, 2px)";
          }
        }}
        onMouseLeave={(e) => {
          if (disabled) return;
          const el = e.currentTarget;
          if (variant === "ghost") {
            el.style.background = "transparent";
            el.style.borderColor = "transparent";
          } else if (variant === "ghost-inverse") {
            el.style.background = "transparent";
            el.style.borderColor = "rgba(245,240,232,0.30)";
            el.style.color = "rgba(245,240,232,0.80)";
          } else {
            el.style.boxShadow = variantStyles[variant].boxShadow as string;
            el.style.transform = "translate(0, 0)";
          }
        }}
        {...rest}
      >
        {icon && iconPosition === "left" && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
        {children}
        {icon && iconPosition === "right" && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
