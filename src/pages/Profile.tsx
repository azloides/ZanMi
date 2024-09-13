import React from "react";
import { getIndex, getProfileByIndex } from "../store/selectors/indexSelector";
import { useSelector } from "react-redux";
import { StateSchema } from "../store/config/stateSchema";
import { useAppSelector } from "../store/hooks/hooks";

const Profile = () => {
  const user = useSelector(getProfileByIndex);

  return (
    <div>
      <h1>Привет говно {user?.name}</h1>
      <img src={user?.url} alt="" />
    </div>
  );
};

export default Profile;
