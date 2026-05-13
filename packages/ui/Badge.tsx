import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "default" | "brand" | "urgent" | "ex" | "mb" | "fab" | "pm" | "bm" | "outline" | "dark";
  size?: "sm" | "md";
  dot?: boolean;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, React.CSSProperties> = {
  default: {
    background: "var(--paper-deep)",
    color: "var(--ink)",
    border: "1.5px solid var(--border-default)",
  },
  brand: {
    background: "var(--surface-brand)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  urgent: {
    background: "var(--fire)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  ex: {
    background: "var(--ex)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  mb: {
    background: "var(--mb)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  fab: {
    background: "var(--fab)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  pm: {
    background: "var(--pm)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  bm: {
    background: "var(--bm)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
  outline: {
    background: "transparent",
    color: "var(--ink)",
    border: "1.5px solid var(--border-strong)",
  },
  dark: {
    background: "var(--surface-dark)",
    color: "var(--text-inverse)",
    border: "1.5px solid var(--border-strong)",
  },
};

const sizeStyles: Record<NonNullable<BadgeProps["size"]>, React.CSSProperties> = {
  sm: { padding: "2px 6px", fontSize: "10px", letterSpacing: "0.08em" },
  md: { padding: "4px 8px", fontSize: "11px", letterSpacing: "0.06em" },
};

export function Badge({ children, variant = "default", size = "md", dot, style, className, ...rest }: BadgeProps) {
  return (
    <span
      className={["ds-badge", className].filter(Boolean).join(" ")}
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      style={{
        gap: "5px",
        fontFamily: "var(--font-mono)",
        fontWeight: 700,
        textTransform: "uppercase",
        lineHeight: 1,
        borderRadius: "var(--radius-sm)",
        whiteSpace: "nowrap",
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span
          className="ds-badge__dot"
          data-slot="dot"
          style={{
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: "currentColor",
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
}
