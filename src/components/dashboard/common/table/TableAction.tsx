"use client";

import React from "react";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";

const TableAction = () => {
  return (
    <div className="flex items-center justify-center gap-4 relative">
      <button>
        <GoPencil className="text-xl" />
      </button>
      <button>
        <FiTrash className="text-xl" />
      </button>
      
    </div>
  );
};

export default TableAction;
