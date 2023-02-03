import Image from "next/image";
import NavBar from "components/modules/navbar";

import styles from "./header.module.scss";

export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Image
          className={styles.image}
          alt="logo of ano block"
          src="/icons/logo.svg"
          height={0}
          width={0}
        />
        <h2 className={styles.title}>AnoBlocks</h2>
      </div>
      <NavBar />
      <div className={styles.empty}></div>
    </header>
  );
}
