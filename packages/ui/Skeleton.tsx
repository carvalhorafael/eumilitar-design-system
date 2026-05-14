import type { CSSProperties } from "react";

export type SkeletonVariant = "text" | "block" | "circle";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  lines?: number;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  className?: string;
  style?: CSSProperties;
}

export function Skeleton({
  variant = "block",
  lines = 1,
  width,
  height,
  className,
  style,
}: SkeletonProps) {
  const count = variant === "text" ? Math.max(1, lines) : 1;

  return (
    <span
      className={["ds-skeleton", className].filter(Boolean).join(" ")}
      data-slot="skeleton"
      data-variant={variant}
      aria-hidden="true"
      style={{ width, height, ...style }}
    >
      {Array.from({ length: count }).map((_, index) => (
        <span
          key={index}
          className="ds-skeleton__line"
          data-slot="line"
          style={{
            width: index === count - 1 && count > 1 ? "72%" : undefined,
          }}
        />
      ))}
    </span>
  );
}
