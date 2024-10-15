import React, { useState } from "react";

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
  disabled = false,
  full
}: ButtonProps) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        backgroundColor: variant,
        color: variant === 'transparent'  ? 'black' : 'white',
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        width: full ? '100%' :  'auto',
        cursor: "pointer",
        marginRight: full ? "" : "5px",
        marginLeft: full ? "" :"5px",
        transform: isActive ? 'translateY(0)' : isHovered ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'transform 0.1s, background-color 0.1s',
      }}
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
