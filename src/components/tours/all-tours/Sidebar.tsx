'use client'
import React from "react";
import CheckFilter from "./filters/CheckFilter";
import { TOUR_TYPE } from "@/lib/data";

const Sidebar = () => {
  return (
    <aside className="py-4 px-6 bg-white rounded-xl border border-solid border-border">
      <div className="flex flex-col gap-3">
        <CheckFilter name="Tour Type" filters={TOUR_TYPE}/>
        <CheckFilter name="Filter Price" isPrice/>
      </div>
    </aside>
  );
};

export default Sidebar;
