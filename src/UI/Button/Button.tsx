import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import cl from "./Buttond.module.scss";

export enum ButtonTheme {
  default = "default",
}

export enum ButtonSize {
  S = "small",
  M = "middle",
  L = "large",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  theme: ButtonTheme;
  size?: ButtonSize;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  const { children, theme, size, onClick, ...otherProps } = props;

  return (
    <button
      className={classNames({
        [cl[theme]]: true,
        [cl[size]]: true,
      })}
      {...otherProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
