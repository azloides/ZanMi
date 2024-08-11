import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonTheme } from "../../UI/Button/Button";

const Navbar = () => {
  const router = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__content__left-btn">
        <Button theme={ButtonTheme.MOVEPAGE} moveClick={() => router("login")}>
          Странциа регистрации
        </Button>
        <Button theme={ButtonTheme.MOVEPAGE} moveClick={() => router("zanmi")}>
          Главная страница
        </Button>
      </div>
      <div className="navbar__content__right-btn">
        <Button theme={ButtonTheme.REGISTRATIONEASY}>Регистрация</Button>
        <Button theme={ButtonTheme.REGISTRATIONEASY}>Войти</Button>
      </div>
    </nav>
  );
};

export default Navbar;
