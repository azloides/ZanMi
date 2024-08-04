import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__content__left-btn">
        <Link to="login" className="navbar__link">
          Странциа регистрации
        </Link>
        <Link to="zanmi" className="navbar__link">
          Главная страница
        </Link>
      </div>
      <div className="navbar__content__right-btn">
        <MyButton>Регистрация</MyButton>
        <MyButton>Войти</MyButton>
      </div>
    </nav>
  );
};

export default Navbar;
