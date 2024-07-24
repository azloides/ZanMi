import React, { useEffect, useState } from "react";

import hearth from "../img/klipartz.com.png";

import breakhearth from "../img/brakeheart.png";

import { useFetching } from "../hooks/useFetching";

import UserService from "../../API/UserServise";

import Loader from "../../UI/Loader/Loader";

import MyButtonLike from "../../UI/MyButton/MyButtonLike/MyButtonLike";

const Zanmi = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);
  const [fetchPost, isLoaderPost, postEror] = useFetching(async () => {
    const response = await UserService.getAll();
    setUsers(response.data);
  });

  useEffect(() => {
    setTimeout(() => {
      fetchPost();
    }, "3000");
  }, []);

  return (
    <div className="main">
      {isLoaderPost || index >= users.length ? (
        <div className="main__loader">
          <Loader />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Zanmi;
