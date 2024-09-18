import React, { useEffect, useState } from "react";
import hearth from "../components/img/klipartz.com.png";
import breakhearth from "../components/img/brakeheart.png";
import Loader from "../UI/Loader/Loader";
import Button, { ButtonSize, ButtonTheme } from "../UI/Button/Button";
import { useUsers } from "./API/users.service";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getIndex } from "../store/selectors/indexSelector";
import { increment, decrement, saveIndex } from "../store/slices/indexSlice";
import { useNavigate } from "react-router-dom";
import { getFromLocal } from "../lib/localStorage";
import { setUsersData } from "../store/slices/usersSlice";
import Like, { LikeSize } from "../UI/Like/Like";

const Zanmi = () => {
  const { data, isLoading } = useUsers(null);
  const currentIndex = useAppSelector(getIndex);
  const dispatch = useAppDispatch();
  const isLocalUserData = getFromLocal("localUserData");
  const isLocalCount = getFromLocal("count");

  useEffect(() => {
    if (!isLocalUserData && data) {
      dispatch(setUsersData(data));
    } else {
      dispatch(setUsersData(isLocalUserData));
    }
  }, [dispatch, data]);

  useEffect(() => {
    if (!isLocalCount && currentIndex) {
      dispatch(saveIndex(currentIndex));
    } else {
      dispatch(saveIndex(isLocalCount));
    }
  }, [dispatch, currentIndex]);

  function incrementIndex() {
    dispatch(increment());
  }

  function decrementIndex() {
    dispatch(decrement());
  }

  const router = useNavigate();

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
        <Like size={LikeSize.M} onClick={decrementIndex}>
          <img
            className="hearth"
            src={breakhearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </Like>
        <div className="main__block-img">
          <img
            className="main__img"
            src={data?.[isLocalCount]?.url}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </div>
        <Like size={LikeSize.M} onClick={incrementIndex}>
          <img
            className="hearth"
            src={hearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </Like>
      </div>
      <Button
        size={ButtonSize.L}
        theme={ButtonTheme.default}
        onClick={() => router(`/profile/${currentIndex}`, { replace: true })}
      >
        Профиль
      </Button>
    </div>
  );
};

export default Zanmi;
