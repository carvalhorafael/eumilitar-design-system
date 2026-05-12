"use client";

import { useState } from "react";
import { Checkbox, Radio, CheckboxGroup, RadioGroup, type InputState } from "@eumilitar/ui";

export function CheckboxStatesDemo() {
  const [checked, setChecked] = useState(false);
  const [checkedError, setCheckedError] = useState(false);
  const [checkedSuccess, setCheckedSuccess] = useState(true);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox
        label="Aceito os termos e condições"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Checkbox
        inputState="error"
        label="Campo obrigatório"
        helperText="Você deve aceitar para continuar"
        checked={checkedError}
        onChange={(e) => setCheckedError(e.target.checked)}
      />
      <Checkbox
        inputState="success"
        label="Dados verificados"
        helperText="Informação confirmada"
        checked={checkedSuccess}
        onChange={(e) => setCheckedSuccess(e.target.checked)}
      />
      <Checkbox
        label="Opção desabilitada"
        disabled
        checked={false}
        onChange={() => {}}
      />
      <Checkbox
        label="Opção desabilitada e marcada"
        disabled
        checked={true}
        onChange={() => {}}
      />
    </div>
  );
}

export function CheckboxGroupDemo() {
  const [values, setValues] = useState<Record<string, boolean>>({
    ex: true,
    mb: false,
    fab: false,
    pm: false,
    bm: false,
  });

  const toggle = (key: string) =>
    setValues((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <CheckboxGroup label="Forças de interesse">
      <Checkbox label="Exército Brasileiro" checked={values.ex} onChange={() => toggle("ex")} />
      <Checkbox label="Marinha do Brasil" checked={values.mb} onChange={() => toggle("mb")} />
      <Checkbox label="Força Aérea Brasileira" checked={values.fab} onChange={() => toggle("fab")} />
      <Checkbox label="Polícia Militar" checked={values.pm} onChange={() => toggle("pm")} />
      <Checkbox label="Corpo de Bombeiros Militar" checked={values.bm} onChange={() => toggle("bm")} />
    </CheckboxGroup>
  );
}

export function RadioStatesDemo() {
  const [value, setValue] = useState("ativo");

  return (
    <RadioGroup label="Situação do militar">
      {[
        { value: "ativo", label: "Ativo" },
        { value: "reserva", label: "Da Reserva" },
        { value: "reformado", label: "Reformado" },
      ].map((opt) => (
        <Radio
          key={opt.value}
          name="situacao-demo"
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => setValue(opt.value)}
        />
      ))}
    </RadioGroup>
  );
}

export function RadioErrorDemo() {
  const [value, setValue] = useState("");

  return (
    <RadioGroup
      label="Modalidade de prova *"
      inputState={value === "" ? "error" : "default"}
      helperText={value === "" ? "Selecione uma modalidade" : undefined}
    >
      {[
        { value: "presencial", label: "Presencial" },
        { value: "online", label: "Online" },
      ].map((opt) => (
        <Radio
          key={opt.value}
          name="modalidade-demo"
          label={opt.label}
          value={opt.value}
          checked={value === opt.value}
          onChange={() => setValue(opt.value)}
          inputState={value === "" ? "error" : "default"}
        />
      ))}
    </RadioGroup>
  );
}

export function FormDemo() {
  const [forcas, setForcas] = useState<Record<string, boolean>>({
    ex: false, mb: false, fab: false,
  });
  const [situacao, setSituacao] = useState("ativo");
  const [aceito, setAceito] = useState(false);

  const toggleForca = (key: string) =>
    setForcas((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "400px" }}>
      <CheckboxGroup label="Forças de interesse">
        <Checkbox label="Exército Brasileiro" checked={forcas.ex} onChange={() => toggleForca("ex")} />
        <Checkbox label="Marinha do Brasil" checked={forcas.mb} onChange={() => toggleForca("mb")} />
        <Checkbox label="Força Aérea Brasileira" checked={forcas.fab} onChange={() => toggleForca("fab")} />
      </CheckboxGroup>

      <RadioGroup label="Situação atual">
        {[
          { value: "ativo", label: "Ativo" },
          { value: "reserva", label: "Da Reserva" },
          { value: "civil", label: "Civil interessado" },
        ].map((opt) => (
          <Radio
            key={opt.value}
            name="situacao-form-demo"
            label={opt.label}
            value={opt.value}
            checked={situacao === opt.value}
            onChange={() => setSituacao(opt.value)}
          />
        ))}
      </RadioGroup>

      <Checkbox
        label="Aceito receber comunicações da EuMilitar"
        checked={aceito}
        onChange={(e) => setAceito(e.target.checked)}
      />
    </div>
  );
}
