import React from "react";
import MainPage from "../components/MainPage/MainPage";
import Main from "../components/MainPage/Main";

export const routers = [
  {
    path: "/login",
    element: <MainPage />,
    exact: true,
  },
  {
    path: "/main",
    element: <Main />,
    exact: true,
  },
];
