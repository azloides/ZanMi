import React from "react";

import { Routes, Route, Navigate } from "react-router-dom";

import { routers } from "../../routers/routers";

const AppRouter = () => {
  return (
    <Routes>
      {routers.map((router, index) => (
        <Route
          path={router.path}
          element={router.element}
          exact={router.exact}
          key={index}
        />
      ))}
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default AppRouter;
