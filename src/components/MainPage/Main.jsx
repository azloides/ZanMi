import React, { useEffect, useState } from "react";
import hearth from "../img/klipartz.com.png";
import breakhearth from "../img/brakeheart.png";
import { useFetching } from "../hooks/useFetching";
import UserService from "../../API/UserServise";
import Loader from "../../UI/Loader/Loader";
const Main = () => {
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
  if (index >= users.length) {
    return (
      <div className="loader_end">
        <Loader />
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center" }} className="mainPage__all">
      {isLoaderPost ? (
        <div className="loader_block">
          <Loader />
        </div>
      ) : (
        <div className="all__block__img">
          <button
            className="btn__like_dislike"
            onClick={() => setIndex(index + 1)}
          >
            <img className="hearth" src={breakhearth} alt="" />
          </button>
          <div className="block__img">
            <img className="post__img" src={users[index]?.url} alt="рапр" />
          </div>
          <button
            className="btn__like_dislike"
            onClick={() => setIndex(index + 1)}
          >
            <img className="hearth" src={hearth} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Main;
