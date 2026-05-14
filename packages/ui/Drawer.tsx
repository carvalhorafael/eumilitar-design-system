"use client";

import type { ReactNode } from "react";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export type DrawerSide = "left" | "right";

export interface DrawerProps {
  title: ReactNode;
  children: ReactNode;
  trigger?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  side?: DrawerSide;
  closeLabel?: string;
  overlayLabel?: string;
  onOpenChange?: (open: boolean) => void;
}

export function Drawer({
  title,
  children,
  trigger = "Abrir painel",
  open,
  defaultOpen = false,
  side = "left",
  closeLabel = "Fechar painel",
  overlayLabel = "Fechar painel pelo fundo",
  onOpenChange,
}: DrawerProps) {
  const titleId = useId();
  const panelId = useId();
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const controlled = open !== undefined;
  const visible = controlled ? open : internalOpen;

  const setVisible = useCallback((next: boolean) => {
    if (!controlled) setInternalOpen(next);
    onOpenChange?.(next);
  }, [controlled, onOpenChange]);

  useEffect(() => {
    if (!visible) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVisible(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [setVisible, visible]);

  return (
    <div className="ds-drawer" data-slot="drawer" data-open={visible ? "true" : "false"} data-side={side}>
      <button
        ref={triggerRef}
        type="button"
        className="ds-drawer__trigger"
        data-slot="trigger"
        aria-expanded={visible}
        aria-controls={panelId}
        onClick={() => setVisible(true)}
      >
        {trigger}
      </button>

      <div className="ds-drawer__layer" data-slot="layer" hidden={!visible}>
        <button
          type="button"
          className="ds-drawer__overlay"
          data-slot="overlay"
          aria-label={overlayLabel}
          onClick={() => setVisible(false)}
        />
        <aside
          id={panelId}
          className="ds-drawer__panel"
          data-slot="panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <div className="ds-drawer__header" data-slot="header">
            <h2 id={titleId} className="ds-drawer__title" data-slot="title">
              {title}
            </h2>
            <button
              ref={closeRef}
              type="button"
              className="ds-drawer__close"
              data-slot="close"
              aria-label={closeLabel}
              onClick={() => {
                setVisible(false);
                triggerRef.current?.focus();
              }}
            >
              x
            </button>
          </div>
          <div className="ds-drawer__body" data-slot="body">
            {children}
          </div>
        </aside>
      </div>
    </div>
  );
}
