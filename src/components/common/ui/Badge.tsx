import React from "react";

interface Props {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}



const Badge: React.FC<Props> = ({ children, backgroundColor, textColor }) => {
  return (
    <span
      className={`flex items-center justify-center font-semibold w-fit px-4 rounded-full py-1 uppercase text-[11px]  whitespace-nowrap max-w-full`}
      style={{
        backgroundColor,
        color: textColor,
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
