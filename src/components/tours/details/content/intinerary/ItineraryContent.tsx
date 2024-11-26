import React from "react";

interface Props {
  index?: number;
  title: string;
  description: string;
}

const ItineraryContent: React.FC<Props> = ({ title, description, index }) => {
  return (
    <>
      {" "}
      <p className="text-dark-1 text-xs xs:text-sm font-medium">Day {index}: {title}</p>
      <p className={`text-[10px] xs:text-xs text-dark-0 mt-[10px] xs:mt-[20px]`}>{description}</p>
    </>
  );
};

export default ItineraryContent;
