import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import Ratings from "../common/ui/Ratings";
import { CiClock2 } from "react-icons/ci";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
/**bg-gradient-to-r from-[#000] from-0% to-[#000] bg-no-repeat bg-[0_95%] bg-[length:0_1px] transition-all duration-300 hover:bg-[length:100%_1px] line */
const Card = () => {
  return (
    <div className="bg-white overflow-clip border border-solid border-border rounded-[12px]">
      <div>
        <Image
          src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
          alt=""
          width={421}
          height={301}
        />
      </div>
      <div className="px-[5px] xs:px-[10px] sm:px-5 py-[10px] flex flex-col relative">
        <div className="bg-white rounded-full size-6 xs:size-8 flex items-center justify-center absolute top-[-12px] xs:top-[-15px] right-[15px] border border-solid border-border">
          <button>
            <IoMdHeartEmpty className="text-sm xs:text-base md:text-lg" />
            {/* <IoMdHeart className="text-sm xs:text-base md:text-lg fill-primary" /> */}
          </button>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-medium text-dark-0">
          <LuMapPin className="text-xs xs:text-[14px]" />
          Paris,France
        </div>
        <Link
          href="/tours/efrtvsr"
          className="text-[12px] sm:text-[15px] mt-1 line-clamp-2 text-dark-1 font-medium leading-[1.4] "
        >
          Centipede Tour - Guided Arizona Desert Tour by ATV
        </Link>
        <div className="my-1 flex items-center gap-1">
          <Ratings rating={2.4} styles="text-[12px] xs:text-sm" />
          <p className="text-[10px] sm:text-[11px] text-center text-dark-0">
            4.8(272)
          </p>
        </div>
        <div className="my-1 xs:my-3 border-t border-solid border-border" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-dark-1">
            <CiClock2 className="text-dark-1 text-sm xs:text-[18px]" />
            <span className="text-center text-[10px] sm:text-[12px]">
              4 days
            </span>
          </div>
          <div className="flex items-center text-dark-1">
            <span className="text-[10px] sm:text-xs">From</span>
            <p className="font-medium ml-[5px] text-[12px] sm:text-[15px]">
              $128
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
