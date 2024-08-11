import React from "react";
import DatingSearchPage from "../pages/DatingSearchPage";
import Zanmi from "../pages/Zanmi";

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
];
