"use client";
import { ChangeEvent, useState } from "react";
import { DropdownOption } from "@/app/models/dropdown-options";
import { TipoTransacao } from "@/app/models/tipo-transacao.model";
import CardSection from "../card-section/card-section";
import Dropdown from "../dropdown/dropdown";
import styles from "./transaction-action.module.scss";
import Button from "../button/Button";
import { Transacao } from "@/app/hooks/useTransacoes";
import { useTransacoesContext } from "@/app/contexts/transacao-context";
import moment from "moment";

const dropdownOptions: DropdownOption[] = [
  { label: "Depósito", value: "Depósito", selected: false },
  { label: "Saque", value: "Saque", selected: false },
  { label: "Transferência", value: "Transferência", selected: false },
];
export default function TransactionAction() {
  const [tipoTransacao, setTipoTransacao] = useState<TipoTransacao | null>(
    null
  );
  const [valorTransacao, setValorTransacao] = useState("R$ 0,00");
  const { adicionar } = useTransacoesContext();

  const gerarIdTransacao = () => {
    const timestamp = moment.utc().valueOf();
    const transacao =
      tipoTransacao == "Depósito" ? "d" : tipoTransacao == "Saque" ? "s" : "t";
    const id = `${transacao}${timestamp}`;
    return id;
  };

  const adicionarTransacao = () => {
    if (tipoTransacao == null) {
      return;
    }

    const valor = parseFloat(
      valorTransacao
        .replaceAll(".", "")
        .replaceAll(",", ".")
        .replace("R$", "")
        .trim()
    );

    const data: Transacao = {
      id: gerarIdTransacao(),
      tipo: tipoTransacao,
      valor,
      data: new Date(),
    };

    adicionar(data);
    setValorTransacao("R$ 0,00");
  };

  const handleValorTransacao = (event: ChangeEvent<HTMLInputElement>) => {
    const raw = event.target.value.replace(/\D/g, "");
    const numberValue = parseFloat(raw) / 100;
    const formatted = `R$ ${numberValue.toFixed(2).replace(".", ",")}`;
    setValorTransacao(formatted);
  };
  return (
    <CardSection variante="secondary">
      <div>
        <div className={styles["titulo-card"]}>Nova transação</div>
        <div className={styles.dropdown}>
          <Dropdown
            placeholder="Selecione o tipo de transação"
            options={dropdownOptions}
            onSelect={({ value }) => {
              setTipoTransacao(value);
            }}
          ></Dropdown>
        </div>
        <div className={styles["input-valor-container"]}>
          <label htmlFor="money">Valor</label>
          <input
            type="text"
            id="money"
            value={valorTransacao}
            onChange={handleValorTransacao}
          />
        </div>
        <div className={styles.button}>
          <Button
            titulo="Concluir transação"
            variante="primary"
            onClick={adicionarTransacao}
          ></Button>
        </div>
      </div>
    </CardSection>
  );
}
