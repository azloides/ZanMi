import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import classes from "./Button.module.css";

export enum ButtonTheme {
  LIKE = "like",
  MOVEPAGE = "movepage",
  REGISTRATIONBORDER = "registrationborder",
  REGISTRATIONEASY = "registrationeasy",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  theme: ButtonTheme;
  moveClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, theme, moveClick, ...otherProps } = props;

  return (
    <button
      className={classNames({
        [classes[theme]]: true,
      })}
      onClick={moveClick}
    >
      {children}
    </button>
  );
};

export default Button;
