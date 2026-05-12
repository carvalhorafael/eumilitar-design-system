import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  title: string;
  description?: string;
  section?: string;
}

export function Header({ title, description, section }: HeaderProps) {
  return (
    <header
      className="border-b-2 px-10 py-8"
      style={{ borderColor: "var(--border-strong)" }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          {section && (
            <span
              className="text-xs font-bold uppercase tracking-widest block mb-2"
              style={{ fontFamily: "var(--font-mono)", color: "var(--pencil)" }}
            >
              {section}
            </span>
          )}
          <h1
            className="text-4xl font-black uppercase leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
          >
            {title}
          </h1>
          {description && (
            <p
              className="mt-3 text-base max-w-xl"
              style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}
            >
              {description}
            </p>
          )}
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
}
