"use client";

import type { ReactNode } from "react";
import { useId } from "react";
import { HelperText, type InputState } from "./Input";

export interface FieldsetProps {
  legend: ReactNode;
  children: ReactNode;
  helperText?: ReactNode;
  inputState?: InputState;
  className?: string;
}

export function Fieldset({
  legend,
  children,
  helperText,
  inputState = "default",
  className,
}: FieldsetProps) {
  const uid = useId();
  const helperId = helperText ? `${uid}-helper` : undefined;

  return (
    <fieldset
      className={["ds-fieldset", className].filter(Boolean).join(" ")}
      data-slot="fieldset"
      data-state={inputState}
      aria-describedby={helperId}
      aria-invalid={inputState === "error" ? "true" : undefined}
    >
      <legend className="ds-fieldset__legend" data-slot="legend">
        {legend}
      </legend>
      <div className="ds-fieldset__content" data-slot="content">
        {children}
      </div>
      {helperText ? (
        <HelperText
          id={helperId}
          state={inputState}
          live={inputState === "error" ? "assertive" : inputState === "success" ? "polite" : "off"}
        >
          {helperText}
        </HelperText>
      ) : null}
    </fieldset>
  );
}
