import React from "react";
import { FaCheck } from "react-icons/fa";

interface Props{
  onClick:()=>void;
  isLoading:boolean;
}

const TableAction:React.FC<Props> = ({onClick,isLoading}) => {
  return (
    <div>
      <button onClick={onClick} disabled={isLoading} className="disabled:text-zinc-300">
        <FaCheck />
      </button>
    </div>
  );
};

export default TableAction;
