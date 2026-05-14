import type { CSSProperties } from "react";

export interface ProgressProps {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  className?: string;
  style?: CSSProperties;
}

export function Progress({
  value,
  max = 100,
  label = "Progresso",
  showValue = false,
  className,
  style,
}: ProgressProps) {
  const indeterminate = value === undefined;
  const normalized = indeterminate ? 0 : Math.min(Math.max(value, 0), max);
  const percentage = max > 0 ? Math.round((normalized / max) * 100) : 0;

  return (
    <div
      className={["ds-progress", className].filter(Boolean).join(" ")}
      data-slot="progress"
      data-indeterminate={indeterminate ? "true" : "false"}
      style={style}
    >
      <div className="ds-progress__header" data-slot="header">
        <span className="ds-progress__label" data-slot="label">{label}</span>
        {showValue && !indeterminate ? (
          <span className="ds-progress__value" data-slot="value">{percentage}%</span>
        ) : null}
      </div>
      <div
        className="ds-progress__track"
        data-slot="track"
        role="progressbar"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? undefined : normalized}
      >
        <span className="ds-progress__bar" data-slot="bar" style={{ width: indeterminate ? undefined : `${percentage}%` }} />
      </div>
    </div>
  );
}
