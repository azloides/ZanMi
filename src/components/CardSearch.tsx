import React from "react";
import Like, { LikeSize } from "../UI/Like/Like";
import { increment, decrement } from "../store/slices/indexSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import hearth from "../components/img/klipartz.com.png";
import breakhearth from "../components/img/brakeheart.png";
import Button, { ButtonSize, ButtonTheme } from "../UI/Button/Button";
import { useNavigate } from "react-router-dom";
import { getIndex } from "../store/selectors/indexSelector";

const CardSearch = ({ data, isLocalCount }) => {
  const dispatch = useAppDispatch();
  const router = useNavigate();
  const currentIndex = useAppSelector(getIndex);

  function incrementIndex() {
    dispatch(increment());
  }

  function decrementIndex() {
    dispatch(decrement());
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

export default CardSearch;
