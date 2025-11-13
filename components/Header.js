import styles from "../componentsStyles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.brand}>DR. MANUJ JOSHI (PT)</h1>
      <h4 className={styles.brandpos}>CONSULTANT PHYSIOTHERAPIST</h4>
    </header>
  );
}
