import Container from "../container/container";
import Hamburger from "../hamburger/hamburger";
import styles from "./header.module.scss";
import Image from "next/image";
import { useBasePath } from "../../hooks/useBasePath";

export default function Header() {
  const { getAssetUrl } = useBasePath();
  
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles["avatar-container"]}>
          <Hamburger />
          <span className={styles["nome-cliente"]}>
            Joana da Silva Oliveira
          </span>
          <Image
            src={getAssetUrl("/imagens/header/header-avatar.svg")}
            alt="avatar"
            width={40}
            height={40}
          ></Image>
        </div>
      </Container>
    </header>
  );
}
