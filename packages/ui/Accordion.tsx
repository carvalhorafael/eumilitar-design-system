"use client";

import { useState, useId, ReactNode } from "react";

export interface AccordionItem {
  id?: string;
  title: string;
  content: ReactNode;
  defaultOpen?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

interface AccordionItemProps {
  id: string;
  title: string;
  open: boolean;
  onToggle: () => void;
  children: ReactNode;
  isLast: boolean;
}

function Item({ id, title, open, onToggle, children, isLast }: AccordionItemProps) {
  return (
    <div
      className="ds-accordion__item"
      data-slot="item"
      style={{
        borderBottom: isLast ? "none" : "2px solid var(--border-strong)",
      }}
    >
      <button
        id={`${id}-trigger`}
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={onToggle}
        type="button"
        className="ds-accordion__trigger"
        data-slot="trigger"
        style={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px",
          padding: "14px 18px",
          background: open ? "var(--paper-deep)" : "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          transition: "background 100ms ease",
        }}
        onMouseEnter={(e) => {
          if (!open) e.currentTarget.style.background = "var(--paper)";
        }}
        onMouseLeave={(e) => {
          if (!open) e.currentTarget.style.background = "transparent";
        }}
      >
        <span
          className="ds-accordion__title"
          data-slot="title"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "15px",
            fontWeight: open ? 600 : 400,
            color: "var(--ink)",
            lineHeight: 1.4,
            transition: "font-weight 100ms ease",
          }}
        >
          {title}
        </span>

        {/* +/− icon */}
        <span
          aria-hidden="true"
          className="ds-accordion__icon"
          data-slot="icon"
          style={{
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: open ? "var(--accent)" : "var(--pencil)",
            transition: "color 100ms ease",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="1" x2="7" y2="13" style={{ opacity: open ? 0 : 1, transition: "opacity 100ms ease" }} />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </button>

      {/* Conteúdo com transição de altura */}
      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        hidden={!open}
        className="ds-accordion__panel"
        data-slot="panel"
        style={{
          overflow: "hidden",
          maxHeight: open ? "600px" : "0",
          transition: "max-height 200ms ease",
        }}
      >
        <div
          className="ds-accordion__content"
          data-slot="content"
          style={{
            padding: "4px 18px 18px",
            borderTop: "1px solid var(--border-default)",
            fontFamily: "var(--font-body)",
            fontSize: "14px",
            color: "var(--pencil)",
            lineHeight: 1.65,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const uid = useId();

  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    items.forEach((item, i) => {
      if (item.defaultOpen) initial.add(item.id ?? `${uid}-${i}`);
    });
    return initial;
  });

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div
      className="ds-accordion"
      data-slot="accordion"
      style={{
        border: "2px solid var(--border-strong)",
        borderRadius: "var(--radius-sm)",
        boxShadow: "var(--shadow-sm)",
        overflow: "hidden",
        background: "var(--surface-raised)",
      }}
    >
      {items.map((item, i) => {
        const id = item.id ?? `${uid}-${i}`;
        return (
          <Item
            key={id}
            id={id}
            title={item.title}
            open={openIds.has(id)}
            onToggle={() => toggle(id)}
            isLast={i === items.length - 1}
          >
            {item.content}
          </Item>
        );
      })}
    </div>
  );
}
