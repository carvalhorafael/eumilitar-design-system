export type StatusTone = "neutral" | "success" | "warning" | "error" | "info";
export type StatusSize = "sm" | "md" | "lg";

export interface StatusProps {
  tone?: StatusTone;
  size?: StatusSize;
  label: string;
  pulse?: boolean;
  className?: string;
}

export function Status({ tone = "neutral", size = "md", label, pulse = false, className }: StatusProps) {
  return (
    <span
      className={["ds-status", className].filter(Boolean).join(" ")}
      data-slot="status"
      data-tone={tone}
      data-size={size}
      data-pulse={pulse ? "true" : "false"}
    >
      <span className="ds-status__dot" data-slot="dot" aria-hidden="true" />
      <span className="ds-status__label" data-slot="label">{label}</span>
    </span>
  );
}
