import React from "react";
import MyButton from "../../UI/MyButton/MyButton";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="background__navbar">
      <div className="link__block">
        <Link to="login" className="link">
          Странциа регистрации
        </Link>
        <Link to="main" className="link">
          Главная страница
        </Link>
      </div>
      <div className="link__btn">
        <MyButton>Регистрация</MyButton>
        <MyButton>Войти</MyButton>
      </div>
    </div>
  );
};

export default Navbar;
