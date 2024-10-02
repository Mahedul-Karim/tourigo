'use client'
import React from "react";
import CheckFilter from "./filters/CheckFilter";
import { RATINGS, TOUR_DURATION, TOUR_TYPE } from "@/lib/data";
import RatingFilter from "./filters/RatingFilter";

const Sidebar = () => {
  return (
    <aside className="py-4 px-6 bg-white rounded-xl border border-solid border-border order-2 md:order-1 md:h-[630px]">
      <div className="flex flex-col gap-3">
        
        <CheckFilter name="Tour Type" filters={TOUR_TYPE}/>
        <CheckFilter name="Filter Price" isPrice/>
        <CheckFilter name="Duration" filters={TOUR_DURATION}/>
        <RatingFilter  name="Rating" filters={RATINGS}/>
      </div>
    </aside>
  );
};

export default Sidebar;
