import React from "react";
import ItineraryContent from "./ItineraryContent";

interface Props {
  isLeft?: boolean;
  isRight?: boolean;
  index?: number;
}

const ItineraryItems: React.FC<Props> = ({ isLeft, isRight, index }) => {
  return (
    <div className="grid grid-cols-[1fr_20px_1fr] itineraryGrid gap-4">
      <div className="flex flex-col items-center">
        {isLeft && (
          <ItineraryContent
            title="Day 1: Airport Pickup"
            description="Like on all of our trips, we can collect you from the airport when
              you land and take you directly to your hotel. The first Day is
              just a check-in Day so you have this freedom to explore the city
              and get settled in."
            index={index}
          />
        )}
      </div>
      <div className="relative dashedLine">
        <div className="size-[20px] border-2 border-solid border-primary rounded-full relative">
          <div
            className={`absolute top-[50%] -translate-y-[50%] w-[10px] xs:w-[30px] sm:w-[40px] border-t border-dashed border-primary ${
              isLeft
                ? "left-[-12px] xs:left-[-32px] sm:left-[-40px]"
                : "right-[-12px] xs:right-[-32px] sm:right-[-40px]"
            }`}
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        {isRight && (
          <ItineraryContent
            title="Day 1: Airport Pickup"
            description="Like on all of our trips, we can collect you from the airport when
          you land and take you directly to your hotel. The first Day is
          just a check-in Day so you have this freedom to explore the city
          and get settled in."
            index={index}
          />
        )}
      </div>
    </div>
  );
};

export default ItineraryItems;
