import { cn } from "@/lib/utils";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`${className} max-w-[1200px] w-11/12 mx-auto`}>
      {children}
    </div>
  );
};

export default Container;
