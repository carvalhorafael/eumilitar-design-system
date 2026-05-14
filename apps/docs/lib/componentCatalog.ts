export interface DocsComponentItem {
  number: string;
  title: string;
  href: string;
  description: string;
}

export interface DocsComponentGroup {
  title: string;
  description: string;
  items: DocsComponentItem[];
}

export const componentGroups: DocsComponentGroup[] = [
  {
    title: "Ações",
    description: "Controles que disparam comandos ou escolhas diretas.",
    items: [
      {
        number: "01",
        title: "Button",
        href: "/componentes/botao",
        description: "Ações primárias, secundárias, destrutivas e urgentes.",
      },
    ],
  },
  {
    title: "Data display",
    description: "Componentes para apresentar informação, métricas e conteúdo estruturado.",
    items: [
      {
        number: "08",
        title: "Accordion",
        href: "/componentes/accordion",
        description: "Conteúdo expansível em blocos verticais.",
      },
      {
        number: "24",
        title: "Avatar",
        href: "/componentes/avatar",
        description: "Representação compacta de pessoa, aluno, turma ou organização.",
      },
      {
        number: "02",
        title: "Badge",
        href: "/componentes/badge",
        description: "Rótulos curtos para status, categorias e metadados.",
      },
      {
        number: "03",
        title: "Card",
        href: "/componentes/card",
        description: "Agrupamento visual para conteúdo e ações relacionadas.",
      },
      {
        number: "26",
        title: "List",
        href: "/componentes/list",
        description: "Linhas estruturadas com mídia, conteúdo, metadados e ação.",
      },
      {
        number: "23",
        title: "Stat",
        href: "/componentes/stat",
        description: "Indicadores numéricos para prova social e dashboards simples.",
      },
      {
        number: "25",
        title: "Status",
        href: "/componentes/status",
        description: "Indicador visual compacto para estado atual.",
      },
      {
        number: "09",
        title: "Table",
        href: "/componentes/table",
        description: "Dados tabulares com densidade e leitura em mobile.",
      },
    ],
  },
  {
    title: "Navegação",
    description: "Estruturas para orientar deslocamento entre páginas, etapas e conteúdos.",
    items: [
      {
        number: "13",
        title: "Breadcrumbs",
        href: "/componentes/breadcrumbs",
        description: "Caminho hierárquico da página atual.",
      },
      {
        number: "11",
        title: "Drawer",
        href: "/componentes/drawer",
        description: "Painel lateral para navegação, filtros e apoio mobile.",
      },
      {
        number: "10",
        title: "Navbar",
        href: "/componentes/navbar",
        description: "Navegação principal mobile-first do site.",
      },
      {
        number: "28",
        title: "Pagination",
        href: "/componentes/pagination",
        description: "Navegação entre páginas de listas, tabelas e resultados.",
      },
      {
        number: "22",
        title: "Steps",
        href: "/componentes/steps",
        description: "Etapas de jornada, onboarding, inscrição ou checkout.",
      },
      {
        number: "12",
        title: "Tabs",
        href: "/componentes/tabs",
        description: "Alternância entre painéis relacionados.",
      },
    ],
  },
  {
    title: "Feedback",
    description: "Estados de sistema, mensagens temporárias e carregamento.",
    items: [
      {
        number: "07",
        title: "Alert",
        href: "/componentes/alert",
        description: "Mensagens persistentes de informação, sucesso, aviso ou erro.",
      },
      {
        number: "17",
        title: "Loading",
        href: "/componentes/loading",
        description: "Indicadores de processamento curto ou indeterminado.",
      },
      {
        number: "21",
        title: "Progress",
        href: "/componentes/progress",
        description: "Progresso determinado ou indeterminado.",
      },
      {
        number: "16",
        title: "Skeleton",
        href: "/componentes/skeleton",
        description: "Placeholder de carregamento que preserva estrutura.",
      },
      {
        number: "14",
        title: "Toast",
        href: "/componentes/toast",
        description: "Feedback transitório de ações e eventos.",
      },
      {
        number: "15",
        title: "Tooltip",
        href: "/componentes/tooltip",
        description: "Ajuda contextual para controles compactos.",
      },
    ],
  },
  {
    title: "Data input",
    description: "Entradas e agrupamentos para formulários.",
    items: [
      {
        number: "06",
        title: "Checkbox & Radio",
        href: "/componentes/checkbox",
        description: "Seleção múltipla ou escolha única em grupos.",
      },
      {
        number: "18",
        title: "Fieldset",
        href: "/componentes/fieldset",
        description: "Agrupamento semântico para formulários longos.",
      },
      {
        number: "20",
        title: "FileInput",
        href: "/componentes/file-input",
        description: "Upload de arquivos com estado visual.",
      },
      {
        number: "04",
        title: "Input & Textarea",
        href: "/componentes/input",
        description: "Campos de texto em linha única ou múltiplas linhas.",
      },
      {
        number: "05",
        title: "Select",
        href: "/componentes/select",
        description: "Escolha de opção em lista nativa.",
      },
      {
        number: "19",
        title: "Toggle",
        href: "/componentes/toggle",
        description: "Controle liga/desliga para configurações.",
      },
    ],
  },
  {
    title: "Layout",
    description: "Peças estruturais para separar e organizar superfícies.",
    items: [
      {
        number: "27",
        title: "Divider",
        href: "/componentes/divider",
        description: "Separador horizontal ou vertical com rótulo opcional.",
      },
    ],
  },
];

export const componentCount = componentGroups.reduce((total, group) => total + group.items.length, 0);
