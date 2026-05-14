import type { ReactNode } from "react";

export interface ListItem {
  title: ReactNode;
  description?: ReactNode;
  meta?: ReactNode;
  media?: ReactNode;
  action?: ReactNode;
}

export interface ListProps {
  items: ListItem[];
  label?: string;
  className?: string;
}

export function List({ items, label, className }: ListProps) {
  return (
    <ul className={["ds-list", className].filter(Boolean).join(" ")} data-slot="list" aria-label={label}>
      {items.map((item, index) => (
        <li key={index} className="ds-list__item" data-slot="item">
          {item.media ? <span className="ds-list__media" data-slot="media">{item.media}</span> : null}
          <span className="ds-list__content" data-slot="content">
            <span className="ds-list__title" data-slot="title">{item.title}</span>
            {item.description ? <span className="ds-list__description" data-slot="description">{item.description}</span> : null}
          </span>
          {item.meta ? <span className="ds-list__meta" data-slot="meta">{item.meta}</span> : null}
          {item.action ? <span className="ds-list__action" data-slot="action">{item.action}</span> : null}
        </li>
      ))}
    </ul>
  );
}
