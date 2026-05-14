import type { ReactNode } from "react";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback: ReactNode;
  size?: AvatarSize;
  status?: ReactNode;
  className?: string;
}

export function Avatar({ src, alt = "", fallback, size = "md", status, className }: AvatarProps) {
  return (
    <span className={["ds-avatar", className].filter(Boolean).join(" ")} data-slot="avatar" data-size={size}>
      <span className="ds-avatar__media" data-slot="media">
        {src ? <img className="ds-avatar__image" data-slot="image" src={src} alt={alt} /> : (
          <span className="ds-avatar__fallback" data-slot="fallback">{fallback}</span>
        )}
      </span>
      {status ? <span className="ds-avatar__status" data-slot="status">{status}</span> : null}
    </span>
  );
}
