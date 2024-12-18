import React from "react";
import { FaRegStar } from "react-icons/fa";

interface Props {
  totalReviews: number;
  label: number;
  value: number;
}

const ReviewBar: React.FC<Props> = ({ totalReviews, label, value }) => {
  return (
    <div className="flex items-center gap-2 text-dark-1 xs:text-base text-sm">
      <p className="flex items-center gap-1">
        <span>{label}</span> <FaRegStar />
      </p>
      <div className="h-2.5 xs:h-3 w-full xs:w-[60%] md:w-[40%] rounded-md bg-light relative overflow-clip">
        <div
          className="absolute left-0 top-0 h-full bg-primary rounded-md"
          style={{
            width: `${Math.round((value / totalReviews) * 100)}%`,
          }}
        />
      </div>
      <p className="font-medium">{value}</p>
    </div>
  );
};

export default ReviewBar;
