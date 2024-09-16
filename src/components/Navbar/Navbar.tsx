import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button, { ButtonSize, ButtonTheme } from "../../UI/Button/Button";

const Navbar = () => {
  const router = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__content__left-btn">
        <Button
          theme={ButtonTheme.REGISTRATIONBORDER}
          size={ButtonSize.M}
          moveClick={() => router("login")}
        >
          Странциа регистрации
        </Button>
        <Button
          theme={ButtonTheme.REGISTRATIONBORDER}
          size={ButtonSize.M}
          moveClick={() => router("zanmi")}
        >
          Главная страница
        </Button>
      </div>
      <div className="navbar__content__right-btn">
        <Button theme={ButtonTheme.REGISTRATIONBORDER} size={ButtonSize.M}>
          Регистрация
        </Button>
        <Button theme={ButtonTheme.REGISTRATIONBORDER} size={ButtonSize.M}>
          Войти
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
