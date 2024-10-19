import React, { useState } from "react";

import './Button.css';

interface ButtonProps {
  name?: string;
  variant?: "blue" | "red" | "green" | "transparent";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  full?: boolean
}

export const Button = ({
  name,
  variant = "blue",
  onClick,
  type = "button",
  disabled,
  full
}: ButtonProps) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const buttonClasses = [
    'button',
    `button--${variant}`,
    full ? 'button--full' : '',
    isHovered ? 'button--hovered' : '',
    isActive ? 'button--active' : '',
    disabled ? 'button--disabled' : '',
  ].join(' ');

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {name}
    </button>
  );
};
