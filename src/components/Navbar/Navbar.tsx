import React from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonSize, ButtonTheme } from "../../UI/Button/Button";

const Navbar = () => {
  const router = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__content__left-btn">
        <Button
          theme={ButtonTheme.default}
          size={ButtonSize.M}
          onClick={() => router("login")}
        >
          Странциа регистрации
        </Button>
        <Button
          theme={ButtonTheme.default}
          size={ButtonSize.M}
          onClick={() => router("zanmi")}
        >
          Главная страница
        </Button>
      </div>
      <div className="navbar__content__right-btn">
        <Button theme={ButtonTheme.default} size={ButtonSize.M}>
          Регистрация
        </Button>
        <Button theme={ButtonTheme.default} size={ButtonSize.M}>
          Войти
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
