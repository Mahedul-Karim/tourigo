import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  columns?: string;
}

const Grid: React.FC<Props> = ({
  children,
  className,
  columns = "80px 0.9fr 0.2fr 0.3fr 0.2fr 0.2fr",
}) => {
  return (
    <div
      className={`grid w-[890px] [&]:last:border-b-0 [&]:border-b [&]:border-solid [&]:border-border ${className} p-2 gap-4`}
      style={{
        gridTemplateColumns: columns,
      }}
    >
      {children}
    </div>
  );
};

export default Grid;
