import React, { useEffect, useState } from "react";
import hearth from "../components/img/klipartz.com.png";
import breakhearth from "../components/img/brakeheart.png";
import Loader from "../UI/Loader/Loader";
import Button, { ButtonTheme } from "../UI/Button/Button";
import { useUsers } from "./API/users.service";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getIndex } from "../store/selectors/indexSelector";
import { increment, decrement } from "../store/slices/indexSlice";

const Zanmi = () => {
  const { data, isLoading } = useUsers(null);
  const currentIndex = useAppSelector(getIndex);
  const dispatch = useAppDispatch();

  function incrementIndex() {
    dispatch(increment());
  }

  function decrementIndex() {
    dispatch(decrement());
  }

  if (isLoading) {
    return (
      <div className="main__loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="main__content1">
        <Button theme={ButtonTheme.LIKE} moveClick={decrementIndex}>
          <img
            className="hearth"
            src={breakhearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </Button>
        <div className="main__block-img">
          <img
            className="main__img"
            src={data?.[currentIndex]?.url}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </div>
        <Button theme={ButtonTheme.LIKE} moveClick={incrementIndex}>
          <img
            className="hearth"
            src={hearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </Button>
      </div>
      )
    </div>
  );
};

export default Zanmi;
