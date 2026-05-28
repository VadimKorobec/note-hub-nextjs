import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/' aria-label="Home">Note HUB</Link>
      <nav aria-label="Main Navigation">
        <ul className={styles.navigation}>
          <Link href='/'>Home</Link>
          <Link href='/notes'>Notes</Link>
          <Link href='/profile'>Profile</Link>
          <Link href='/about'>About</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
