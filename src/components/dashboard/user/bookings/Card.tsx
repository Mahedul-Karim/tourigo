"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import ReviewModal from "@/components/common/ui/modal/ReviewModal";

const Card = () => {
  const [open, setOpen] = useState(false);

  return (
    <article className="grid sm:grid-cols-[0.5fr_1fr_0.7fr] gap-3 py-4 px-3">
      <div className="">
        <Image
          src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
          alt=""
          width={821}
          height={0}
          className="object-cover aspect-video sm:aspect-auto sm:h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <Link
          href="/"
          className="text-sm xs:text-base lg:text-lg font-semibold text-dark-1"
        >
          Enchanted Island Escapades: Mystical
        </Link>
        <p className="text-xs xs:text-sm text-dark-0">3 Adults and 1 infant</p>
        <p className="text-xs xs:text-sm text-dark-0">
          Tour Starts At: 21 Aug, 2026
        </p>
      </div>
      <div className="flex flex-col gap-1 justify-center text-dark-1 text-xs xs:text-sm lg:text-base">
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Status:
          <span className="font-normal">
            {" "}
            <Badge
              backgroundColor={STATUS["checked in"]?.bg}
              textColor={STATUS["checked in"]?.text}
              className="!py-0.5 !text-[10px]"
            >
              checked in
            </Badge>{" "}
          </span>
        </p>
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Booked At:<span className="font-medium"> 20 Aug, 2029</span>
        </p>
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Total Price: <span className="font-medium md:text-base">$1873</span>
        </p>
        <div className="flex items-center justify-end mt-2 sm:justify-normal">
          <button
            className="bg-dark-1 py-1 px-3  text-sm rounded-lg text-white"
            onClick={setOpen.bind(null, true)}
          >
            Review!
          </button>
        </div>
      </div>
      {open && <ReviewModal onModalClose={setOpen} />}
    </article>
  );
};

export default Card;
