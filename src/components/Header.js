import React from "react";

import style from "../styles/components/header.module.scss";

const Header = props => (
  <header className={style.header}>
    <div className={style.container}>
      <div className={style.title}>{props.title}</div>
      <nav className={style.nav}>
        <li className={style.navItem}>Home</li>
        <li className={style.navItem}>About</li>
        <li className={style.navItem}>Contact</li>
      </nav>
    </div>
  </header>
);

export default Header;
