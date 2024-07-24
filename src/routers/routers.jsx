import React from "react";
import Login from "../components/MainPage/Login";
import Zanmi from "../components/MainPage/Zanmi";

export const routers = [
  {
    path: "/login",
    element: <Login />,
    exact: true,
  },
  {
    path: "/zanmi",
    element: <Zanmi />,
    exact: true,
  },
];
