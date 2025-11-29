// "use client";

import css from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={css.header}>
      <div className="wrapper">
        <div className={css.headerConteiner}>
          <Link href="/" className={css.logo}></Link>
          <nav aria-label="Main Navigation">
            <ul className={css.navigation}>
              <li>
                <Link href="/" className={css.navigationItemColor}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/catalog">Catalog</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
