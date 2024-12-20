"use client";

import React, { useState } from "react";
import Grid from "../../common/table/Grid";
import Image from "next/image";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";

interface Props {
  tour: {
    tourName: string;
    price: number;
    gallery: {
      public_id: string;
      url: string;
    }[];
  };

  id: string;
  status: string;
  startDate: Date;
  endDate: Date;
  totalPeople: number;
}

const BookingsBody: React.FC<Props> = ({
  tour,
  id,
  status,
  startDate,
  endDate,
  totalPeople,
}) => {
  return (
    <>
      <Grid
        columns="65px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr"
        className="text-dark-1 text-[13px] items-center"
      >
        <div className="whitespace-nowrap overflow-clip text-ellipsis">
          {id?.slice(0, 8)}
        </div>
        <div className="flex items-center gap-2">
          <div className="shrink-0">
            <Image
              src={tour?.gallery?.[0].url}
              width={50}
              height={50}
              alt=""
              className="rounded-lg aspect-square"
            />
          </div>
          <p className="line-clamp-2">{tour?.tourName}</p>
        </div>
        <p>{formatDate(new Date(startDate))}</p>
        <p>{formatDate(new Date(endDate))}</p>
        <div>{formatCurrency(tour?.price)}</div>
        <p>{totalPeople} People</p>
        <div>
          <Badge
            backgroundColor={STATUS[status]?.bg}
            textColor={STATUS[status]?.text}
          >
            {status}
          </Badge>
        </div>
      </Grid>
    </>
  );
};

export default BookingsBody;
