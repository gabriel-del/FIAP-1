import styles from "./card-section.module.scss";
type CardProps = Readonly<{
  variante: "primary" | "secondary";
  children: React.ReactNode;
}>;
export default function cardSection({
  variante = "primary",
  children,
}: CardProps) {
  return (
    <section className={`${styles.card} ${styles[variante]}`}>
      {children}
    </section>
  );
}
