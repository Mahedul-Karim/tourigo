import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  backgroundColor: string;
  textColor: string;
}

const Badge: React.FC<Props> = ({
  children,
  backgroundColor,
  textColor,
  className,
}) => {
  return (
    <span
      className={`flex items-center justify-center font-semibold w-fit px-4 rounded-full py-1 uppercase text-[11px]  whitespace-nowrap max-w-full ${className}`}
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
