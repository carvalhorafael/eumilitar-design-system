"use client";

import type { InputHTMLAttributes } from "react";
import { forwardRef, useId } from "react";
import { HelperText, Label, type InputSize, type InputState } from "./Input";

export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  helperText?: string;
  inputState?: InputState;
  size?: InputSize;
  required?: boolean;
  emptyText?: string;
}

export const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      label,
      helperText,
      inputState = "default",
      size = "md",
      required,
      emptyText = "Nenhum arquivo selecionado",
      id,
      className,
      ...rest
    },
    ref,
  ) => {
    const uid = useId();
    const inputId = id ?? uid;
    const helperId = helperText ? `${inputId}-helper` : undefined;

    return (
      <div
        className={["ds-file-input", className].filter(Boolean).join(" ")}
        data-slot="file-input"
        data-state={inputState}
        data-size={size}
      >
        {label ? <Label htmlFor={inputId} required={required}>{label}</Label> : null}
        <input
          ref={ref}
          id={inputId}
          type="file"
          className="ds-file-input__control"
          data-slot="control"
          aria-invalid={inputState === "error"}
          aria-describedby={helperId}
          aria-required={required || undefined}
          required={required}
          {...rest}
        />
        <span className="ds-file-input__empty" data-slot="empty">
          {emptyText}
        </span>
        {helperText ? (
          <HelperText
            id={helperId}
            state={inputState}
            live={inputState === "error" ? "assertive" : inputState === "success" ? "polite" : "off"}
          >
            {helperText}
          </HelperText>
        ) : null}
      </div>
    );
  },
);

FileInput.displayName = "FileInput";
