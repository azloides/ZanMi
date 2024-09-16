import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import cl from "./Buttond.module.scss";

export enum ButtonTheme {
  LIKE = "like",
  REGISTRATIONBORDER = "registrationborder",
}

export enum ButtonSize {
  S = "small",
  M = "midle",
  L = "large",
}

export enum ButtonSizeLike {
  S = "smallLike",
  M = "midleLike",
  L = "largeLike",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  theme: ButtonTheme;
  size?: ButtonSize;
  sizeLike?: ButtonSizeLike;
  moveClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, theme, size, sizeLike, moveClick, ...otherProps } = props;

  return (
    <button
      className={classNames({
        [cl[theme]]: true,
        [cl[size]]: true,
        [cl[sizeLike]]: true,
      })}
      {...otherProps}
      onClick={moveClick}
    >
      {children}
    </button>
  );
};

export default Button;
