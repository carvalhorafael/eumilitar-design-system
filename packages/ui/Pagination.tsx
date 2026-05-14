export interface PaginationProps {
  page: number;
  totalPages: number;
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  onPageChange?: (page: number) => void;
  getHref?: (page: number) => string;
  className?: string;
}

export function Pagination({
  page,
  totalPages,
  label = "Paginação",
  previousLabel = "Anterior",
  nextLabel = "Próxima",
  onPageChange,
  getHref,
  className,
}: PaginationProps) {
  const current = Math.min(Math.max(page, 1), totalPages);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const renderPage = (target: number, content: string, ariaLabel: string, disabled = false) => {
    const common = {
      className: "ds-pagination__item",
      "data-slot": "item",
      "aria-label": ariaLabel,
      "aria-current": target === current ? "page" as const : undefined,
      "aria-disabled": disabled ? "true" as const : undefined,
    };

    if (getHref && !disabled) {
      return <a key={`${content}-${target}`} href={getHref(target)} {...common}>{content}</a>;
    }

    return (
      <button
        key={`${content}-${target}`}
        type="button"
        disabled={disabled}
        onClick={() => !disabled && onPageChange?.(target)}
        {...common}
      >
        {content}
      </button>
    );
  };

  return (
    <nav className={["ds-pagination", className].filter(Boolean).join(" ")} data-slot="pagination" aria-label={label}>
      {renderPage(current - 1, previousLabel, "Página anterior", current <= 1)}
      <div className="ds-pagination__pages" data-slot="pages">
        {pages.map((target) => renderPage(target, String(target), `Página ${target}`))}
      </div>
      {renderPage(current + 1, nextLabel, "Próxima página", current >= totalPages)}
    </nav>
  );
}
