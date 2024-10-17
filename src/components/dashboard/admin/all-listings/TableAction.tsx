"use client";

import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const TableAction = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setOpen((prev) => !prev)}>
        <BsThreeDotsVertical className="text-lg" />
      </button>
      {open && (
        <div className="absolute top-3 left-[-120px] bg-white border-border border-solid border rounded-md flex flex-col text-sm text-dark-0 font-medium z-[10]">
          <div className="py-2 px-4 border-b border-solid border-border hover:bg-background cursor-pointer flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="text-base" /> Approve
          </div>
          <div className="py-2 px-4 hover:bg-background cursor-pointer flex items-center gap-2">
            <RxCross2 className="text-base" />
            Decline
          </div>
        </div>
      )}
    </div>
  );
};

export default TableAction;
