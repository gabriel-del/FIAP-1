import styles from "./sidebar.module.scss";
import NavItems from "../nav-items/nav-items";

export default function Sidebar() {
  return (
    <nav className={styles.menu}>
      <ul>
        <NavItems />
      </ul>
    </nav>
  );
}
