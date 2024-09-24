"use client";

import Calendar from "@/components/common/ui/Calendar";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";

import { FaMinus, FaPlus } from "react-icons/fa6";
import TotalGuest from "./TotalGuest";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="bg-white border border-solid border-border rounded-lg h-max px-4 py-8">
      <div className="flex gap-2 items-center text-dark-1">
        <span className="text-xs">From</span>
        <p className="font-medium text-base xs:text-lg">$1200</p>
      </div>
      <div className="my-4">
        <div className="flex items-center border border-solid border-border rounded-lg px-4 py-3 gap-2">
          <div className="p-2 rounded-lg bg-light">
            <CiCalendarDate className="text-lg xs:text-xl text-dark-1" />
          </div>
          <div className="flex flex-col text-dark-1">
            <p className="text-xs xs:text-sm">From</p>
            <p className="text-[10px] xs:text-xs whitespace-nowrap text-ellipsis overflow-clip">
              August 30-September 30
            </p>
          </div>
        </div>
      </div>
      <div className="my-4">
        <Calendar />
      </div>
      <div className="mb-4 flex flex-col gap-3">
        <TotalGuest />
        <TotalGuest />
        <TotalGuest />
      </div>
      <div className="border-t border-solid border-border mb-4"/>
      <div className="flex items-center justify-between text-dark-1 text-base xs:text-lg mb-4">
        <p>Total</p>
        <p>$1080</p>
      </div>
      <Button size="lg" className="w-full bg-primary">Book Now</Button>
    </div>
  );
};

export default Sidebar;
