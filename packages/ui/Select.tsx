"use client";

import { SelectHTMLAttributes, forwardRef, useId } from "react";
import { Label, HelperText, type InputState, type InputSize } from "./Input";

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  inputState?: InputState;
  size?: InputSize;
  label?: string;
  helperText?: string;
  required?: boolean;
  options?: { value: string; label: string; disabled?: boolean }[];
  placeholder?: string;
}

const stateStyles: Record<InputState, React.CSSProperties> = {
  default: { borderColor: "var(--border-strong)" },
  error:   { borderColor: "var(--state-error)",   background: "var(--state-error-pale)" },
  success: { borderColor: "var(--state-success)",  background: "var(--state-success-pale)" },
};

const sizeStyles: Record<InputSize, React.CSSProperties> = {
  sm: { padding: "6px 36px 6px 10px",  fontSize: "13px" },
  md: { padding: "10px 40px 10px 14px", fontSize: "15px" },
  lg: { padding: "13px 44px 13px 16px", fontSize: "16px" },
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      inputState = "default",
      size = "md",
      label,
      helperText,
      required,
      id,
      options = [],
      placeholder,
      style,
      className,
      defaultValue,
      value,
      ...rest
    },
    ref
  ) => {
    const uid = useId();
    const inputId = id ?? uid;

    return (
      <div className="ds-select" data-slot="select-root" data-state={inputState} data-size={size} style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {label && <Label htmlFor={inputId} required={required}>{label}</Label>}
        <div className="ds-select__field-wrap" data-slot="field-wrap" style={{ position: "relative", width: "100%" }}>
          <select
            ref={ref}
            id={inputId}
            defaultValue={defaultValue ?? (placeholder && value === undefined ? "" : undefined)}
            value={value}
            className={["ds-select__field", className].filter(Boolean).join(" ")}
            data-slot="field"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 400,
              color: "var(--ink)",
              background: "var(--surface-raised)",
              border: "2px solid",
              borderRadius: "var(--radius-sm)",
              outline: "none",
              appearance: "none",
              cursor: rest.disabled ? "not-allowed" : "pointer",
              transition: "border-color 100ms ease, box-shadow 100ms ease",
              opacity: rest.disabled ? 0.45 : 1,
              ...stateStyles[inputState],
              ...sizeStyles[size],
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
              e.currentTarget.style.borderColor = stateStyles[inputState].borderColor as string;
              e.currentTarget.style.boxShadow = "none";
              rest.onBlur?.(e);
            }}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* Seta customizada */}
          <div
            className="ds-select__icon"
            data-slot="icon"
            style={{
              position: "absolute",
              right: size === "sm" ? "10px" : "14px",
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "var(--pencil)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 4l4 4 4-4" />
            </svg>
          </div>
        </div>
        {helperText && <HelperText state={inputState}>{helperText}</HelperText>}
      </div>
    );
  }
);
Select.displayName = "Select";
