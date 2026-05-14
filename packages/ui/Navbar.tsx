"use client";

import type { CSSProperties, ReactNode } from "react";
import { useId, useState } from "react";

export interface NavbarItem {
  href: string;
  label: string;
}

export interface NavbarGroup {
  label: string;
  items: NavbarItem[];
}

interface NavbarRenderLinkProps {
  item: NavbarItem;
  active: boolean;
  className: string;
  style: CSSProperties;
  onClick: () => void;
}

interface NavbarProps {
  brand: ReactNode;
  brandHref?: string;
  groups: NavbarGroup[];
  activeHref?: string;
  version?: ReactNode;
  menuLabel?: string;
  closeLabel?: string;
  renderLink?: (props: NavbarRenderLinkProps) => ReactNode;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="ds-navbar__menu-icon" aria-hidden="true" data-open={open ? "true" : "false"}>
      <span />
      <span />
      <span />
    </span>
  );
}

export function Navbar({
  brand,
  brandHref = "/",
  groups,
  activeHref,
  version,
  menuLabel = "Abrir menu",
  closeLabel = "Fechar menu",
  renderLink,
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  const close = () => setOpen(false);

  const defaultRenderLink = ({
    item,
    active,
    className,
    style,
    onClick,
  }: NavbarRenderLinkProps) => (
    <a href={item.href} className={className} style={style} onClick={onClick}>
      {item.label}
    </a>
  );

  return (
    <aside className="ds-navbar" data-open={open ? "true" : "false"}>
      <div className="ds-navbar__bar">
        <a href={brandHref} className="ds-navbar__brand" onClick={close}>
          {brand}
        </a>
        <button
          type="button"
          className="ds-navbar__menu-button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={open ? closeLabel : menuLabel}
          onClick={() => setOpen((current) => !current)}
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <nav id={panelId} className="ds-navbar__panel" aria-label="Navegação principal">
        <div className="ds-navbar__groups">
          {groups.map((group) => (
            <div key={group.label} className="ds-navbar__group">
              <span className="ds-navbar__group-label">{group.label}</span>
              {group.items.map((item) => {
                const active = activeHref === item.href;
                const style: CSSProperties = {
                  color: active ? "var(--text-brand)" : "var(--text-secondary)",
                  background: active ? "var(--accent-pale)" : "transparent",
                  borderLeft: active ? "3px solid var(--accent)" : "3px solid transparent",
                };

                return (
                  <div key={item.href}>
                    {(renderLink ?? defaultRenderLink)({
                      item,
                      active,
                      className: "ds-navbar__link",
                      style,
                      onClick: close,
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      {version ? <div className="ds-navbar__version">{version}</div> : null}
    </aside>
  );
}
