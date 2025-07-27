import { ReactNode } from "react";
import styles from "./container.module.scss";
export default function Container({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <div className={styles.container}>{children}</div>;
}
