import React from "react";
import classes from "./MyButtonLike.module.css";
const MyButtonLike = ({ children, ...props }) => {
  return (
    <button {...props} className={classes.myBtnLike}>
      {children}
    </button>
  );
};

export default MyButtonLike;
