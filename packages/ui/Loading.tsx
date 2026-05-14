import type { CSSProperties } from "react";

export type LoadingSize = "sm" | "md" | "lg";
export type LoadingVariant = "spinner" | "dots" | "bar";

export interface LoadingProps {
  size?: LoadingSize;
  variant?: LoadingVariant;
  label?: string;
  className?: string;
  style?: CSSProperties;
}

export function Loading({
  size = "md",
  variant = "spinner",
  label = "Carregando",
  className,
  style,
}: LoadingProps) {
  return (
    <span
      className={["ds-loading", className].filter(Boolean).join(" ")}
      data-slot="loading"
      data-size={size}
      data-variant={variant}
      role="status"
      aria-label={label}
      style={style}
    >
      {variant === "dots" ? (
        <>
          <span className="ds-loading__dot" data-slot="dot" />
          <span className="ds-loading__dot" data-slot="dot" />
          <span className="ds-loading__dot" data-slot="dot" />
        </>
      ) : (
        <span className="ds-loading__indicator" data-slot="indicator" />
      )}
    </span>
  );
}
