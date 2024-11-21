import React from "react";
import { CiClock2 } from "react-icons/ci";
import Ratings from "../common/ui/Ratings";
import { LuMapPin } from "react-icons/lu";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { formatCurrency,handleAddWishlist } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { highlightText } from "@/lib/highlightText";
import { useCtx } from "@/context/ContextProvider";

type Props ={
  id:string;
  tourName:string;
  location:string;
  gallery:{
    url:string;
  }[];
  duration:string;
  price:number;
  totalRatings:number;
  overview:string;
}

const CardList:React.FC<Props> = ({id,tourName,gallery,price,totalRatings,duration,location,overview}) => {


  const search = useSearchParams().get("search") || "";

  const { user, isLoggedIn, setUser } = useCtx();

  const isInWishlist = user?.wishlist?.find((tour) => tour.tourId === id);

  return (
    <div className="bg-white overflow-clip border border-solid border-border grid sm:grid-cols-[200px_1fr_0.4fr] rounded-[12px] p-4 gap-4 sm:gap-0">
      <div className="relative">
        <Image
          src={gallery?.[0]?.url}
          alt=""
          width={421}
          height={301}
          className="rounded-[12px] object-cover sm:h-[180px] w-full"
        />
        <div className="bg-white rounded-full size-6 xs:size-8 flex items-center justify-center absolute top-[12px] xs:top-[15px] right-[15px] border border-solid border-border">
        <button
            onClick={() =>
              handleAddWishlist({ user, isLoggedIn, setUser, tourId: id })
            }
          >
            {isInWishlist ? (
              <IoMdHeart className="text-sm xs:text-base md:text-lg fill-primary" />
            ) : (
              <IoMdHeartEmpty className="text-sm xs:text-base md:text-lg" />
            )}
          </button>
        </div>
      </div>
      <div className="flex flex-col px-2 xs:px-4 justify-center sm:border-r border-solid border-border">
        <div className="flex items-center gap-1 text-[10px] xs:text-[12px] sm:text-[13px] text-dark-0">
          <LuMapPin className="text-[10px] xs:text-[14px]" />
          {location}
        </div>
        <Link
          href={`/tours/${tourName?.replace(/\s+/, "-")}`}
          className="text-[12px] xs:text-[13px] sm:text-[16px] mt-1 line-clamp-2 text-dark-1 font-medium leading-[1.4]"
        >
          {highlightText(tourName,search)}
        </Link>
        <div className="my-1 flex items-center gap-1">
          <Ratings rating={totalRatings} styles="text-[12px] xs:text-lg" />
          <p className="text-[10px] xs:text-[12px] sm:text-[13px] text-center text-dark-0">
          {totalRatings}
          </p>
        </div>
        <p className="text-[10px] xs:text-[12px] sm:text-[13px] mt-1 line-clamp-2 text-dark-0 font-medium leading-[1.4]">
          <span className="bg-gradient-to-r from-[#000] from-0% to-[#000] bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-500 group-hover:bg-[length:100%_1px] py-[2px]">
           
            {overview}
          </span>
        </p>
      </div>
      <div className="flex sm:flex-col justify-between sm:items-center px-2 xs:px-4">
        <div className="flex items-center gap-1 text-dark-1">
          <CiClock2 className="text-dark-1 text-sm xs:text-[18px]" />
          <span className="text-center text-[10px] sm:text-[12px]">{duration}</span>
        </div>
        <div className="flex items-center text-dark-1">
          <span className="text-[10px] sm:text-xs">From</span>
          <p className="font-medium ml-[5px] text-[12px] sm:text-[15px]">
          {formatCurrency(price)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
