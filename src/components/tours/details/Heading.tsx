import React from "react";

import Ratings from "@/components/common/ui/Ratings";
import { LuMapPin } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";

const Heading = () => {
  return (
    <div className="mt-6">
      <h2 className="text-2xl xs:text-3xl sm:text-4xl text-dark-1 font-bold !leading-[1.2]">
        Westminster Walking Tour & Westminster Abbey Entry
      </h2>
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-2 xs:gap-3">
          <Ratings rating={2.4} styles="text-base xs:text-lg" />
          <p className="text-xs xs:text-sm text-center text-dark-1">4.8(272)</p>
          <div className="flex items-center gap-1 text-xs xs:text-sm text-dark-1">
            <LuMapPin className="text-[14px]" />
            Paris,France
          </div>
        </div>
        <div className="flex items-center gap-1 text-dark-0">
          <button>
            <IoMdHeartEmpty className="text-sm xs:text-base md:text-lg" />
            {/* <IoMdHeart className="text-sm xs:text-base md:text-lg fill-primary" /> */}
          </button>
          <span className="text-sm hidden xs:inline-block"> Wishlist</span>
        </div>
      </div>
    </div>
  );
};

export default Heading;
