import React from "react";
import { getIndex, getProfileByIndex } from "../store/selectors/indexSelector";
import { useSelector } from "react-redux";
import { StateSchema } from "../store/config/stateSchema";
import { useAppSelector } from "../store/hooks/hooks";

const Profile = () => {
  const currentIndex = useAppSelector(getIndex);
  const user = useSelector((state: StateSchema) =>
    currentIndex !== undefined ? getProfileByIndex(state, currentIndex) : null
  );

  return (
    <div>
      <h1>Привет говно {user?.name}</h1>
      <img src={user?.url} alt="" />
    </div>
  );
};

export default Profile;
