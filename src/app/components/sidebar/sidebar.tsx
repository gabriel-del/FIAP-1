import { useState } from "react";
import styles from "./sidebar.module.scss";

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

export default function Sidebar() {
  const [active, setActive] = useState("inicio");

  return (
    <nav className={styles.menu}>
      <ul>
        {items.map(({ id, label }) => (
          <li
            key={id}
            onClick={() => setActive(id)}
            className={`${styles.item} ${
              active === id ? styles.activated : ""
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
