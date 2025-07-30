import { useState } from "react";
import NavItems from "../nav-items/nav-items";
import styles from "./hamburger.module.scss";
export default function Hamburger() {
  const [aberto, setAberto] = useState(false);
  return (
    <div className={styles.hamburger}>
      <button onClick={() => setAberto(!aberto)}>☰</button>
      {aberto && (
        <nav>
          <span className={styles.close}>
            <button onClick={() => setAberto(!aberto)}>X</button>
          </span>
          <ul>
            <NavItems />
          </ul>
        </nav>
      )}
    </div>
  );
}
