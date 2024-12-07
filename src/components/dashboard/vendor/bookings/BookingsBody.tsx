"use client";

import React, { useState } from "react";
import Grid from "../../common/table/Grid";
import Image from "next/image";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";
import { BsThreeDotsVertical } from "react-icons/bs";
import ConfirmationModal from "@/components/common/ui/modal/ConfirmationModal";
import { updateBookingStatus } from "@/lib/actions/tours";
import { toast } from "sonner";

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
  setData: (data: any) => void;
  data: {
    tour: {
      tourName: string;
      price: number;
      gallery: {
        public_id: string;
        url: string;
      }[];
    };
    userId: string;
    tourId: string;
    id: string;
    createdAt: Date;
    status: string;
    startDate: Date;
    endDate: Date;
    totalPeople: number;
    tourCreator: string;
  }[];
}

const BookingsBody: React.FC<Props> = ({
  id,
  status,
  startDate,
  endDate,
  totalPeople,
  tour,
  setData,
  data,
}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleBookingUpdate = async () => {
    const copiedData = [...data];

    const indexOfSelectedData = copiedData.findIndex((dat) => dat.id === id);

    try {
      setIsLoading(true);

      const state = status === "paid" ? "checked in" : "completed";

      const updatedData = await updateBookingStatus(id, state);

      if (!updatedData.success) {
        throw new Error(updatedData.message);
      }
      //@ts-ignore
      copiedData[indexOfSelectedData] = updatedData.tour;

      setData(copiedData);

      toast.success("Success!", {
        description: "Booking status updated successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      setOpen(false);
      setIsLoading(false);
    }
  };

  return (
    <>
      <Grid
        columns="90px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr 0.1fr"
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
        <div>
          {status !== "completed" && (
            <button onClick={setOpen.bind(null, true)}>
              <BsThreeDotsVertical className="text-lg" />
            </button>
          )}
        </div>
      </Grid>
      {open && (
        <ConfirmationModal
          title={`Mark this booking as ${
            status === "paid" ? "checked in" : "completed"
          }?`}
          onModalClose={setOpen}
          onModalAction={handleBookingUpdate}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default BookingsBody;
