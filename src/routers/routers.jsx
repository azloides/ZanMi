import React from "react";
import Login from "../pages/Login";
import Zanmi from "../pages/Zanmi";

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
