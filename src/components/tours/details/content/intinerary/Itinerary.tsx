import React from "react";
import Title from "../Title";
import ItineraryItems from "./ItineraryItems";

const Itinerary = () => {
  return (
    <div>
      <Title>Itinerary</Title>
      <div className="mt-4 flex flex-col gap-16">
        <ItineraryItems isRight/>
        <ItineraryItems isLeft/>
        <ItineraryItems isRight/>
        <ItineraryItems isLeft/>
      </div>
    </div>
  );
};

export default Itinerary;
