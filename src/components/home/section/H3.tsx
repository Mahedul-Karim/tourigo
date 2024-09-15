import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const H3: React.FC<Props> = ({ children, className }) => {
  return (
    <h3
      className={`text-sm xs:text-lg sm:text-xl text-secondary font-medium ${className}`}
    >
      {children}
    </h3>
  );
};

export default H3;
