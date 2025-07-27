"use client";
import moment from "moment";
import CardSection from "../card-section/card-section";
import styles from "./dashboard.module.scss";
import { formatCurrencyBRL } from "@/app/utils/currency";
import { useTransacoesContext } from "@/app/contexts/transacao-context";

export type DashboardProps = Readonly<{
  userName?: string;
  tipoConta?: string;
}>;

export default function Dashboard({ userName, tipoConta }: DashboardProps) {
  const { saldo } = useTransacoesContext();
  return (
    <CardSection variante="primary">
      <div className={styles.cliente}>
        <div className={styles.nome}>Olá, {userName}! :)</div>
        <div className={styles.data}>
          {moment(Date.now()).format("dddd, DD/MM/YYYY")}
        </div>
      </div>
      <div className={styles.saldo}>
        <div className={styles.titulo}>
          <div className={styles.texto}>Saldo</div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles["tipo-conta"]}>{tipoConta}</div>
        <div className={styles.valor}>{formatCurrencyBRL(saldo)}</div>
      </div>
    </CardSection>
  );
}
