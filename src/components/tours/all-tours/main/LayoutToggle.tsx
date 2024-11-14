'use client'

import React from "react";
import { CiGrid41, CiCircleList } from "react-icons/ci";

interface Props {
  type: string;
  setType?: (str: string) => void;
}

const LayoutToggle: React.FC<Props> = ({ type, setType }) => {
  return (
    <div className="flex items-center border border-solid gap-1 p-1 bg-lighter  rounded-md">
      <button
        className={`text-lg xs:text-xl p-1 rounded-md ${
          type === "grid" && "bg-primary text-white"
        }`}
        onClick={() =>setType && setType("grid")}
      >
        <CiGrid41 />
      </button>
      <button
        className={`text-lg xs:text-xl  p-1 rounded-md ${
          type === "list" && "bg-primary text-white"
        }`}
        onClick={() =>setType && setType("list")}
      >
        <CiCircleList />
      </button>
    </div>
  );
};

export default LayoutToggle;
