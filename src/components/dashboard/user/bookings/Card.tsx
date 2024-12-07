"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import ReviewModal from "@/components/common/ui/modal/ReviewModal";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Props {
  bookingId:string;
  tourId: string;
  status: string;
  startDate: Date;
  endDate: Date;
  totalPeople: number;
  createdAt: Date;
  isReviewd: boolean;
  tour: {
    tourName: string;
    price: number;
    gallery: {
      public_id: string;
      url: string;
    }[];
  };
  creatorId: string;
  bookings:BookedTours[];
  setData:(val:BookedTours[])=>void;
}

const Card: React.FC<Props> = ({
  tourId,
  status,
  startDate,
  endDate,
  totalPeople,
  createdAt,
  tour,
  isReviewd,
  creatorId,
  bookingId,
  bookings,
  setData

}) => {
  const [open, setOpen] = useState(false);

  return (
    <article className="grid sm:grid-cols-[0.5fr_1fr_0.7fr] gap-3 py-4 px-3">
      <div className="">
        <Image
          src={tour?.gallery?.[0].url}
          alt=""
          width={821}
          height={0}
          className="object-cover aspect-video sm:aspect-auto sm:h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <Link
          href={`/tours/${tour?.tourName?.replace(/\s+/, "-")}?id=${tourId}`}
          className="text-sm xs:text-base lg:text-lg font-semibold text-dark-1"
        >
          {tour?.tourName}
        </Link>
        <p className="text-xs xs:text-sm text-dark-0">{totalPeople} Persons</p>
        <p className="text-xs xs:text-sm text-dark-0">
          Tour Starts At: {formatDate(new Date(startDate))}
        </p>
      </div>
      <div className="flex flex-col gap-1 justify-center text-dark-1 text-xs xs:text-sm lg:text-base">
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Status:
          <span className="font-normal">
            {" "}
            <Badge
              backgroundColor={STATUS[status]?.bg}
              textColor={STATUS[status]?.text}
              className="!py-0.5 !text-[10px]"
            >
              {status}
            </Badge>{" "}
          </span>
        </p>
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Booked At:
          <span className="font-medium">
            {" "}
            {formatDate(new Date(createdAt))}
          </span>
        </p>
        <p className="flex items-center justify-between sm:justify-normal gap-0 sm:gap-2 text-sm">
          Total Price:{" "}
          <span className="font-medium md:text-base">
            {formatCurrency(tour?.price)}
          </span>
        </p>
        {status === "completed" && !isReviewd && (
          <div className="flex items-center justify-end mt-2 sm:justify-normal">
            <button
              className="bg-dark-1 py-1 px-3  text-sm rounded-lg text-white"
              onClick={setOpen.bind(null, true)}
            >
              Review!
            </button>
          </div>
        )}
      </div>
      {open && (
        <ReviewModal
          onModalClose={setOpen}
          tourId={tourId}
          creatorId={creatorId}
          bookingId={bookingId}
          bookings={bookings}
          setData={setData}
        />
      )}
    </article>
  );
};

export default Card;
