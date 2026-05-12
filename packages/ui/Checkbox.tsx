"use client";

import { InputHTMLAttributes, forwardRef, useId } from "react";
import { HelperText, type InputState } from "./Input";

/* ── Checkbox ── */
interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, helperText, inputState = "default", indeterminate, id, style, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;

    const borderColor =
      inputState === "error"   ? "var(--state-error)"   :
      inputState === "success" ? "var(--state-success)" :
      "var(--border-strong)";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label
          htmlFor={inputId}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            cursor: rest.disabled ? "not-allowed" : "pointer",
            opacity: rest.disabled ? 0.45 : 1,
          }}
        >
          <span style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
            <input
              ref={ref}
              id={inputId}
              type="checkbox"
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
          <div style={{ paddingLeft: "28px" }}>
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
  ({ label, helperText, inputState = "default", id, style, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;

    const borderColor =
      inputState === "error"   ? "var(--state-error)"   :
      inputState === "success" ? "var(--state-success)" :
      "var(--border-strong)";

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <label
          htmlFor={inputId}
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
            cursor: rest.disabled ? "not-allowed" : "pointer",
            opacity: rest.disabled ? 0.45 : 1,
          }}
        >
          <span style={{ position: "relative", flexShrink: 0, marginTop: "1px" }}>
            <input
              ref={ref}
              id={inputId}
              type="radio"
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
          <div style={{ paddingLeft: "28px" }}>
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
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {label && (
        <span
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
        </span>
      )}
      {children}
      {helperText && <HelperText state={inputState}>{helperText}</HelperText>}
    </div>
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
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {label && (
        <span
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
        </span>
      )}
      {children}
      {helperText && <HelperText state={inputState}>{helperText}</HelperText>}
    </div>
  );
}
