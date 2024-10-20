"use client";

import React, { useState } from "react";
import DotMenu from "@/components/common/DotMenu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdBlock } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const UserAction = () => {
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
          <div className="hover:bg-background cursor-pointer flex items-center gap-2">
            <MdBlock className="text-base" /> Block
          </div>
          <div className="hover:bg-background cursor-pointer flex items-center gap-2">
            <FiTrash className="text-base" /> Delete
          </div>
        </DotMenu>
      )}
    </div>
  );
};

export default UserAction;
