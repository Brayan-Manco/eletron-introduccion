import React from "react";

interface ButtonProps {
  name?: string;
  variant?: "blue" | "red" | "green";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  name,
  variant = "blue",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      style={{
        backgroundColor: variant,
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        marginRight: "5px",
        marginLeft: "5px"
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
