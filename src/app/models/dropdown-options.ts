import { TipoTransacao } from "./tipo-transacao.model";

export interface DropdownOption {
  label: string;
  value: TipoTransacao;
  selected?: boolean;
}
