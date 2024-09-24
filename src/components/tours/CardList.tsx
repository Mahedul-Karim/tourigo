import React from "react";
import { CiClock2 } from "react-icons/ci";
import Ratings from "../common/ui/Ratings";
import { LuMapPin } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const CardList = () => {
  return (
    <div className="bg-white overflow-clip border border-solid border-border grid sm:grid-cols-[200px_1fr_0.4fr] rounded-[12px] p-4 gap-4 sm:gap-0">
      <div className="relative">
        <Image
          src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
          alt=""
          width={421}
          height={301}
          className="rounded-[12px] object-cover sm:h-[180px] w-full"
        />
        <div className="bg-white rounded-full size-6 xs:size-8 flex items-center justify-center absolute top-[12px] xs:top-[15px] right-[15px] border border-solid border-border">
          <button>
            <IoMdHeartEmpty className="text-sm xs:text-base md:text-lg" />
            {/* <IoMdHeart className="text-sm xs:text-base md:text-lg fill-primary" /> */}
          </button>
        </div>
      </div>
      <div className="flex flex-col px-2 xs:px-4 justify-center sm:border-r border-solid border-border">
        <div className="flex items-center gap-1 text-[10px] xs:text-[12px] sm:text-[13px] text-dark-0">
          <LuMapPin className="text-[10px] xs:text-[14px]" />
          Paris,France
        </div>
        <Link href="/tours/efrtvsr" className="text-[11px] xs:text-[13px] sm:text-[16px] mt-1 line-clamp-2 text-dark-1 font-medium leading-[1.4]">
          Centipede Tour - Guided Arizona Desert Tour by ATV
        </Link>
        <div className="my-1 flex items-center gap-1">
          <Ratings rating={4} styles="text-[12px] xs:text-lg" />
          <p className="text-[10px] xs:text-[12px] sm:text-[13px] text-center text-dark-0">
            4.8(272)
          </p>
        </div>
        <p className="text-[10px] xs:text-[12px] sm:text-[13px] mt-1 line-clamp-2 text-dark-0 font-medium leading-[1.4]">
          Centipede Tour - Guided Arizona Desert Tour by ATV Centipede Tour -
          Guided Arizona Desert Tour by ATV Centipede Tour - Guided Arizona
          Desert Tour by ATV
        </p>
      </div>
      <div className="flex sm:flex-col justify-between sm:items-center px-2 xs:px-4">
        <div className="flex items-center gap-1 text-dark-1">
          <CiClock2 className="text-dark-1 text-xs xs:text-[18px]" />
          <span className="text-center text-[8px] xs:text-[10px] sm:text-[12px]">
            4 days
          </span>
        </div>
        <div className="flex items-center text-dark-1">
          <span className="text-[8px] xs:text-[10px] sm:text-xs">From</span>
          <p className="font-medium ml-[5px] text-[10px] xs:text-[12px] sm:text-[15px]">
            $128
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default CardList;
