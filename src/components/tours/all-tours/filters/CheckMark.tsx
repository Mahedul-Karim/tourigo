"use client";
import Ratings from "@/components/common/ui/Ratings";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  label: string;
  value: string | number;
  index: number;
  isRating?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  type?: string;
  name?: string;
}

const CheckMark: React.FC<Props> = ({
  label,
  value,
  index,
  isRating = false,
  onChange,
  checked,
  type = "checkbox",
  name,
}) => {
  return (
    <div className="flex items-center gap-2 relative">
      <input
        type={type}
        id={`${value}-${index}`}
        value={value}
        className="size-8 border border-solid border-dark-1 opacity-0 absolute"
        onChange={onChange}
        {...(checked && { checked })}
        {...(name && { name })}
      />
      <div className={`size-[12px] xs:size-[14px] border border-solid border-dark-1 flex items-center justify-center rounded-sm cursor-pointer ${checked && 'bg-primary border-primary'}`}>
        <IoIosCheckmark className={`text-4xl transition-all duration-500 text-white   ${checked ? 'scale-[1.5]' : 'scale-0'}`} />
      </div>
      <label
        htmlFor={`${value}-${index}`}
        className="text-dark-1 text-xs xs:text-sm cursor-pointer"
      >
        {!isRating ? (
          label
        ) : (
          <Ratings rating={Number(value)} styles="text-base xs:text-lg" color="text-primary" />
        )}
      </label>
    </div>
  );
};

export default CheckMark;
