import { fireEvent, render, screen } from "@testing-library/react";

import {
  Accordion,
  Alert,
  Button,
  Breadcrumbs,
  Checkbox,
  CheckboxGroup,
  Drawer,
  Input,
  Navbar,
  Radio,
  RadioGroup,
  Tabs,
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
});
