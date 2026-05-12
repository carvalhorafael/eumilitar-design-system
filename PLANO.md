# EuMilitar Design System — Plano de Implementação

## Status geral

**Fase atual**: Evolução para reutilização  
**Objetivo de médio prazo**: Transformar o projeto de um site de documentação visual em um design system reutilizável entre múltiplos consumidores.  
**Objetivo de longo prazo**: Ter tokens, componentes base e blocos de composição que acelerem a construção de landing pages e futuros produtos, incluindo um tema WordPress.

Documento complementar:
- [ROADMAP-REUTILIZACAO.md](/Users/rafaelcarvalho/Development/quest_edu/eumilitar-design-system/ROADMAP-REUTILIZACAO.md)

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

### Infra e operação
- [x] Deploy automático na Vercel via integração Git com `main`
- [x] Compatibilidade entre Codex e Claude Code via `AGENTS.md -> CLAUDE.md`
- [x] Diagnóstico inicial de reutilização e roadmap documentado em `ROADMAP-REUTILIZACAO.md`

---

## Em andamento

### Frente principal — Reutilização do sistema
- [x] Consolidar tokens como fonte única real do sistema
- [ ] Separar componentes reutilizáveis do app de documentação
- [ ] Estruturar padrões como blocos portáveis

---

## Próxima fase — Prioridades imediatas

### 1. Tokens como fonte única
- [x] Mover a definição primária de tokens para `packages/tokens/*.css`
- [x] Fazer `apps/docs` consumir os tokens a partir de `@eumilitar/tokens`
- [x] Reduzir `apps/docs/app/globals.css` para base, reset, tema e ajustes específicos do app
- [x] Eliminar duplicação entre tokens do app e tokens do pacote

### 2. Extração dos componentes base
- [ ] Criar `packages/ui`
- [ ] Mover Button, Badge, Card, Input, Select, Checkbox, Alert, Accordion e Table para `packages/ui`
- [ ] Exportar os componentes por uma API única do pacote
- [ ] Fazer `apps/docs` consumir esses componentes do pacote, não de `apps/docs/components/ui`

### 3. Portabilidade de estilos
- [ ] Reduzir dependência de `style={{ ... }}` onde houver repetição estrutural
- [ ] Definir uma convenção de classes semânticas ou utilitárias previsíveis para componentes e blocos
- [ ] Deixar inline style apenas para casos realmente dinâmicos
- [ ] Documentar a anatomia base dos componentes mais usados

### 4. Qualidade mínima para reuso
- [ ] Auditar dark mode nos componentes principais
- [ ] Revisar acessibilidade básica: labels, teclado, contraste e estados
- [ ] Documentar props, variantes, estados e tokens usados por componente
- [ ] Definir checklist mínimo para considerar um componente “reutilizável”

---

## Fase seguinte — Preparação para WordPress

### Blocos e padrões reutilizáveis
- [ ] Formalizar Hero, Urgência, Benefícios, FAQ, Depoimentos, Captação e CTA como blocos
- [ ] Definir anatomia, variantes e conteúdo esperado de cada bloco
- [ ] Criar contratos de conteúdo: obrigatório, opcional, lista, rich text, imagem, CTA
- [ ] Documentar tokens usados e regras responsivas por bloco

### Referência agnóstica de framework
- [ ] Criar versões HTML/CSS de referência para os blocos prioritários
- [ ] Definir convenção de classes voltada para portabilidade, por exemplo `.ds-hero`, `.ds-faq`, `.ds-benefits`
- [ ] Garantir que os blocos possam ser implementados fora de React sem redesenho estrutural

### Caminho para o tema WordPress
- [ ] Identificar quais blocos são prioridade real para o tema
- [ ] Mapear os campos de CMS necessários por bloco
- [ ] Preparar um CSS global exportável para WordPress
- [ ] Criar um protótipo de landing page com blocos portáveis e independentes do app `docs`

---

## Backlog — Componentes

Componentes ainda úteis, mas não prioritários antes da consolidação da base reutilizável.

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

## Backlog — Futuro de distribuição

- [ ] Avaliar exportação estruturada de tokens para múltiplos formatos
- [ ] Avaliar Style Dictionary somente depois de a fonte única de tokens estar estável
- [ ] Avaliar geração de artefatos para Figma, iOS e Android no momento em que houver segundo consumidor real além do app `docs`

---

## Convenção de atualização deste arquivo

Marcar `[x]` ao concluir cada item.  
Manter "Em andamento" curto e alinhado à frente de trabalho atual.  
Adicionar novos itens apenas quando eles ajudarem o objetivo de reutilização, não quando forem apenas desejos laterais.
