import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";

interface Props {
  label: string;
  guestNumber: number;
  onIncrease: () => void;
  onDecrese: () => void;
}

const TotalGuest: React.FC<Props> = ({
  label,
  guestNumber,
  onIncrease,
  onDecrese,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center text-[12px] xs:text-[13px] text-dark-1 gap-1">
        <p>{label}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="size-[22px] xs:size-[25px] grid place-items-center border border-solid border-[#e7e6e6] text-[8px] xs:text-[10px] rounded-full"
          onClick={onDecrese}
        >
          <FaMinus />
        </button>
        <p className="size-[22px] xs:size-[25px] text-xs xs:text-sm flex items-center justify-center">
          {guestNumber}
        </p>
        <button
          className="size-[22px] xs:size-[25px] grid place-items-center border border-solid border-[#e7e6e6] text-[8px] xs:text-[10px] rounded-full"
          onClick={onIncrease}
        >
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default TotalGuest;
