"use client";

import { InputHTMLAttributes, forwardRef, useEffect, useId, useRef } from "react";
import { HelperText, type InputState } from "./Input";

/* ── Checkbox ── */
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, inputState = "default", indeterminate, id, style, className, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const inputRef = useRef<HTMLInputElement | null>(null);

    const borderColor =
      inputState === "error"   ? "var(--state-error)"   :
      inputState === "success" ? "var(--state-success)" :
      "var(--border-strong)";

    useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = Boolean(indeterminate);
      }
    }, [indeterminate]);

    return (
      <div className="ds-checkbox" data-slot="checkbox-root" data-state={inputState} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label
          htmlFor={inputId}
          className="ds-checkbox__label"
          data-slot="label"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            cursor: rest.disabled ? "not-allowed" : "pointer",
            opacity: rest.disabled ? 0.45 : 1,
          }}
        >
          <span className="ds-checkbox__control-wrap" data-slot="control-wrap" style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
            <input
              ref={(node) => {
                inputRef.current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
              }}
              id={inputId}
              type="checkbox"
              className={["ds-checkbox__control", className].filter(Boolean).join(" ")}
              data-slot="control"
              aria-invalid={inputState === "error"}
              aria-describedby={helperId}
              style={{
                appearance: "none",
                width: "18px",
                height: "18px",
                border: "2px solid",
                borderColor,
                borderRadius: "var(--radius-sm)",
                background: "var(--surface-raised)",
                cursor: rest.disabled ? "not-allowed" : "pointer",
                transition: "border-color 100ms ease, box-shadow 100ms ease",
                display: "block",
                ...style,
              }}
              onFocus={(e) => {
                if (rest.disabled) return;
                const color = inputState === "error" ? "var(--state-error)" :
                              inputState === "success" ? "var(--state-success)" :
                              "var(--accent)";
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `2px 2px 0 ${color}`;
                rest.onFocus?.(e);
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = borderColor;
                e.currentTarget.style.boxShadow = "none";
                rest.onBlur?.(e);
              }}
              {...rest}
            />
            {/* Checkmark overlay */}
            <svg
              aria-hidden="true"
              viewBox="0 0 18 18"
              width="18"
              height="18"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                display: "block",
              }}
            >
              {indeterminate ? (
                <line x1="4" y1="9" x2="14" y2="9" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="square" />
              ) : (
                <polyline
                  points="3.5,9 7,12.5 14.5,5.5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="2.5"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  style={{
                    strokeDasharray: 20,
                    strokeDashoffset: rest.checked ? 0 : 20,
                    transition: "stroke-dashoffset 100ms ease",
                  }}
                />
              )}
            </svg>
          </span>
          {label && (
            <span
              className="ds-checkbox__text"
              data-slot="text"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              {label}
            </span>
          )}
        </label>
        {helperText && (
          <div id={helperId} className="ds-checkbox__helper-wrap" data-slot="helper-wrap" style={{ paddingLeft: "28px" }}>
            <HelperText state={inputState}>{helperText}</HelperText>
          </div>
        )}
      </div>
    );
  }
);
Checkbox.displayName = "Checkbox";

/* ── Radio ── */
interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  inputState?: InputState;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, helperText, inputState = "default", id, style, className, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    const borderColor =
      inputState === "error"   ? "var(--state-error)"   :
      inputState === "success" ? "var(--state-success)" :
      "var(--border-strong)";

    return (
      <div className="ds-radio" data-slot="radio-root" data-state={inputState} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label
          htmlFor={inputId}
          className="ds-radio__label"
          data-slot="label"
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            cursor: rest.disabled ? "not-allowed" : "pointer",
            opacity: rest.disabled ? 0.45 : 1,
          }}
        >
          <span className="ds-radio__control-wrap" data-slot="control-wrap" style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
            <input
              ref={ref}
              id={inputId}
              type="radio"
              className={["ds-radio__control", className].filter(Boolean).join(" ")}
              data-slot="control"
              aria-invalid={inputState === "error"}
              aria-describedby={helperId}
              style={{
                appearance: "none",
                width: "18px",
                height: "18px",
                border: "2px solid",
                borderColor,
                borderRadius: "999px",
                background: "var(--surface-raised)",
                cursor: rest.disabled ? "not-allowed" : "pointer",
                transition: "border-color 100ms ease, box-shadow 100ms ease",
                display: "block",
                ...style,
              }}
              onFocus={(e) => {
                if (rest.disabled) return;
                const color = inputState === "error" ? "var(--state-error)" :
                              inputState === "success" ? "var(--state-success)" :
                              "var(--accent)";
                e.currentTarget.style.borderColor = color;
                e.currentTarget.style.boxShadow = `2px 2px 0 ${color}`;
                rest.onFocus?.(e);
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = borderColor;
                e.currentTarget.style.boxShadow = "none";
                rest.onBlur?.(e);
              }}
              {...rest}
            />
            {/* Inner dot */}
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "7px",
                height: "7px",
                borderRadius: "999px",
                background: rest.checked ? "var(--accent)" : "transparent",
                transition: "background 100ms ease",
                pointerEvents: "none",
              }}
            />
          </span>
          {label && (
            <span
              className="ds-radio__text"
              data-slot="text"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                color: "var(--ink)",
                lineHeight: 1.5,
              }}
            >
              {label}
            </span>
          )}
        </label>
        {helperText && (
          <div id={helperId} className="ds-radio__helper-wrap" data-slot="helper-wrap" style={{ paddingLeft: "28px" }}>
            <HelperText state={inputState}>{helperText}</HelperText>
          </div>
        )}
      </div>
    );
  }
);
Radio.displayName = "Radio";

/* ── CheckboxGroup ── */
interface CheckboxGroupProps {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  children: React.ReactNode;
}

export function CheckboxGroup({ label, helperText, inputState = "default", children }: CheckboxGroupProps) {
  const uid = useId();
  const helperId = helperText ? `${uid}-helper` : undefined;
  return (
    <fieldset
      className="ds-checkbox-group"
      data-slot="checkbox-group"
      data-state={inputState}
      aria-describedby={helperId}
      aria-invalid={inputState === "error" ? "true" : undefined}
      style={{ display: "flex", flexDirection: "column", gap: "10px", border: 0, margin: 0, padding: 0 }}
    >
      {label && (
        <legend
          data-slot="legend"
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--ink)",
            marginBottom: "2px",
          }}
        >
          {label}
        </legend>
      )}
      {children}
      {helperText && (
        <HelperText
          id={helperId}
          state={inputState}
          live={inputState === "error" ? "assertive" : inputState === "success" ? "polite" : "off"}
        >
          {helperText}
        </HelperText>
      )}
    </fieldset>
  );
}

/* ── RadioGroup ── */
interface RadioGroupProps {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  children: React.ReactNode;
}

export function RadioGroup({ label, helperText, inputState = "default", children }: RadioGroupProps) {
  const uid = useId();
  const helperId = helperText ? `${uid}-helper` : undefined;
  return (
    <fieldset
      className="ds-radio-group"
      data-slot="radio-group"
      data-state={inputState}
      aria-describedby={helperId}
      aria-invalid={inputState === "error" ? "true" : undefined}
      style={{ display: "flex", flexDirection: "column", gap: "10px", border: 0, margin: 0, padding: 0 }}
    >
      {label && (
        <legend
          data-slot="legend"
          style={{
            display: "block",
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "var(--ink)",
            marginBottom: "2px",
          }}
        >
          {label}
        </legend>
      )}
      {children}
      {helperText && (
        <HelperText
          id={helperId}
          state={inputState}
          live={inputState === "error" ? "assertive" : inputState === "success" ? "polite" : "off"}
        >
          {helperText}
        </HelperText>
      )}
    </fieldset>
  );
}
