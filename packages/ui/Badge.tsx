interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "urgent" | "ex" | "mb" | "fab" | "pm" | "bm" | "outline" | "dark";
  size?: "sm" | "md";
  dot?: boolean;
  style?: React.CSSProperties;
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
    color: "#f5f0e8",
    border: "1.5px solid var(--border-strong)",
  },
  ex: {
    background: "var(--ex)",
    color: "#f5f0e8",
    border: "1.5px solid var(--border-strong)",
  },
  mb: {
    background: "var(--mb)",
    color: "#f5f0e8",
    border: "1.5px solid var(--border-strong)",
  },
  fab: {
    background: "var(--fab)",
    color: "#f5f0e8",
    border: "1.5px solid var(--border-strong)",
  },
  pm: {
    background: "var(--pm)",
    color: "#f5f0e8",
    border: "1.5px solid var(--border-strong)",
  },
  bm: {
    background: "var(--bm)",
    color: "#f5f0e8",
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

export function Badge({ children, variant = "default", size = "md", dot, style }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
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
    >
      {dot && (
        <span
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
