import React from "react";

const CardProfile = ({ data, id }) => {
  return (
    <div className="profile">
      <img src={data?.[id].url} alt="gsdfg" className="profile__upper__photo" />
      <div className="profile__block">
        <div className="profile__block__img">
          <img
            src={data?.[id].url}
            alt="fasdf"
            className="profile__block__img__img"
          />
        </div>
        <div className="profile__block__text">
          <div className="profile__block__text__name">
            <h1>{data?.[id].name}</h1>
          </div>
          <div className="profile__block__text__sity">
            <h1>{data?.[id].sity}</h1>
          </div>
          <div className="profile__block__text__about">
            <h1>{data?.[id].about}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
