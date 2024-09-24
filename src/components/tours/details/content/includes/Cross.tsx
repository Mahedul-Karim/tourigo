import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Cross = () => {
  return (
    <div className="flex gap-2">
      <span className="size-[18px] xs:size-[20px] flex items-center justify-center bg-red-0 text-red-1 rounded-full shrink-0">
        <RxCross2 className="text-[10px] xs:text-xs" />
      </span>
      <p className="text-dark-1 text-[11px] xs:text-[13px]">
        Beverages, drinking water, morning tea and buffet lunch
      </p>
    </div>
  )
}

export default Cross