import React from "react";
import { useSelector } from "react-redux";
import { getProgileByIndex } from "../store/selectors/profile";

const Profile = () => {
  const user = useSelector(getProgileByIndex);

  return <div></div>;
};

export default Profile;
