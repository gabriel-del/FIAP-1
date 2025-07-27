"use client";
import styles from "./page.module.css";
import Sidebar from "./components/sidebar/sidebar";
import Header from "./components/header/header";
import Container from "./components/container/container";
import Dashboard from "./components/dashboard/dashboard";
import Transactions from "./components/transactions/transactions";
import TransactionAction from "./components/transaction-action/transaction-action";
import "moment/locale/pt-br";
import moment from "moment";
moment.locale("pt-br");

export default function Home() {
  return (
    <div>
      <Header />
      <Container>
        <Sidebar />
        <main className={styles.main}>
          <Dashboard userName="Joana" tipoConta="Conta Corrente" />
          <TransactionAction />
        </main>
        <Transactions />
        <footer className={styles.footer}></footer>
      </Container>
    </div>
  );
}
