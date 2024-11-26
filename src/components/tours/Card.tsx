import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import Ratings from "../common/ui/Ratings";
import { CiClock2 } from "react-icons/ci";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { formatCurrency, handleAddWishlist } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { highlightText } from "@/lib/highlightText";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";

type Props = {
  id: string;
  tourName: string;
  location: string;
  gallery: {
    url: string;
  }[];
  duration: string;
  price: number;
  totalRatings: number;
  overview?: string;
  totalReviews: number;
};

const Card: React.FC<Props> = ({
  id,
  tourName,
  gallery,
  price,
  totalRatings,
  duration,
  location,
  totalReviews,
}) => {
  const search = useSearchParams().get("search") || "";

  const { user, isLoggedIn, setUser } = useCtx();

  const isInWishlist = user?.wishlist?.find((tour) => tour.tourId === id);

  return (
    <div className="bg-white group overflow-clip border border-solid border-border rounded-[12px]">
      <div>
        <Image
          src={gallery?.[0]?.url}
          alt=""
          width={421}
          height={301}
          className="h-[100px] object-cover xs:h-[150px] lg:h-[180px]"
        />
      </div>
      <div className="px-[5px] xs:px-[10px] sm:px-5 py-[10px] flex flex-col relative">
        <div className="bg-white rounded-full size-6 xs:size-8 flex items-center justify-center absolute top-[-12px] xs:top-[-15px] right-[15px] border border-solid border-border">
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

        <div className="flex items-center gap-1 text-[10px] sm:text-[11px] font-normal text-dark-0 capitalize">
          <LuMapPin className="text-xs xs:text-[14px]" />
          {location}
        </div>
        <Link
          href={`/tours/${tourName?.replace(/\s+/, "-")}?id=${id}`}
          className="text-[12px] sm:text-[15px] mt-1 line-clamp-2 text-dark-1 font-medium leading-[1.6] h-[40px] sm:h-[48px]"
        >
          <span className="bg-gradient-to-r from-[#000] from-0% to-[#000] bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-500 group-hover:bg-[length:100%_1px] py-[2px]">
            {highlightText(tourName, search)}
          </span>
        </Link>
        <div className="my-1 flex items-center gap-1">
          <Ratings rating={totalRatings} styles="text-[12px] xs:text-sm" />
          <p className="text-[10px] sm:text-[12px] text-center text-dark-0">
            {totalRatings}({totalReviews})
          </p>
        </div>

        <div className="my-1 xs:my-3 border-t border-solid border-border" />

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-dark-1">
            <CiClock2 className="text-dark-1 text-sm xs:text-[18px]" />
            <span className="text-center text-[10px] sm:text-[12px]">
              {duration}
            </span>
          </div>
          <div className="flex items-center text-dark-1">
            <span className="text-[9px] xs:text-[10px] sm:text-xs">From</span>
            <p className="font-medium ml-[5px] text-[11px] xs:text-[12px] sm:text-[15px]">
              {formatCurrency(price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
