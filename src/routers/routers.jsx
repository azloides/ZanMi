import React from "react";
import DatingSearchPage from "../pages/DatingSearchPage";
import Zanmi from "../pages/Zanmi";
import Profile from "../pages/Profile";

export const routers = [
  {
    path: "/login",
    element: <DatingSearchPage />,
    exact: true,
  },
  {
    path: "/zanmi",
    element: <Zanmi />,
    exact: true,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
    exact: true,
  },
];
