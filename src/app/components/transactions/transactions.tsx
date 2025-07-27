"use client";
import styles from "./transactions.module.scss";
import moment from "moment";
import Image from "next/image";
import { formatCurrencyBRL } from "@/app/utils/currency";
import { TipoTransacaoEnum } from "@/app/enums/tipo-transacao.enum";
import { useTransacoesContext } from "@/app/contexts/transacao-context";

export default function Transactions() {
  const { transacoes, remover } = useTransacoesContext();

  return (
    <aside className={styles["transactions-container"]}>
      <div className={styles["titulo-extrato"]}>Extrato</div>
      <ul>
        {transacoes.map((transacao, idx) => (
          <li key={idx}>
            <div className={styles.mes}>
              {moment(transacao.data).format("DD MMMM YYYY")}
              <Image
                src="/imagens/icons/remove.svg"
                alt="remover transação"
                width={40}
                height={40}
                onClick={() => remover(transacao.id)}
              ></Image>
            </div>
            <div className={styles.tipo}>{transacao.tipo}</div>
            <div className={styles.valor}>
              {transacao.tipo != TipoTransacaoEnum.DEPOSITO ? "-" : ""}
              {formatCurrencyBRL(transacao.valor)}
            </div>
            {idx + 1 != transacoes?.length && (
              <div className={styles.divider}></div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
