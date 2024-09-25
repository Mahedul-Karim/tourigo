import React from "react";
import { MdOutlineStars } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

interface Props {
  icon: React.ReactElement;
  label: string;
  rating: number;
  isOverall?: boolean;
}

const REVIEW_TYPE: { [key: number]: string } = {
  1: "Very Poor",
  2: "Poor",
  3: "Average",
  4: "Good",
  5: "Excellent",
};

const Ratings: React.FC<Props> = ({
  icon,
  label,
  rating,
  isOverall = false,
}) => {
  const type = REVIEW_TYPE[Math.ceil(rating) || 1];

  return (
    <div
      className={`flex items-center justify-between ${
        isOverall ? "bg-primary-2" : "bg-primary-3"
      } p-2 xs:p-4`}
    >
      <div className="flex items-center gap-2 xs:gap-4">
        <p>{icon}</p>
        <p className="flex flex-col">
          <span className="text-[12px] xs:text-[15px] text-dark-1 font-medium">{label}</span>
          <span className="text-[10px] xs:text-[13px] text-dark-1">{type}</span>
        </p>
      </div>
      <div className="flex items-center gap-1 xs:gap-2">
        <span>
          <TiStarFullOutline className="text-sm xs:text-base text-yellow-500" />
        </span>
        <span className="text-[12px] xs:text-[15px] text-dark-1 font-medium">{rating}</span>
      </div>
    </div>
  );
};

export default Ratings;
