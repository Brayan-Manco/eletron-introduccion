import React from 'react';

interface IconProps {
  icon: React.ReactNode;
  size?: number;
  color?: string; 
  className?: string;
}

export const Icon = ({ icon, size = 24, color = "currentColor", className = "" }: IconProps) => {
  return (
    <span className={`icon ${className}`} style={{ width: size, height: size }}>
      {icon ? (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={color}
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
      ) : null}
    </span>
  );
};

