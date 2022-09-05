import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../styles/header.module.css";

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    router.push({
      pathname: `search/${searchTerm}`,
    });

    setSearchTerm("");
  };

  return (
    <header className={styles.header}>
      <ul>
        <li className={styles.logo}>
          <Link href="/">
            <a>Mimi</a>
          </Link>
        </li>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.search}
            placeholder="Search items and brands"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </form>

        <div className={styles.headerGroup}>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
            <button></button>
          </li>
        </div>
        {/* <div className={styles} */}
      </ul>
    </header>
  );
};

export default Header;
