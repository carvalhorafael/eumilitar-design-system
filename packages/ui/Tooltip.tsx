"use client";

import type { ReactElement, ReactNode } from "react";
import { cloneElement, isValidElement, useId } from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  side?: TooltipSide;
}

export function Tooltip({ content, children, side = "top" }: TooltipProps) {
  const id = useId();
  const child = isValidElement<{ "aria-describedby"?: string; className?: string }>(children)
    ? children as ReactElement<{ "aria-describedby"?: string; className?: string }>
    : null;
  const trigger = child
    ? cloneElement(child, {
        "aria-describedby": [child.props["aria-describedby"], id].filter(Boolean).join(" "),
        className: [child.props.className, "ds-tooltip__trigger"].filter(Boolean).join(" "),
      })
    : (
        <span className="ds-tooltip__trigger" data-slot="trigger" tabIndex={0} aria-describedby={id}>
          {children}
        </span>
      );

  return (
    <span className="ds-tooltip" data-slot="tooltip" data-side={side}>
      {trigger}
      <span id={id} className="ds-tooltip__content" data-slot="content" role="tooltip">
        {content}
      </span>
    </span>
  );
}
