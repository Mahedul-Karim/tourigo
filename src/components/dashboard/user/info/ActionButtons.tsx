"use client";

import ConfirmationModal from "@/components/common/ui/modal/ConfirmationModal";
import React, { useState } from "react";
import { IoExitOutline } from "react-icons/io5";

const ActionButtons = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <button onClick={setOpen.bind(null, true)}>
        <IoExitOutline className="text-xl xs:text-2xl text-dark-1" />
      </button>
      {open && (
        <ConfirmationModal
          title="Are you sure want to logout?"
          onModalClose={setOpen}
          onModalAction={() => console.log("Hello")}
        />
      )}
    </div>
  );
};

export default ActionButtons;
