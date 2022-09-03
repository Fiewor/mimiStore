import Link from "next/link";
import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.logo}>
          <Link href="/">
            <a>Mimi</a>
          </Link>
        </li>
        <input
          type="text"
          className={styles.search}
          placeholder="Search items and brands"
        />

        <div className={styles.navGroup}>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
