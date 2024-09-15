import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const H2: React.FC<Props> = ({ children, className }) => {
  return (
    <h2
      className={`text-lg xs:text-2xl sm:text-4xl font-bold text-dark-1 ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
