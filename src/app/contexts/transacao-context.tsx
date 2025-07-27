"use client";

import { createContext, useContext } from "react";
import { useTransacoes } from "@/app/hooks/useTransacoes";

const TransacoesContext = createContext<ReturnType<
  typeof useTransacoes
> | null>(null);

export function TransacoesProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const transacoes = useTransacoes();
  return (
    <TransacoesContext.Provider value={transacoes}>
      {children}
    </TransacoesContext.Provider>
  );
}

export function useTransacoesContext() {
  const ctx = useContext(TransacoesContext);
  if (!ctx)
    throw new Error(
      "useTransacoesContext deve ser usado dentro do TransacoesProvider"
    );
  return ctx;
}
