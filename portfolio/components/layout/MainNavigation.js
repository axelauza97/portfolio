import Link from "next/link";

import classes from "./MainNavigation.module.css";
import { useState } from "react";

function MainNavigation() {
  const [menu, setMenu] = useState("");
  const onMenuToggle = (event) => {
    if (menu === classes.active) {
      setMenu("");
    } else {
      setMenu(classes.active);
    }
  };
  return (
    <header className={classes.navWrap}>
      <div>
        <div>Axel Auza A</div>
        <div>Software Engineer</div>
      </div>

      <nav className={`${classes.nav} ${menu}`}>
        <ul>
          <li>About</li>
          <li>Experience</li>
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
