"use client";

import { useState } from "react";

interface ColorSwatchProps {
  name: string;
  value: string;
  token: string;
  textColor?: "light" | "dark";
  size?: "sm" | "md" | "lg";
}

export function ColorSwatch({
  name,
  value,
  token,
  textColor = "dark",
  size = "md",
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const heights = { sm: "h-14", md: "h-20", lg: "h-28" };
  const tc = textColor === "light" ? "#f5f0e8" : "#1a1612";

  return (
    <div
      className="border-2 overflow-hidden cursor-pointer group transition-all"
      style={{
        borderColor: "var(--border-strong)",
        boxShadow: "var(--shadow-sm)",
      }}
      onClick={() => copy(value)}
      title={`Copiar ${value}`}
    >
      {/* Amostra de cor */}
      <div
        className={`${heights[size]} w-full flex items-end p-2 relative`}
        style={{ background: value }}
      >
        <span
          className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ fontFamily: "var(--font-mono)", color: tc }}
        >
          {copied ? "Copiado!" : "Copiar"}
        </span>
      </div>
      {/* Info */}
      <div
        className="px-3 py-2 border-t-2"
        style={{
          borderColor: "var(--border-strong)",
          background: "var(--paper)",
        }}
      >
        <p
          className="text-xs font-bold uppercase truncate"
          style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
        >
          {name}
        </p>
        <p
          className="text-xs mt-0.5"
          style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
        >
          {value}
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: "var(--font-mono)", color: "var(--pencil-soft)" }}
        >
          {token}
        </p>
      </div>
    </div>
  );
}

interface PaletteRowProps {
  label: string;
  swatches: { name: string; value: string; token: string; textColor?: "light" | "dark" }[];
}

export function PaletteRow({ label, swatches }: PaletteRowProps) {
  return (
    <div className="mb-10">
      <h3
        className="text-sm font-bold uppercase tracking-widest mb-4"
        style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
      >
        {label}
      </h3>
      <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
        {swatches.map((s) => (
          <ColorSwatch key={s.token} {...s} size="md" />
        ))}
      </div>
    </div>
  );
}

interface SemanticSwatchProps {
  group: string;
  items: { token: string; value: string; description: string }[];
}

export function SemanticGroup({ group, items }: SemanticSwatchProps) {
  return (
    <div className="mb-8">
      <h3
        className="text-base font-black uppercase mb-3"
        style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
      >
        {group}
      </h3>
      <div className="border-2 overflow-hidden" style={{ borderColor: "var(--border-strong)", boxShadow: "var(--shadow-sm)" }}>
        {items.map((item, i) => (
          <div
            key={item.token}
            className="flex items-center gap-4 px-4 py-3 border-b"
            style={{
              borderColor: i < items.length - 1 ? "var(--border-default)" : "transparent",
              background: "var(--surface-raised)",
            }}
          >
            <div
              className="w-10 h-10 shrink-0 border-2"
              style={{ background: item.value, borderColor: "var(--border-strong)" }}
            />
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-bold"
                style={{ fontFamily: "var(--font-mono)", color: "var(--ink)" }}
              >
                {item.token}
              </p>
              <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {item.description}
              </p>
            </div>
            <span
              className="text-xs shrink-0"
              style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
