import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

const TotalGuest = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-[12px] xs:text-[13px] text-dark-1 gap-1">
        <p>Adult (18+years)</p>
        <span className="font-medium">$180</span>
      </div>
      <div className="flex items-center gap-2">
        <button className="size-[22px] xs:size-[25px] grid place-items-center border border-solid border-[#e7e6e6] text-[8px] xs:text-[10px] rounded-full">
          <FaMinus />
        </button>
        <p className="size-[22px] xs:size-[25px] text-xs xs:text-sm flex items-center justify-center">
          20
        </p>
        <button className="size-[22px] xs:size-[25px] grid place-items-center border border-solid border-[#e7e6e6] text-[8px] xs:text-[10px] rounded-full">
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default TotalGuest;
