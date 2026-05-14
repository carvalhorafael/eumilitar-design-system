export type WebHtml = string;

export interface WebNavbarItem {
  href: string;
  label: string;
}

export interface WebNavbarGroup {
  label: string;
  items: WebNavbarItem[];
}

export interface WebNavbarData {
  brand: string;
  brandHref?: string;
  groups: WebNavbarGroup[];
  activeHref?: string;
  version?: string;
  menuLabel?: string;
  closeLabel?: string;
}

export interface WebBreadcrumbItem {
  href?: string;
  label: string;
  current?: boolean;
}

export interface WebBreadcrumbsData {
  items: WebBreadcrumbItem[];
  label?: string;
  separator?: string;
}

export interface WebDrawerData {
  title: string;
  bodyHtml: WebHtml;
  trigger?: string;
  side?: "left" | "right";
  open?: boolean;
  closeLabel?: string;
  overlayLabel?: string;
  id?: string;
}

export interface WebTabItem {
  value: string;
  label: string;
  contentHtml: WebHtml;
  disabled?: boolean;
}

export interface WebTabsData {
  items: WebTabItem[];
  label?: string;
  defaultValue?: string;
  id?: string;
}

export interface WebToastData {
  variant?: "info" | "success" | "warning" | "error";
  title?: string;
  bodyHtml?: WebHtml;
  actionHtml?: WebHtml;
  dismissible?: boolean;
  closeLabel?: string;
}

export interface WebToastViewportData {
  toastsHtml: WebHtml;
  position?: "top" | "bottom";
}

export interface WebTooltipData {
  triggerHtml: WebHtml;
  content: string;
  side?: "top" | "right" | "bottom" | "left";
  id?: string;
}

export interface WebSkeletonData {
  variant?: "text" | "block" | "circle";
  lines?: number;
  width?: string;
  height?: string;
}

export interface WebLoadingData {
  size?: "sm" | "md" | "lg";
  variant?: "spinner" | "dots" | "bar";
  label?: string;
}

export interface WebFieldsetData {
  legend: string;
  contentHtml: WebHtml;
  helperText?: string;
  inputState?: "default" | "error" | "success";
  id?: string;
}

export interface WebToggleData {
  id: string;
  label?: string;
  helperText?: string;
  inputState?: "default" | "error" | "success";
  size?: "sm" | "md" | "lg";
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
}

export interface WebFileInputData {
  id: string;
  label?: string;
  helperText?: string;
  inputState?: "default" | "error" | "success";
  size?: "sm" | "md" | "lg";
  required?: boolean;
  emptyText?: string;
  accept?: string;
  multiple?: boolean;
}

export interface WebProgressData {
  value?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
}

export interface WebStepItem {
  label: string;
  description?: string;
  state?: "complete" | "current" | "pending" | "error";
}

export interface WebStepsData {
  items: WebStepItem[];
  label?: string;
  orientation?: "responsive" | "vertical" | "horizontal";
}

export interface WebStatData {
  title: string;
  value: string;
  description?: string;
  iconHtml?: WebHtml;
  trend?: string;
}

export interface WebStatsData {
  items: WebStatData[];
}

export interface WebAvatarData {
  src?: string;
  alt?: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
  statusHtml?: WebHtml;
}

export interface WebStatusData {
  tone?: "neutral" | "success" | "warning" | "error" | "info";
  size?: "sm" | "md" | "lg";
  label: string;
  pulse?: boolean;
}

export interface WebListItem {
  title: string;
  description?: string;
  meta?: string;
  mediaHtml?: WebHtml;
  actionHtml?: WebHtml;
}

export interface WebListData {
  items: WebListItem[];
  label?: string;
}

export interface WebDividerData {
  label?: string;
  orientation?: "horizontal" | "vertical";
}

export interface WebPaginationData {
  page: number;
  totalPages: number;
  label?: string;
  previousLabel?: string;
  nextLabel?: string;
  getHref?: (page: number) => string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function attr(name: string, value: string | number | boolean | undefined) {
  if (value === undefined || value === false) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${escapeHtml(String(value))}"`;
}

function helperText(id: string | undefined, state: string, text: string | undefined) {
  if (!text) return "";
  const live = state === "error" ? "assertive" : state === "success" ? "polite" : "off";
  return `<p class="ds-input__helper" data-slot="helper" data-state="${escapeHtml(state)}"${attr("id", id)} aria-live="${live}">${escapeHtml(text)}</p>`;
}

function normalizePercent(value: number | undefined, max: number) {
  if (value === undefined) return 0;
  const normalized = Math.min(Math.max(value, 0), max);
  return max > 0 ? Math.round((normalized / max) * 100) : 0;
}

export function renderNavbar(data: WebNavbarData) {
  const brandHref = data.brandHref ?? "/";
  const menuLabel = data.menuLabel ?? "Abrir menu";
  const closeLabel = data.closeLabel ?? "Fechar menu";
  const groups = data.groups
    .map((group) => {
      const items = group.items
        .map((item) => {
          const active = data.activeHref === item.href;
          const style = active
            ? "color: var(--text-brand); background: var(--accent-pale); border-left: 3px solid var(--accent)"
            : "color: var(--text-secondary); background: transparent; border-left: 3px solid transparent";
          return `<div><a href="${escapeHtml(item.href)}" class="ds-navbar__link" style="${style}"${attr("aria-current", active ? "page" : undefined)}>${escapeHtml(item.label)}</a></div>`;
        })
        .join("");

      return `<div class="ds-navbar__group"><span class="ds-navbar__group-label">${escapeHtml(group.label)}</span>${items}</div>`;
    })
    .join("");

  const version = data.version ? `<div class="ds-navbar__version">${escapeHtml(data.version)}</div>` : "";

  return [
    `<aside class="ds-navbar" data-open="false" data-navbar-root>`,
    `<div class="ds-navbar__bar">`,
    `<a href="${escapeHtml(brandHref)}" class="ds-navbar__brand">${escapeHtml(data.brand)}</a>`,
    `<button type="button" class="ds-navbar__menu-button" aria-expanded="false" aria-controls="ds-navbar-panel" aria-label="${escapeHtml(menuLabel)}" data-navbar-trigger data-menu-label="${escapeHtml(menuLabel)}" data-close-label="${escapeHtml(closeLabel)}">`,
    `<span class="ds-navbar__menu-icon" aria-hidden="true" data-open="false"><span></span><span></span><span></span></span>`,
    `</button>`,
    `</div>`,
    `<nav id="ds-navbar-panel" class="ds-navbar__panel" aria-label="Navegação principal"><div class="ds-navbar__groups">${groups}</div></nav>`,
    version,
    `</aside>`,
  ].join("");
}

export function renderBreadcrumbs(data: WebBreadcrumbsData) {
  const separator = data.separator ?? "/";
  const items = data.items
    .map((item, index) => {
      const current = item.current ?? index === data.items.length - 1;
      const style = current
        ? "color: var(--ink); font-weight: 700"
        : "color: var(--text-brand); font-weight: 500";
      const separatorHtml = index > 0
        ? `<span class="ds-breadcrumbs__separator" data-slot="separator" aria-hidden="true">${escapeHtml(separator)}</span>`
        : "";
      const content = item.href && !current
        ? `<a href="${escapeHtml(item.href)}" class="ds-breadcrumbs__link" style="${style}">${escapeHtml(item.label)}</a>`
        : `<span class="ds-breadcrumbs__current" data-slot="current"${attr("aria-current", current ? "page" : undefined)} style="${style}">${escapeHtml(item.label)}</span>`;
      return `<li class="ds-breadcrumbs__item" data-slot="item">${separatorHtml}${content}</li>`;
    })
    .join("");

  return `<nav class="ds-breadcrumbs" data-slot="breadcrumbs" aria-label="${escapeHtml(data.label ?? "Navegação estrutural")}"><ol class="ds-breadcrumbs__list" data-slot="list">${items}</ol></nav>`;
}

export function renderDrawer(data: WebDrawerData) {
  const side = data.side ?? "left";
  const open = data.open ?? false;
  const id = data.id ?? "ds-drawer-panel";
  const titleId = `${id}-title`;
  return [
    `<div class="ds-drawer" data-slot="drawer" data-open="${open ? "true" : "false"}" data-side="${escapeHtml(side)}" data-drawer-root>`,
    `<button type="button" class="ds-drawer__trigger" data-slot="trigger" aria-expanded="${open ? "true" : "false"}" aria-controls="${escapeHtml(id)}" data-drawer-trigger>${escapeHtml(data.trigger ?? "Abrir painel")}</button>`,
    `<div class="ds-drawer__layer" data-slot="layer"${open ? "" : " hidden"} data-drawer-layer>`,
    `<button type="button" class="ds-drawer__overlay" data-slot="overlay" aria-label="${escapeHtml(data.overlayLabel ?? "Fechar painel pelo fundo")}" data-drawer-close></button>`,
    `<aside id="${escapeHtml(id)}" class="ds-drawer__panel" data-slot="panel" role="dialog" aria-modal="true" aria-labelledby="${escapeHtml(titleId)}">`,
    `<div class="ds-drawer__header" data-slot="header"><h2 id="${escapeHtml(titleId)}" class="ds-drawer__title" data-slot="title">${escapeHtml(data.title)}</h2><button type="button" class="ds-drawer__close" data-slot="close" aria-label="${escapeHtml(data.closeLabel ?? "Fechar painel")}" data-drawer-close>x</button></div>`,
    `<div class="ds-drawer__body" data-slot="body">${data.bodyHtml}</div>`,
    `</aside>`,
    `</div>`,
    `</div>`,
  ].join("");
}

export function renderTabs(data: WebTabsData) {
  const id = data.id ?? "ds-tabs";
  const firstEnabled = data.items.find((item) => !item.disabled)?.value ?? data.items[0]?.value;
  const selectedValue = data.defaultValue ?? firstEnabled;
  const tabs = data.items
    .map((item) => {
      const selected = item.value === selectedValue;
      const tabId = `${id}-${item.value}-tab`;
      const panelId = `${id}-${item.value}-panel`;
      return `<button type="button" class="ds-tabs__tab" data-slot="tab" role="tab" id="${escapeHtml(tabId)}" aria-selected="${selected ? "true" : "false"}" aria-controls="${escapeHtml(panelId)}" tabindex="${selected ? "0" : "-1"}"${attr("disabled", item.disabled)} data-tabs-tab>${escapeHtml(item.label)}</button>`;
    })
    .join("");
  const panels = data.items
    .map((item) => {
      const selected = item.value === selectedValue;
      return `<div class="ds-tabs__panel" data-slot="tab-panel" role="tabpanel" id="${escapeHtml(`${id}-${item.value}-panel`)}" aria-labelledby="${escapeHtml(`${id}-${item.value}-tab`)}"${selected ? "" : " hidden"} data-tabs-panel>${item.contentHtml}</div>`;
    })
    .join("");

  return `<div class="ds-tabs" data-slot="tabs" data-tabs-root><div class="ds-tabs__list" data-slot="tab-list" role="tablist" aria-label="${escapeHtml(data.label ?? "Seções")}">${tabs}</div>${panels}</div>`;
}

export function renderToast(data: WebToastData) {
  const variant = data.variant ?? "info";
  const defaultTitle = { info: "Informação", success: "Sucesso", warning: "Atenção", error: "Erro" }[variant];
  const role = variant === "error" || variant === "warning" ? "alert" : "status";
  const action = data.actionHtml ? `<div class="ds-toast__action" data-slot="action">${data.actionHtml}</div>` : "";
  const close = data.dismissible
    ? `<button type="button" class="ds-toast__close" data-slot="close" aria-label="${escapeHtml(data.closeLabel ?? "Fechar notificação")}" data-toast-close>x</button>`
    : "";
  const body = data.bodyHtml ? `<div class="ds-toast__body" data-slot="body">${data.bodyHtml}</div>` : "";

  return `<div class="ds-toast" data-slot="toast" data-variant="${escapeHtml(variant)}" role="${role}"><div class="ds-toast__mark" data-slot="mark" aria-hidden="true"></div><div class="ds-toast__content" data-slot="content"><p class="ds-toast__title" data-slot="title">${escapeHtml(data.title ?? defaultTitle)}</p>${body}</div>${action}${close}</div>`;
}

export function renderToastViewport(data: WebToastViewportData) {
  return `<div class="ds-toast-viewport" data-slot="toast-viewport" data-position="${escapeHtml(data.position ?? "bottom")}">${data.toastsHtml}</div>`;
}

export function renderTooltip(data: WebTooltipData) {
  const id = data.id ?? "ds-tooltip";
  return `<span class="ds-tooltip" data-slot="tooltip" data-side="${escapeHtml(data.side ?? "top")}"><span class="ds-tooltip__trigger" data-slot="trigger" tabindex="0" aria-describedby="${escapeHtml(id)}">${data.triggerHtml}</span><span id="${escapeHtml(id)}" class="ds-tooltip__content" data-slot="content" role="tooltip">${escapeHtml(data.content)}</span></span>`;
}

export function renderSkeleton(data: WebSkeletonData = {}) {
  const variant = data.variant ?? "block";
  const count = variant === "text" ? Math.max(1, data.lines ?? 1) : 1;
  const style = [data.width ? `width: ${escapeHtml(data.width)}` : "", data.height ? `height: ${escapeHtml(data.height)}` : ""].filter(Boolean).join("; ");
  const lines = Array.from({ length: count }, (_, index) => {
    const lineStyle = index === count - 1 && count > 1 ? ' style="width: 72%"' : "";
    return `<span class="ds-skeleton__line" data-slot="line"${lineStyle}></span>`;
  }).join("");
  return `<span class="ds-skeleton" data-slot="skeleton" data-variant="${escapeHtml(variant)}" aria-hidden="true"${attr("style", style || undefined)}>${lines}</span>`;
}

export function renderLoading(data: WebLoadingData = {}) {
  const variant = data.variant ?? "spinner";
  const inner = variant === "dots"
    ? `<span class="ds-loading__dot" data-slot="dot"></span><span class="ds-loading__dot" data-slot="dot"></span><span class="ds-loading__dot" data-slot="dot"></span>`
    : `<span class="ds-loading__indicator" data-slot="indicator"></span>`;
  return `<span class="ds-loading" data-slot="loading" data-size="${escapeHtml(data.size ?? "md")}" data-variant="${escapeHtml(variant)}" role="status" aria-label="${escapeHtml(data.label ?? "Carregando")}">${inner}</span>`;
}

export function renderFieldset(data: WebFieldsetData) {
  const state = data.inputState ?? "default";
  const helperId = data.helperText ? `${data.id ?? "ds-fieldset"}-helper` : undefined;
  return `<fieldset class="ds-fieldset" data-slot="fieldset" data-state="${escapeHtml(state)}"${attr("aria-describedby", helperId)}${attr("aria-invalid", state === "error" ? "true" : undefined)}><legend class="ds-fieldset__legend" data-slot="legend">${escapeHtml(data.legend)}</legend><div class="ds-fieldset__content" data-slot="content">${data.contentHtml}</div>${helperText(helperId, state, data.helperText)}</fieldset>`;
}

export function renderToggle(data: WebToggleData) {
  const state = data.inputState ?? "default";
  const helperId = data.helperText ? `${data.id}-helper` : undefined;
  const label = data.label ? `<span class="ds-toggle__text" data-slot="text">${escapeHtml(data.label)}</span>` : "";
  const helper = data.helperText ? `<div class="ds-toggle__helper" data-slot="helper-wrap">${helperText(helperId, state, data.helperText)}</div>` : "";
  return `<div class="ds-toggle" data-slot="toggle" data-state="${escapeHtml(state)}" data-size="${escapeHtml(data.size ?? "md")}"><label class="ds-toggle__label" data-slot="label" for="${escapeHtml(data.id)}"><span class="ds-toggle__switch" data-slot="switch"><input id="${escapeHtml(data.id)}" type="checkbox" role="switch" class="ds-toggle__control" data-slot="control"${attr("checked", data.checked)}${attr("disabled", data.disabled)}${attr("required", data.required)}${attr("aria-invalid", state === "error" ? "true" : undefined)}${attr("aria-describedby", helperId)} /><span class="ds-toggle__track" data-slot="track" aria-hidden="true"><span class="ds-toggle__thumb" data-slot="thumb"></span></span></span>${label}</label>${helper}</div>`;
}

export function renderFileInput(data: WebFileInputData) {
  const state = data.inputState ?? "default";
  const helperId = data.helperText ? `${data.id}-helper` : undefined;
  const label = data.label ? `<label class="ds-input__label" data-slot="label" for="${escapeHtml(data.id)}">${escapeHtml(data.label)}${data.required ? " *" : ""}</label>` : "";
  return `<div class="ds-file-input" data-slot="file-input" data-state="${escapeHtml(state)}" data-size="${escapeHtml(data.size ?? "md")}">${label}<input id="${escapeHtml(data.id)}" type="file" class="ds-file-input__control" data-slot="control"${attr("aria-invalid", state === "error" ? "true" : undefined)}${attr("aria-describedby", helperId)}${attr("aria-required", data.required ? "true" : undefined)}${attr("required", data.required)}${attr("accept", data.accept)}${attr("multiple", data.multiple)} /><span class="ds-file-input__empty" data-slot="empty">${escapeHtml(data.emptyText ?? "Nenhum arquivo selecionado")}</span>${helperText(helperId, state, data.helperText)}</div>`;
}

export function renderProgress(data: WebProgressData = {}) {
  const max = data.max ?? 100;
  const indeterminate = data.value === undefined;
  const percentage = normalizePercent(data.value, max);
  const value = indeterminate ? "" : `<span class="ds-progress__value" data-slot="value">${percentage}%</span>`;
  return `<div class="ds-progress" data-slot="progress" data-indeterminate="${indeterminate ? "true" : "false"}"><div class="ds-progress__header" data-slot="header"><span class="ds-progress__label" data-slot="label">${escapeHtml(data.label ?? "Progresso")}</span>${data.showValue && !indeterminate ? value : ""}</div><div class="ds-progress__track" data-slot="track" role="progressbar" aria-label="${escapeHtml(data.label ?? "Progresso")}" aria-valuemin="0" aria-valuemax="${max}"${attr("aria-valuenow", indeterminate ? undefined : Math.min(Math.max(data.value ?? 0, 0), max))}><span class="ds-progress__bar" data-slot="bar"${attr("style", indeterminate ? undefined : `width: ${percentage}%`)}></span></div></div>`;
}

export function renderSteps(data: WebStepsData) {
  const items = data.items
    .map((item, index) => {
      const state = item.state ?? "pending";
      const marker = state === "complete" ? "✓" : state === "error" ? "!" : String(index + 1);
      const description = item.description ? `<span class="ds-steps__description" data-slot="description">${escapeHtml(item.description)}</span>` : "";
      return `<li class="ds-steps__item" data-slot="item" data-state="${escapeHtml(state)}"${attr("aria-current", state === "current" ? "step" : undefined)}><span class="ds-steps__marker" data-slot="marker" aria-hidden="true">${marker}</span><span class="ds-steps__content" data-slot="content"><span class="ds-steps__label" data-slot="label">${escapeHtml(item.label)}</span>${description}</span></li>`;
    })
    .join("");
  return `<ol class="ds-steps" data-slot="steps" data-orientation="${escapeHtml(data.orientation ?? "responsive")}" aria-label="${escapeHtml(data.label ?? "Etapas")}">${items}</ol>`;
}

export function renderStat(data: WebStatData) {
  const icon = data.iconHtml ? `<span class="ds-stat__icon" data-slot="icon">${data.iconHtml}</span>` : "";
  const description = data.description ? `<span class="ds-stat__description" data-slot="description">${escapeHtml(data.description)}</span>` : "";
  const trend = data.trend ? `<span class="ds-stat__trend" data-slot="trend">${escapeHtml(data.trend)}</span>` : "";
  return `<section class="ds-stat" data-slot="stat">${icon}<span class="ds-stat__title" data-slot="title">${escapeHtml(data.title)}</span><strong class="ds-stat__value" data-slot="value">${escapeHtml(data.value)}</strong>${description}${trend}</section>`;
}

export function renderStats(data: WebStatsData) {
  return `<div class="ds-stats" data-slot="stats">${data.items.map(renderStat).join("")}</div>`;
}

export function renderAvatar(data: WebAvatarData) {
  const media = data.src
    ? `<img class="ds-avatar__image" data-slot="image" src="${escapeHtml(data.src)}" alt="${escapeHtml(data.alt ?? "")}" />`
    : `<span class="ds-avatar__fallback" data-slot="fallback">${escapeHtml(data.fallback)}</span>`;
  const status = data.statusHtml ? `<span class="ds-avatar__status" data-slot="status">${data.statusHtml}</span>` : "";
  return `<span class="ds-avatar" data-slot="avatar" data-size="${escapeHtml(data.size ?? "md")}"><span class="ds-avatar__media" data-slot="media">${media}</span>${status}</span>`;
}

export function renderStatus(data: WebStatusData) {
  return `<span class="ds-status" data-slot="status" data-tone="${escapeHtml(data.tone ?? "neutral")}" data-size="${escapeHtml(data.size ?? "md")}" data-pulse="${data.pulse ? "true" : "false"}"><span class="ds-status__dot" data-slot="dot" aria-hidden="true"></span><span class="ds-status__label" data-slot="label">${escapeHtml(data.label)}</span></span>`;
}

export function renderList(data: WebListData) {
  const items = data.items.map((item) => {
    const media = item.mediaHtml ? `<span class="ds-list__media" data-slot="media">${item.mediaHtml}</span>` : "";
    const description = item.description ? `<span class="ds-list__description" data-slot="description">${escapeHtml(item.description)}</span>` : "";
    const meta = item.meta ? `<span class="ds-list__meta" data-slot="meta">${escapeHtml(item.meta)}</span>` : "";
    const action = item.actionHtml ? `<span class="ds-list__action" data-slot="action">${item.actionHtml}</span>` : "";
    return `<li class="ds-list__item" data-slot="item">${media}<span class="ds-list__content" data-slot="content"><span class="ds-list__title" data-slot="title">${escapeHtml(item.title)}</span>${description}</span>${meta}${action}</li>`;
  }).join("");
  return `<ul class="ds-list" data-slot="list"${attr("aria-label", data.label)}>${items}</ul>`;
}

export function renderDivider(data: WebDividerData = {}) {
  const label = data.label ? `<span class="ds-divider__label" data-slot="label">${escapeHtml(data.label)}</span>` : "";
  const orientation = data.orientation ?? "horizontal";
  return `<div class="ds-divider" data-slot="divider" data-orientation="${escapeHtml(orientation)}" role="separator" aria-orientation="${escapeHtml(orientation)}">${label}</div>`;
}

export function renderPagination(data: WebPaginationData) {
  const current = Math.min(Math.max(data.page, 1), data.totalPages);
  const renderItem = (target: number, content: string, ariaLabel: string, disabled = false) => {
    const common = `class="ds-pagination__item" data-slot="item" aria-label="${escapeHtml(ariaLabel)}"${attr("aria-current", target === current ? "page" : undefined)}${attr("aria-disabled", disabled ? "true" : undefined)}`;
    if (data.getHref && !disabled) {
      return `<a href="${escapeHtml(data.getHref(target))}" ${common}>${escapeHtml(content)}</a>`;
    }
    return `<button type="button" ${common}${attr("disabled", disabled)} data-page="${target}">${escapeHtml(content)}</button>`;
  };
  const pages = Array.from({ length: data.totalPages }, (_, index) => index + 1)
    .map((target) => renderItem(target, String(target), `Página ${target}`))
    .join("");
  return `<nav class="ds-pagination" data-slot="pagination" aria-label="${escapeHtml(data.label ?? "Paginação")}">${renderItem(current - 1, data.previousLabel ?? "Anterior", "Página anterior", current <= 1)}<div class="ds-pagination__pages" data-slot="pages">${pages}</div>${renderItem(current + 1, data.nextLabel ?? "Próxima", "Próxima página", current >= data.totalPages)}</nav>`;
}
