"use client";
import Ratings from "@/components/common/ui/Ratings";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  label: string;
  value: string | number;
  index: number;
  isRating?:boolean;
}

const CheckMark: React.FC<Props> = ({ label, value, index,isRating=false }) => {
  return (
    <div className="flex items-center gap-2 relative">
      <input
        type="checkbox"
        id={`${value}-${index}`}
        value={value}
        className="size-8 border border-solid border-dark-1 opacity-0 absolute"
      />
      <div className="size-[12px] xs:size-[14px] border border-solid border-dark-1 flex items-center justify-center rounded-sm cursor-pointer">
        <IoIosCheckmark className="text-4xl transition-all duration-500 text-white  scale-0" />
      </div>
      <label htmlFor={`${value}-${index}`} className="text-dark-1 text-xs xs:text-sm cursor-pointer">
        {!isRating ? label : <Ratings rating={Number(value)} styles="text-base xs:text-lg"/>}
      </label>
    </div>
  );
};

export default CheckMark;
