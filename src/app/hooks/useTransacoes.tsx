import { useEffect, useState } from "react";
import { TipoTransacao } from "../models/tipo-transacao.model";
import { TipoTransacaoEnum } from "../enums/tipo-transacao.enum";

export type Transacao = {
  id: string;
  tipo: TipoTransacao;
  valor: number;
  data: Date;
};

const STORAGE_KEY = "transacoes";

export function useTransacoes() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [saldo, setSaldo] = useState<number>(0);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);
    if (dadosSalvos) {
      const lista: Transacao[] = JSON.parse(dadosSalvos);
      lista.forEach((t) => (t.data = new Date(t.data)));
      setTransacoes(lista);
    }
  }, []);

  useEffect(() => {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);
    if (dadosSalvos) {
      const transacoesLocal: Transacao[] = JSON.parse(dadosSalvos);
      const total = transacoesLocal.reduce((acc, t) => {
        if (t.tipo == TipoTransacaoEnum.DEPOSITO) {
          acc += t.valor;
        } else {
          acc -= t.valor;
        }
        return acc;
      }, 0);
      console.log(total);
      setSaldo(total);
    } else {
      setSaldo(0);
    }
  }, [transacoes]);

  function salvar(transacoesAtualizadas: Transacao[]) {
    setTransacoes(transacoesAtualizadas);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(transacoesAtualizadas));
  }

  function adicionar(transacao: Transacao) {
    console.log(transacao);
    salvar([...transacoes, transacao]);
  }

  function remover(id: string) {
    salvar(transacoes.filter((t) => t.id !== id));
  }

  return { transacoes, adicionar, remover, saldo };
}
