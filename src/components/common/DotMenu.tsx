import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  left?: string | number;
  top?: string | number;
}

const DotMenu: React.FC<Props> = ({
  children,
  left = -120,
  top = 12,
  className,
}) => {
  return (
    <div
      className={`absolute ${className} bg-white border-border border-solid border rounded-md flex flex-col text-sm text-dark-0 font-medium z-[10] [&>*]:py-2 [&>*]:px-4`}
      id="dotMenu"
      style={{ left: `${left}px`, top: `${top}px` }}
    >
      {children}
    </div>
  );
};

export default DotMenu;
