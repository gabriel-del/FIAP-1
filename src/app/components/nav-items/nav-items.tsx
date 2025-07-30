import { useState } from "react";
import styles from "./nav-items.module.scss";

type Item = {
  id: string;
  label: string;
};

const items: Item[] = [
  { id: "inicio", label: "Início" },
  { id: "transferencias", label: "Transferências" },
  { id: "investimentos", label: "Investimentos" },
  { id: "outros", label: "Outros serviços" },
];

export default function NavItems() {
  const [active, setActive] = useState("inicio");
  return (
    <>
      {items.map(({ id, label }) => (
        <li
          onClick={() => setActive(id)}
          key={id}
          className={`${styles.item} ${active === id ? styles.activated : ""}`}
        >
          {label}
        </li>
      ))}
    </>
  );
}
