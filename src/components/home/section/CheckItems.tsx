import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  children: React.ReactNode;
}

const CheckItems: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="size-4 xs:size-6 bg-secondary flex items-center justify-center text-white rounded-full">
        <IoIosCheckmark className="text-xl" />{" "}
      </p>
      <p className="sm:text-base text-xs xs:text-sm">{children}</p>
    </div>
  );
};

export default CheckItems;
