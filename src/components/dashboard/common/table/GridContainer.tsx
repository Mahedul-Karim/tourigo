import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const GridContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={`border border-solid border-border overflow-x-auto horizontalScrollbar rounded-md mt-6  ${className}`}
      id="table"
    >
      {children}
    </div>
  );
};

export default GridContainer;
