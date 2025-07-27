import styles from "./button.module.scss";

type ButtonProps = Readonly<{
  onClick?: () => void;
  titulo: string;
  variante: "primary" | "verde-claro" | "laranja";
  tamanho?: "small" | "medium" | "large";
}>;

export default function Button({
  titulo,
  onClick,
  variante = "primary",
  tamanho = "medium",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.botao} ${styles[variante]} ${styles[tamanho]}`}
    >
      {titulo}
    </button>
  );
}
