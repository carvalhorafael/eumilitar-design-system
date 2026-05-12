"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef, useId } from "react";

export type InputState = "default" | "error" | "success";
export type InputSize  = "sm" | "md" | "lg";

/* ── Estilos por estado ── */
const stateStyles: Record<InputState, React.CSSProperties> = {
  default: {
    borderColor: "var(--border-strong)",
  },
  error: {
    borderColor: "var(--state-error)",
    background:  "var(--state-error-pale)",
  },
  success: {
    borderColor: "var(--state-success)",
    background:  "var(--state-success-pale)",
  },
};

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: { padding: "6px 10px",  fontSize: "13px" },
  md: { padding: "10px 14px", fontSize: "15px" },
  lg: { padding: "13px 16px", fontSize: "16px" },
};

/* ── Label ── */
interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  children: React.ReactNode;
}

export function Label({ htmlFor, required, children }: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: "block",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--ink)",
        marginBottom: "6px",
      }}
    >
      {children}
      {required && (
        <span style={{ color: "var(--state-error)", marginLeft: "4px" }}>*</span>
      )}
    </label>
  );
}

/* ── Helper / Error text ── */
interface HelperTextProps {
  state?: InputState;
  children: React.ReactNode;
}

export function HelperText({ state = "default", children }: HelperTextProps) {
  const color =
    state === "error"   ? "var(--state-error)"   :
    state === "success" ? "var(--state-success)"  :
    "var(--pencil)";

  return (
    <p
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "12px",
        color,
        marginTop: "5px",
        lineHeight: 1.4,
      }}
    >
      {children}
    </p>
  );
}

/* ── Input ── */
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  inputState?: InputState;
  size?: InputSize;
  label?: string;
  helperText?: string;
  required?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ inputState = "default", size = "md", label, helperText, required, id, style, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;

    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {label && <Label htmlFor={inputId} required={required}>{label}</Label>}
        <input
          ref={ref}
          id={inputId}
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            color: "var(--ink)",
            background: "var(--surface-raised)",
            border: "2px solid",
            borderRadius: "var(--radius-sm)",
            outline: "none",
            transition: "border-color 100ms ease, box-shadow 100ms ease",
            ...stateStyles[inputState],
            ...sizeStyles[size],
            opacity: rest.disabled ? 0.45 : 1,
            cursor: rest.disabled ? "not-allowed" : "text",
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
            const borderColor = stateStyles[inputState].borderColor as string;
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
            rest.onBlur?.(e);
          }}
          {...rest}
        />
        {helperText && <HelperText state={inputState}>{helperText}</HelperText>}
      </div>
    );
  }
);
Input.displayName = "Input";

/* ── Textarea ── */
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputState?: InputState;
  size?: InputSize;
  label?: string;
  helperText?: string;
  required?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ inputState = "default", size = "md", label, helperText, required, id, style, ...rest }, ref) => {
    const uid = useId();
    const inputId = id ?? uid;

    return (
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {label && <Label htmlFor={inputId} required={required}>{label}</Label>}
        <textarea
          ref={ref}
          id={inputId}
          style={{
            width: "100%",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            color: "var(--ink)",
            background: "var(--surface-raised)",
            border: "2px solid",
            borderRadius: "var(--radius-sm)",
            outline: "none",
            resize: "vertical",
            minHeight: "100px",
            transition: "border-color 100ms ease, box-shadow 100ms ease",
            ...stateStyles[inputState],
            ...sizeStyles[size],
            opacity: rest.disabled ? 0.45 : 1,
            cursor: rest.disabled ? "not-allowed" : "text",
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
            const borderColor = stateStyles[inputState].borderColor as string;
            e.currentTarget.style.borderColor = borderColor;
            e.currentTarget.style.boxShadow = "none";
            rest.onBlur?.(e);
          }}
          {...rest}
        />
        {helperText && <HelperText state={inputState}>{helperText}</HelperText>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
