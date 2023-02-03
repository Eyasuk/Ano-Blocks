import styles from "./navbar.module.scss";

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <a href="#">Dashboard</a>
      <a href="">Stake</a>
      <a href="">Borrow</a>
      <a href="">Dao</a>
    </nav>
  );
}
