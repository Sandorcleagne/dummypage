import React from "react";
import Link from "next/link";
import styles from "../../styles/NavBar.module.scss";
import { navData } from "../../constants/NavbarData";
const NavBar = () => {
  return (
    <nav className={styles.Navbarcontainer}>
      <div className={styles.logo}>{navData.pageTitle}</div>
      <div className={styles.menuitemcontainer}>
        {navData.icons.map((items, index) => {
          return (
            <ul key={index}>
              <li>
                <Link href="/">{items.imgUrl}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
