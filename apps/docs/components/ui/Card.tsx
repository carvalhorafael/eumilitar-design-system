import { HTMLAttributes } from "react";

export type CardVariant = "default" | "brand" | "dark" | "ghost";
export type CardShadow = "none" | "sm" | "md" | "lg" | "brand";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  shadow?: CardShadow;
}

interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {}

const variantMap: Record<CardVariant, React.CSSProperties> = {
  default: {
    background: "var(--paper)",
    border: "2px solid var(--border-strong)",
  },
  brand: {
    background: "var(--surface-brand)",
    border: "2px solid var(--border-strong)",
  },
  dark: {
    background: "var(--surface-dark)",
    border: "2px solid var(--border-strong)",
  },
  ghost: {
    background: "transparent",
    border: "2px solid var(--border-default)",
  },
};

const shadowMap: Record<CardShadow, string> = {
  none: "none",
  sm: "var(--shadow-sm)",
  md: "var(--shadow-md)",
  lg: "var(--shadow-lg)",
  brand: "var(--shadow-brand)",
};

export function Card({ variant = "default", shadow = "md", style, children, ...rest }: CardProps) {
  return (
    <div
      style={{
        ...variantMap[variant],
        boxShadow: shadowMap[shadow],
        overflow: "hidden",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardHeader({ style, children, ...rest }: CardSectionProps) {
  return (
    <div
      style={{
        padding: "16px 20px",
        borderBottom: "2px solid var(--border-default)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardBody({ style, children, ...rest }: CardSectionProps) {
  return (
    <div
      style={{
        padding: "20px",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export function CardFooter({ style, children, ...rest }: CardSectionProps) {
  return (
    <div
      style={{
        padding: "12px 20px",
        borderTop: "2px solid var(--border-default)",
        background: "var(--paper-deep)",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
