import React, { useEffect, useState } from "react";
import hearth from "../components/img/klipartz.com.png";
import breakhearth from "../components/img/brakeheart.png";
import { useFetching } from "../components/hooks/useFetching";
import UserService from "../API/UserServise";
import Loader from "../UI/Loader/Loader";
import MyButtonLike from "../UI/MyButton/MyButtonLike/MyButtonLike";
import { IUser } from "../types/types";

const Zanmi = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [fetchPost, isLoaderPost, postEror] = useFetching(async () => {
    const response = await UserService.getAll();
    setUsers(response.data);
  });

  useEffect(() => {
    setTimeout(() => {
      fetchPost();
    }, "3000");
  }, []);

  if (isLoaderPost || index >= users.length) {
    return (
      <div className="main__loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className="main">
      <div className="main__content1">
        <MyButtonLike onClick={() => setIndex(index + 1)}>
          <img
            className="hearth"
            src={breakhearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </MyButtonLike>
        <div className="main__block-img">
          <img
            className="main__img"
            src={users[index]?.url}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </div>
        <MyButtonLike onClick={() => setIndex(index + 1)}>
          <img
            className="hearth"
            src={hearth}
            alt="Тут должно быть фото, но тебе не повезло:((("
          />
        </MyButtonLike>
      </div>
      )
    </div>
  );
};

export default Zanmi;
