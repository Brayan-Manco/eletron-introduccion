import React from 'react';
import './Heading.css';

interface HeadingProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; 
}

export const Heading = ({ title, level = 1 }: HeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag className="heading-component">
      {title}
    </HeadingTag>
  );
};
