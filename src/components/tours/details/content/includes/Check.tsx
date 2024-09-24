import React from "react";

import { FaCheck } from "react-icons/fa6";

const Check = () => {
  return (
    <div className="flex gap-2">
      <span className="size-[18px] xs:size-[20px] flex items-center justify-center bg-green-0 text-green-1 rounded-full shrink-0">
        <FaCheck className="text-[10px] xs:text-xs" />
      </span>
      <p className="text-dark-1 text-[11px] xs:text-[13px]">
        Beverages, drinking water, morning tea and buffet lunch
      </p>
    </div>
  );
};

export default Check;
