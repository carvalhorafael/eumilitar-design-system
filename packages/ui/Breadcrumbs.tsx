"use client";

import type { CSSProperties, ReactNode } from "react";

export interface BreadcrumbItem {
  href?: string;
  label: ReactNode;
  current?: boolean;
}

export interface BreadcrumbRenderLinkProps {
  item: BreadcrumbItem;
  className: string;
  style: CSSProperties;
  children: ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  label?: string;
  separator?: ReactNode;
  renderLink?: (props: BreadcrumbRenderLinkProps) => ReactNode;
}

export function Breadcrumbs({
  items,
  label = "Navegação estrutural",
  separator = "/",
  renderLink,
}: BreadcrumbsProps) {
  const defaultRenderLink = ({ item, className, style, children }: BreadcrumbRenderLinkProps) => (
    <a href={item.href} className={className} style={style}>
      {children}
    </a>
  );

  return (
    <nav className="ds-breadcrumbs" data-slot="breadcrumbs" aria-label={label}>
      <ol className="ds-breadcrumbs__list" data-slot="list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const current = item.current ?? isLast;
          const linkStyle: CSSProperties = {
            color: current ? "var(--ink)" : "var(--text-brand)",
            fontWeight: current ? 700 : 500,
          };

          return (
            <li key={`${index}-${String(item.label)}`} className="ds-breadcrumbs__item" data-slot="item">
              {index > 0 ? (
                <span className="ds-breadcrumbs__separator" data-slot="separator" aria-hidden="true">
                  {separator}
                </span>
              ) : null}
              {item.href && !current
                ? (renderLink ?? defaultRenderLink)({
                    item,
                    className: "ds-breadcrumbs__link",
                    style: linkStyle,
                    children: item.label,
                  })
                : (
                    <span
                      className="ds-breadcrumbs__current"
                      data-slot="current"
                      aria-current={current ? "page" : undefined}
                      style={linkStyle}
                    >
                      {item.label}
                    </span>
                  )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
