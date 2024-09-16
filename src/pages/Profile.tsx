import React from "react";
import { useSelector } from "react-redux";
import { getProgileByIndex } from "../store/selectors/profileByIndexSelector";

const Profile = () => {
  const user = useSelector(getProgileByIndex);

  return (
    <div>
      <h1>Привет говно {user?.name}</h1>
      <img src={user?.url} alt="" />
    </div>
  );
};

export default Profile;
