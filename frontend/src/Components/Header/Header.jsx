import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
        <div className={classes.HeaderContent}>
            <div><p>Главная</p></div>
            <div><p>О нас</p></div>
            <div><p>Связаться</p></div>
            <div><p>Войти</p></div>
        </div>
    </header>
  );
}

export default Header;