import React from "react";

interface Props {
  children: React.ReactNode;
}

const Heading: React.FC<Props> = ({ children }) => {
  return (
    <h3 className="text-dark-1 text-xl xs:text-2xl font-bold">{children}</h3>
  );
};

export default Heading;
