"use client";
import React,{memo} from "react";
import { TiStarFullOutline } from "react-icons/ti";

interface Props {
  label: string;
  value: number;
  setValue: (val: number) => void;
}

const StarRating: React.FC<Props> = ({ label, value, setValue }) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-dark-1 text-xs xs:text-sm">{label}:</p>
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((rat) => (
          <span
            key={rat}
            className={`${
              rat <= value ? "text-yellow-500" : "text-gray-400"
            } cursor-pointer text-sm xs:text-base`}
            onClick={() => setValue(rat)}
          >
            <TiStarFullOutline />
          </span>
        ))}
      </div>
    </div>
  );
};

export default memo(StarRating);
