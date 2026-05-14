import type { ReactNode } from "react";

export interface DividerProps {
  children?: ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
}

export function Divider({ children, orientation = "horizontal", className }: DividerProps) {
  return (
    <div
      className={["ds-divider", className].filter(Boolean).join(" ")}
      data-slot="divider"
      data-orientation={orientation}
      role="separator"
      aria-orientation={orientation}
    >
      {children ? <span className="ds-divider__label" data-slot="label">{children}</span> : null}
    </div>
  );
}
