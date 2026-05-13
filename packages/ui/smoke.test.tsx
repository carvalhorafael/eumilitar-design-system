import { fireEvent, render, screen } from "@testing-library/react";

import {
  Accordion,
  Alert,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Radio,
  RadioGroup,
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
});
