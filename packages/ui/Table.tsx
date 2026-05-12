"use client";

import { ReactNode, HTMLAttributes, ThHTMLAttributes, TdHTMLAttributes } from "react";

/* ── Primitivos composáveis ── */

export function Table({ children, style, className, ...rest }: HTMLAttributes<HTMLTableElement>) {
  return (
    <div
      className="ds-table-wrap"
      data-slot="table-wrap"
      style={{
        border: "2px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-sm)",
      }}
    >
      <table
        className={["ds-table", className].filter(Boolean).join(" ")}
        data-slot="table"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          ...style,
        }}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
}

export function Thead({ children, ...rest }: HTMLAttributes<HTMLTableSectionElement>) {
  return (
    <thead
      className="ds-table__head"
      data-slot="head"
      style={{
        background: "var(--paper-deep)",
        borderBottom: "2px solid var(--border-strong)",
      }}
      {...rest}
    >
      {children}
    </thead>
  );
}

export function Tbody({ children, striped, ...rest }: HTMLAttributes<HTMLTableSectionElement> & { striped?: boolean }) {
  return <tbody {...rest}>{children}</tbody>;
}

export function Tr({
  children,
  striped,
  index,
  hoverable = true,
  style,
  className,
  ...rest
}: HTMLAttributes<HTMLTableRowElement> & { striped?: boolean; index?: number; hoverable?: boolean }) {
  const isEven = index !== undefined && index % 2 === 0;
  const bg = striped ? (isEven ? "var(--surface-raised)" : "var(--paper)") : "var(--surface-raised)";

  return (
    <tr
      className={["ds-table__row", className].filter(Boolean).join(" ")}
      data-slot="row"
      style={{
        background: bg,
        borderBottom: "1px solid var(--border-default)",
        transition: hoverable ? "background 80ms ease" : undefined,
        cursor: hoverable ? "default" : undefined,
        ...style,
      }}
      onMouseEnter={hoverable ? (e) => (e.currentTarget.style.background = "var(--highlight)") : undefined}
      onMouseLeave={hoverable ? (e) => (e.currentTarget.style.background = bg) : undefined}
      {...rest}
    >
      {children}
    </tr>
  );
}

export function Th({ children, align = "left", style, className, ...rest }: ThHTMLAttributes<HTMLTableCellElement> & { align?: "left" | "center" | "right" }) {
  return (
    <th
      className={["ds-table__th", className].filter(Boolean).join(" ")}
      data-slot="th"
      style={{
        padding: "10px 14px",
        fontFamily: "var(--font-mono)",
        fontSize: "11px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        color: "var(--ink)",
        textAlign: align,
        whiteSpace: "nowrap",
        ...style,
      }}
      {...rest}
    >
      {children}
    </th>
  );
}

export function Td({ children, align = "left", muted, style, className, ...rest }: TdHTMLAttributes<HTMLTableCellElement> & { align?: "left" | "center" | "right"; muted?: boolean }) {
  return (
    <td
      className={["ds-table__td", className].filter(Boolean).join(" ")}
      data-slot="td"
      data-muted={muted ? "true" : "false"}
      style={{
        padding: "10px 14px",
        color: muted ? "var(--pencil)" : "var(--ink)",
        textAlign: align,
        lineHeight: 1.45,
        ...style,
      }}
      {...rest}
    >
      {children}
    </td>
  );
}

/* ── DataTable — conveniência para dados tabulares simples ── */

export interface Column<T> {
  key: keyof T | string;
  label: string;
  align?: "left" | "center" | "right";
  muted?: boolean;
  render?: (row: T) => ReactNode;
}

interface DataTableProps<T extends object> {
  columns: Column<T>[];
  data: T[];
  striped?: boolean;
  keyField?: keyof T;
}

export function DataTable<T extends object>({ columns, data, striped = true, keyField }: DataTableProps<T>) {
  return (
    <Table>
      <Thead>
        <tr>
          {columns.map((col) => (
            <Th key={String(col.key)} align={col.align}>{col.label}</Th>
          ))}
        </tr>
      </Thead>
      <Tbody>
        {data.map((row, i) => (
          <Tr key={keyField ? String(row[keyField]) : i} striped={striped} index={i}>
            {columns.map((col) => (
              <Td key={String(col.key)} align={col.align} muted={col.muted}>
                {col.render ? col.render(row) : String((row as Record<string, unknown>)[String(col.key)] ?? "")}
              </Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}
