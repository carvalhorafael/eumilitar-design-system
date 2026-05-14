import type { ReactNode } from "react";

export type StepState = "complete" | "current" | "pending" | "error";

export interface StepItem {
  label: ReactNode;
  description?: ReactNode;
  state?: StepState;
}

export interface StepsProps {
  items: StepItem[];
  label?: string;
  orientation?: "responsive" | "vertical" | "horizontal";
  className?: string;
}

export function Steps({ items, label = "Etapas", orientation = "responsive", className }: StepsProps) {
  return (
    <ol
      className={["ds-steps", className].filter(Boolean).join(" ")}
      data-slot="steps"
      data-orientation={orientation}
      aria-label={label}
    >
      {items.map((item, index) => {
        const state = item.state ?? "pending";
        return (
          <li key={index} className="ds-steps__item" data-slot="item" data-state={state} aria-current={state === "current" ? "step" : undefined}>
            <span className="ds-steps__marker" data-slot="marker" aria-hidden="true">
              {state === "complete" ? "✓" : state === "error" ? "!" : index + 1}
            </span>
            <span className="ds-steps__content" data-slot="content">
              <span className="ds-steps__label" data-slot="label">{item.label}</span>
              {item.description ? <span className="ds-steps__description" data-slot="description">{item.description}</span> : null}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
