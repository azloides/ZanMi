import React from "react";
import { IId } from "../types/types";
import { useUsers } from "./API/users.service";
import Loader from "../UI/Loader/Loader";
import { useParams } from "react-router-dom";
import CardProfile from "../components/CardProfile";

const Profile = () => {
  const { data, isLoading } = useUsers(null);
  const { id } = useParams<IId>();

  if (isLoading) {
    return (
      <div className="main__loader">
        <Loader />
      </div>
    );
  }

  if (!id) {
    return <div>No ID available</div>;
  }

  return (
    <div>
      <CardProfile data={data} id={id} />
    </div>
  );
};

export default Profile;
