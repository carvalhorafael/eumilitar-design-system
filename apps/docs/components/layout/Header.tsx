import { ThemeToggle } from "./ThemeToggle";

interface HeaderProps {
  title: string;
  description?: string;
  section?: string;
}

export function Header({ title, description, section }: HeaderProps) {
  return (
    <header className="docs-header">
      <div className="docs-header__inner">
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
            className="docs-header__title"
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
