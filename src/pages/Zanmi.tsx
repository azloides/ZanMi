import React, { useEffect, useState } from "react";
import Loader from "../UI/Loader/Loader";
import { useUsers } from "./API/users.service";
import { useAppDispatch, useAppSelector } from "../store/hooks/hooks";
import { getIndex } from "../store/selectors/indexSelector";
import { saveIndex } from "../store/slices/indexSlice";
import { getFromLocal } from "../lib/localStorage";
import { setUsersData } from "../store/slices/usersSlice";
import CardSearch from "../components/CardSearch";

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

  if (isLoading) {
    return (
      <div className="main__loader">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <CardSearch data={data} isLocalCount={isLocalCount} />
    </div>
  );
};

export default Zanmi;
