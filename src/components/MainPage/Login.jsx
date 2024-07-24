import React from "react";

import logo from "../img/a7e6db56-a413-4874-8eb2-a85012ecd73c.png";

const Login = () => {
  return (
    <div className="login-block">
      <div className="login-block__content1__animated-text">
        <h1 className="login-block__animated-text">
          <strong>ZanMi</strong> - лучший сайт для нахождения пары в твоём
          городе!
        </h1>
      </div>
      <div className="login-block__content2__block-with-logo">
        <img src={logo} alt="Тут должно быть фото, но тебе не повезло:(((" />
        <div className="login-block__content2__text">
          <h1>Мы за настоящие и искренние свидания.</h1>
          <h2>
            Наш сайт поможет подобрать тебе человека, <br /> с наилучшими
            сходствами с тобой
          </h2>
          <h2>Присойдиняйся и убедись в этом сам!</h2>
          <button>Регистрация</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
