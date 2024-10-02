import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Section: React.FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`px-6 py-4 bg-white rounded-xl border border-solid border-border ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
