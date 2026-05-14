"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useId } from "react";
import { HelperText, type InputSize, type InputState } from "./Input";

export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  size?: InputSize;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, helperText, inputState = "default", size = "md", id, className, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div
        className={["ds-toggle", className].filter(Boolean).join(" ")}
        data-slot="toggle"
        data-state={inputState}
        data-size={size}
      >
        <label className="ds-toggle__label" data-slot="label" htmlFor={inputId}>
          <span className="ds-toggle__switch" data-slot="switch">
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
              role="switch"
              className="ds-toggle__control"
              data-slot="control"
              aria-invalid={inputState === "error"}
              aria-describedby={helperId}
              {...rest}
            />
            <span className="ds-toggle__track" data-slot="track" aria-hidden="true">
              <span className="ds-toggle__thumb" data-slot="thumb" />
            </span>
          </span>
          {label ? <span className="ds-toggle__text" data-slot="text">{label}</span> : null}
        </label>
        {helperText ? (
          <div className="ds-toggle__helper" data-slot="helper-wrap">
            <HelperText
              id={helperId}
              state={inputState}
              live={inputState === "error" ? "assertive" : inputState === "success" ? "polite" : "off"}
            >
              {helperText}
            </HelperText>
          </div>
        ) : null}
      </div>
    );
  },
);

Toggle.displayName = "Toggle";
