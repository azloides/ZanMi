import React from "react";

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  children: React.ReactNode;
  handClick?: () => void;
  style?: string;
  type?: ButtonType;
  title?: string;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props?.handClick}
      className="${props.style} all-button"
      type={props?.type}
      title={props.title}
      disabled={props?.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
