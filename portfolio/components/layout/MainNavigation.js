import Link from "next/link";

import classes from "./MainNavigation.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { disableScroll, enableScroll } from "@/utils/scroll";

function MainNavigation() {
  const [menu, setMenu] = useState("");
  const router = useRouter();
  const onMenuToggle = (event) => {
    if (menu === classes.active) {
      setMenu("");
    } else {
      setMenu(classes.active);
    }
  };
  const closeMenu = (event) => {
    setMenu("");
  };
  useEffect(() => {
    if (menu === classes.active) {
      disableScroll();
    } else {
      enableScroll();
    }
  }, [menu, setMenu]);
  return (
    <header className={classes.navWrap}>
      <div>
        <Link className={classes.navButton} href="/" onClick={closeMenu}>
          Axel Auza A<br />
          Software Engineer
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
          <li
            onClick={closeMenu}
            className={router.pathname == "/experience" ? classes.active : ""}
          >
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
