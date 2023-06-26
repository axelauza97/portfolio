import Link from "next/link";

import classes from "./MainNavigation.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

function MainNavigation() {
  const [menu, setMenu] = useState("");
  const onMenuToggle = (event) => {
    if (menu === classes.active) {
      setMenu("");
    } else {
      setMenu(classes.active);
    }
  };
  const router = useRouter();

  const closeMenu = (event) => {
    setMenu("");
  };
  return (
    <header className={classes.navWrap}>
      <div>
        <Link className={classes.navButton} href="/" onClick={closeMenu}>
          <div>Axel Auza A</div>
          <div>Software Engineer</div>
        </Link>
      </div>

      <nav className={`${classes.nav} ${menu}`}>
        <ul>
          <li
            onClick={closeMenu}
            className={router.pathname == "/about" ? classes.active : ""}
          >
            <Link className={classes.navButton} href="/about">
              About
            </Link>
          </li>
          <li onClick={closeMenu}>
            <Link className={classes.navButton} href="/experience">
              Experience
            </Link>
          </li>
        </ul>
      </nav>
      <div className={`${classes.hamburger} ${menu}`} onClick={onMenuToggle}>
        <span className={classes.bar}> </span>
        <span className={classes.bar}> </span>
        <span className={classes.bar}> </span>
      </div>
    </header>
  );
}

export default MainNavigation;
