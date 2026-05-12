# EuMilitar Design System — Plano de Implementação

## Status geral

**Fase atual**: Padrões de Composição  
**Objetivo de longo prazo**: Sistema completo o suficiente para um agente de IA gerar uma landing page seguindo as convenções da EuMilitar.

---

## Concluído

### Fundamentos
- [x] 01 — Cores (escala primitiva, tokens semânticos, forças militares, urgência/fire)
- [x] 02 — Tipografia (famílias, escala, exemplos de uso)
- [x] 03 — Espaçamento (escala base 4px, contextos de aplicação)
- [x] 04 — Tokens (referência completa de CSS custom properties)
- [x] 05 — Sombras & Efeitos (sombras offset, raios, highlight, tape)

### Componentes
- [x] 01 — Button (7 variantes: primary, secondary, ghost, ghost-inverse, brand-inverse, danger, urgent)
- [x] 02 — Badge (11 variantes, dot, tamanhos sm/md)
- [x] 03 — Card (4 variantes, 5 níveis de sombra)
- [x] 04 — Input & Textarea (3 estados, 3 tamanhos, foco neo-brutalista)
- [x] 05 — Select (seta SVG customizada, placeholder automático)
- [x] 06 — Checkbox & Radio (checkmark SVG animado, grupos)
- [x] 07 — Alert (5 variantes: default, success, error, warning, urgent; dismissible)
- [x] 08 — Accordion (modo exclusivo e múltiplo, defaultOpen, conteúdo rico)
- [x] 09 — Table (primitivos composáveis + DataTable com render functions)

### Padrões
- [x] 01 — Hero (claro, brand escuro, com urgência)
- [x] 02 — Urgência (banner de topo, bloco CTA, cards de turma)
- [x] 03 — Captação (lead form simples, form completo 2 colunas)
- [x] 04 — FAQ (FAQ geral, FAQ por força com conteúdo rico)
- [x] 05 — Benefícios (grid 3 col com ícone, grid 2 col com checklist, stats em fundo brand)
- [x] 06 — Depoimentos (grid 3 cards, depoimento em destaque fundo escuro, faixa de números)

---

## Em andamento

Sem itens em andamento no momento.

### Padrão pendente (não iniciar ainda)
- [ ] **07 — Landing Page Completa** — Composição sequencial de Hero → Benefícios → Como Funciona → FAQ → CTA final. Referência principal para geração de páginas por agentes.

---

## Backlog — Componentes

Componentes identificados como úteis, ainda não implementados. Prioridade definida pelo impacto em landing pages e no app do aluno.

| Componente | Prioridade | Justificativa |
|---|---|---|
| Toggle / Switch | Alta | Filtros e preferências — app do aluno |
| Tabs | Alta | Organização de conteúdo por força (EX/MB/FAB) |
| Toast / Notification | Média | Feedback não-bloqueante pós-ação |
| Modal / Dialog | Média | Confirmações, formulários em overlay |
| Breadcrumb | Baixa | Navegação interna — app do aluno |
| Pagination | Baixa | Listagens longas — banco de questões |
| Skeleton / Loading | Baixa | Estados de carregamento |

---

## Backlog — Infra e Qualidade

- [ ] **Deploy — Vercel** (deferido pelo usuário, será feito no final)
- [ ] **Auditoria de dark mode** — Testar todos os componentes com `[data-theme="dark"]`
- [ ] **Acessibilidade** — Verificar aria-labels, navegação por teclado, contraste
- [ ] **Atualizar CLAUDE.md** — Manter sincronizado a cada padrão ou componente novo concluído
- [ ] **Style Dictionary** — Exportar tokens de `globals.css` para `packages/tokens/` (iOS, Android, Figma) — longo prazo

---

## Convenção de atualização deste arquivo

Marcar `[x]` ao concluir cada item. Atualizar "Em andamento" ao iniciar um novo trabalho. Adicionar novos itens ao backlog conforme identificados durante o desenvolvimento.
