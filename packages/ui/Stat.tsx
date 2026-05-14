import type { ReactNode } from "react";

export interface StatProps {
  title: ReactNode;
  value: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  trend?: ReactNode;
  className?: string;
}

export interface StatsProps {
  children: ReactNode;
  className?: string;
}

export function Stats({ children, className }: StatsProps) {
  return <div className={["ds-stats", className].filter(Boolean).join(" ")} data-slot="stats">{children}</div>;
}

export function Stat({ title, value, description, icon, trend, className }: StatProps) {
  return (
    <section className={["ds-stat", className].filter(Boolean).join(" ")} data-slot="stat">
      {icon ? <span className="ds-stat__icon" data-slot="icon">{icon}</span> : null}
      <span className="ds-stat__title" data-slot="title">{title}</span>
      <strong className="ds-stat__value" data-slot="value">{value}</strong>
      {description ? <span className="ds-stat__description" data-slot="description">{description}</span> : null}
      {trend ? <span className="ds-stat__trend" data-slot="trend">{trend}</span> : null}
    </section>
  );
}
