"use client";

import DotMenu from "@/components/common/DotMenu";
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
        <DotMenu>
          <div className="hover:bg-background cursor-pointer flex items-center gap-2">
            <IoMdCheckmarkCircleOutline className="text-base" /> Approve
          </div>
          <div className="hover:bg-background cursor-pointer flex items-center gap-2">
            <RxCross2 className="text-base" />
            Decline
          </div>
        </DotMenu>
      )}
    </div>
  );
};

export default TableAction;
