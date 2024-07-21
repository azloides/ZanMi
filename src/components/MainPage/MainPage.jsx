import React from "react";
import logo from "../img/a7e6db56-a413-4874-8eb2-a85012ecd73c.png";
const MainPage = () => {
  return (
    <div className="mainPageBackfround">
      <div className="blockText">
        <h1 className="animated-text">
          <strong>ZanMi</strong> - лучший сайт для нахождения пары в твоём
          городе!
        </h1>
      </div>
      <div className="blockLogo">
        <img src={logo} alt="" />
        <div className="blockLogo__text">
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

export default MainPage;
