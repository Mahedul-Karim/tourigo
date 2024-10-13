"use client";

import React, { useState } from "react";
import VendorNav from "../../vendor/VendorNav";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden block">
      <div
        className="w-[30px] flex flex-col gap-1 cursor-pointer"
        onClick={setOpen.bind(null, true)}
      >
        <span className="bg-primary w-full h-[3px] rounded-md" />
        <span className="bg-primary w-[80%] h-[3px] rounded-md" />
        <span className="bg-primary w-full h-[3px] rounded-md" />
      </div>
      {
        <div
          className={`fixed inset-0 z-[10] ${open ? "visible" : "invisible"}`}
        >
          <div
            className={`bg-black/[0.2] backdrop-blur-[10px] absolute inset-0 ${
              open ? "visible delay-0" : "invisible delay-300"
            } transition-all duration-300 -z-[9]`}
            onClick={setOpen.bind(null, false)}
          />
          <VendorNav
            className={`md:hidden block w-max transition-all duration-300 delay-300 ${
              open ? "translate-x-0" : "-translate-x-[100%]"
            }`}
            onClick={setOpen}
          />
        </div>
      }
    </div>
  );
};

export default MobileNav;
