import classNames from "classnames";
import React, { ButtonHTMLAttributes } from "react";
import cl from "./Like.module.scss";

export enum LikeSize {
  S = "smallLike",
  M = "middleLike",
  L = "largeLike",
}

interface LikeProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size: LikeSize;
  onClick?: () => void;
}

const Like = (props: LikeProps) => {
  const { children, size, onClick, ...otherProps } = props;

  return (
    <button
      className={classNames(cl.like, {
        [cl[size]]: true,
      })}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Like;
