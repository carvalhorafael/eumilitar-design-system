import { fireEvent, render, screen } from "@testing-library/react";

import {
  Accordion,
  Alert,
  Button,
  Breadcrumbs,
  Checkbox,
  CheckboxGroup,
  Drawer,
  Fieldset,
  FileInput,
  Input,
  Loading,
  Navbar,
  Radio,
  RadioGroup,
  Skeleton,
  Progress,
  Steps,
  Tabs,
  Toast,
  Tooltip,
  Toggle,
} from "./index";

describe("@carvalhorafael/eumilitar-ui smoke", () => {
  it("renderiza Button com type padrão button", () => {
    render(<Button>Começar agora</Button>);

    const button = screen.getByRole("button", { name: "Começar agora" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveAttribute("data-variant", "primary");
  });

  it("liga Input com label e helper text", () => {
    render(
      <Input
        label="E-mail"
        helperText="Você receberá o material neste endereço."
        required
      />,
    );

    const input = screen.getByLabelText(/e-mail/i);
    const helper = screen.getByText("Você receberá o material neste endereço.");

    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("aria-describedby", helper.id);
    expect(helper).toBeInTheDocument();
  });

  it("aplica estado indeterminate real no Checkbox", () => {
    render(<Checkbox label="Aceito os termos" indeterminate />);

    const checkbox = screen.getByLabelText("Aceito os termos") as HTMLInputElement;
    expect(checkbox.indeterminate).toBe(true);
  });

  it("expande Accordion ao clicar no trigger", () => {
    render(
      <Accordion
        items={[
          {
            title: "Quanto tempo tenho acesso?",
            content: "O acesso é válido por 12 meses.",
          },
        ]}
      />,
    );

    const trigger = screen.getByRole("button", {
      name: "Quanto tempo tenho acesso?",
    });

    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("region", { hidden: true })).toHaveAttribute("hidden");

    fireEvent.click(trigger);

    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("region")).not.toHaveAttribute("hidden");
    expect(screen.getByText("O acesso é válido por 12 meses.")).toBeInTheDocument();
  });

  it("remove Alert dismissible e chama callback", () => {
    const onDismiss = vi.fn();

    render(
      <Alert title="Inscrições encerram hoje" dismissible onDismiss={onDismiss}>
        Restam apenas 7 vagas.
      </Alert>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Fechar" }));

    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("propaga aria-describedby e aria-invalid em grupos", () => {
    render(
      <>
        <CheckboxGroup label="Forças" helperText="Selecione ao menos uma." inputState="error">
          <Checkbox label="Exército" checked={false} onChange={() => {}} />
        </CheckboxGroup>
        <RadioGroup label="Modalidade" helperText="Escolha uma opção." inputState="error">
          <Radio name="modalidade" label="Presencial" value="presencial" checked={false} onChange={() => {}} />
        </RadioGroup>
      </>,
    );

    const checkboxGroup = screen.getByRole("group", { name: "Forças" });
    const radioGroup = screen.getByRole("group", { name: "Modalidade" });

    expect(checkboxGroup).toHaveAttribute("aria-invalid", "true");
    expect(checkboxGroup).toHaveAttribute("aria-describedby");
    expect(radioGroup).toHaveAttribute("aria-invalid", "true");
    expect(radioGroup).toHaveAttribute("aria-describedby");
  });

  it("abre e fecha Navbar mobile com aria-expanded", () => {
    render(
      <Navbar
        brand={<span>EuMilitar</span>}
        groups={[{ label: "Componentes", items: [{ href: "/componentes/botao", label: "Button" }] }]}
        activeHref="/componentes/botao"
        renderLink={({ item, className, style, onClick }) => (
          <a
            href={item.href}
            className={className}
            style={style}
            onClick={(event) => {
              event.preventDefault();
              onClick();
            }}
          >
            {item.label}
          </a>
        )}
      />,
    );

    const trigger = screen.getByRole("button", { name: "Abrir menu" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("link", { name: "Button" })).toHaveAttribute("href", "/componentes/botao");

    fireEvent.click(screen.getByRole("link", { name: "Button" }));
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("abre e fecha Drawer por trigger, botão e Escape", () => {
    render(
      <Drawer title="Filtros" trigger="Abrir filtros">
        <p>Conteúdo do painel</p>
      </Drawer>,
    );

    const trigger = screen.getByRole("button", { name: "Abrir filtros" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("dialog", { name: "Filtros" })).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");

    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole("button", { name: "Fechar painel" }));
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("troca Tabs por clique e teclado", () => {
    render(
      <Tabs
        label="Exemplo"
        items={[
          { value: "primeira", label: "Primeira", content: "Painel inicial" },
          { value: "segunda", label: "Segunda", content: "Painel seguinte" },
        ]}
      />,
    );

    const first = screen.getByRole("tab", { name: "Primeira" });
    const second = screen.getByRole("tab", { name: "Segunda" });
    expect(first).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "Primeira" })).toHaveTextContent("Painel inicial");

    fireEvent.click(second);
    expect(second).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "Segunda" })).toHaveTextContent("Painel seguinte");

    fireEvent.keyDown(second, { key: "ArrowLeft" });
    expect(first).toHaveAttribute("aria-selected", "true");
  });

  it("renderiza Breadcrumbs com aria-current no item atual", () => {
    render(
      <Breadcrumbs
        items={[
          { href: "/", label: "Início" },
          { href: "/componentes", label: "Componentes" },
          { label: "Breadcrumbs" },
        ]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Navegação estrutural" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("href", "/");
    expect(screen.getByText("Breadcrumbs")).toHaveAttribute("aria-current", "page");
  });

  it("renderiza Loading com role status e label acessível", () => {
    render(<Loading variant="dots" label="Processando dados" />);

    const loading = screen.getByRole("status", { name: "Processando dados" });
    expect(loading).toHaveAttribute("data-variant", "dots");
  });

  it("renderiza Skeleton como conteúdo decorativo", () => {
    const { container } = render(<Skeleton variant="text" lines={3} />);

    const skeleton = container.querySelector(".ds-skeleton");
    expect(skeleton).toHaveAttribute("aria-hidden", "true");
    expect(container.querySelectorAll(".ds-skeleton__line")).toHaveLength(3);
  });

  it("remove Toast dismissible e chama callback", () => {
    const onDismiss = vi.fn();

    render(
      <Toast variant="success" title="Salvo" dismissible onDismiss={onDismiss}>
        Alterações publicadas.
      </Toast>,
    );

    expect(screen.getByRole("status")).toHaveTextContent("Salvo");
    fireEvent.click(screen.getByRole("button", { name: "Fechar notificação" }));
    expect(onDismiss).toHaveBeenCalledTimes(1);
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("associa Tooltip ao trigger por aria-describedby", () => {
    render(
      <Tooltip content="Publica a alteração">
        <button type="button">Publicar</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole("button", { name: "Publicar" });
    const tooltip = screen.getByRole("tooltip");

    expect(trigger).toHaveAttribute("aria-describedby", tooltip.id);
    expect(tooltip).toHaveTextContent("Publica a alteração");
  });

  it("renderiza Fieldset com legend, helper e aria-invalid", () => {
    render(
      <Fieldset legend="Dados" helperText="Preencha os campos." inputState="error">
        <Input label="Nome" />
      </Fieldset>,
    );

    const group = screen.getByRole("group", { name: "Dados" });
    expect(group).toHaveAttribute("aria-invalid", "true");
    expect(group).toHaveAttribute("aria-describedby");
    expect(screen.getByText("Preencha os campos.")).toBeInTheDocument();
  });

  it("renderiza Toggle como switch acessível", () => {
    render(<Toggle label="Receber alertas" defaultChecked />);

    const toggle = screen.getByRole("switch", { name: "Receber alertas" });
    expect(toggle).toBeChecked();
  });

  it("liga FileInput com label, helper e required", () => {
    render(<FileInput label="Comprovante" helperText="Envie em PDF." required />);

    const input = screen.getByLabelText(/Comprovante/);
    expect(input).toHaveAttribute("type", "file");
    expect(input).toHaveAttribute("aria-required", "true");
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("renderiza Progress determinado com aria-valuenow", () => {
    render(<Progress label="Inscrição" value={45} showValue />);

    const progress = screen.getByRole("progressbar", { name: "Inscrição" });
    expect(progress).toHaveAttribute("aria-valuenow", "45");
    expect(screen.getByText("45%")).toBeInTheDocument();
  });

  it("renderiza Steps com etapa atual", () => {
    render(
      <Steps
        items={[
          { label: "Cadastro", state: "complete" },
          { label: "Documentos", state: "current" },
          { label: "Pagamento", state: "pending" },
        ]}
      />,
    );

    expect(screen.getByText("Documentos").closest("li")).toHaveAttribute("aria-current", "step");
  });
});
