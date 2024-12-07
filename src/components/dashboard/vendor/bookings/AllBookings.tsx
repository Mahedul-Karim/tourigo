"use client";

import React, { useState, useEffect } from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import Spinner from "@/components/common/ui/Spinner";
import BookingsBody from "./BookingsBody";
import Empty from "@/components/common/ui/Empty";
import { venorBookedTours } from "@/lib/actions/user";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";
import { usePathname } from "next/navigation";

interface VendorBookings {
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
}

const AllBookings = () => {
  const [data, setData] = useState<VendorBookings[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useCtx();

  const path = usePathname()

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const tourData = await venorBookedTours(user?.id as string,path);

        if (!tourData.success) {
          throw new Error(tourData.message);
        }

        setData(tourData.tours as VendorBookings[]);
      } catch (err: any) {
        toast.error("Error!", {
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-6 flex items-center justify-center h-[calc(100vh_-_100px)]">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      {data?.length === 0 ? (
        <Empty />
      ) : (
        <GridContainer>
          <THead columns="90px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr 0.1fr">
            <div>Id</div>
            <div>Tour</div>
            <div>Start Date</div>
            <div>End Date</div>
            <div>Price</div>
            <div>Group</div>
            <div>Status</div>
          </THead>
          {data.map((td,_,arr) => (
            <BookingsBody
              key={td.id}
              tour={td.tour}
              status={td.status}
              startDate={td.startDate}
              endDate={td.endDate}
              totalPeople={td.totalPeople}
              id={td.id}
              setData={setData}
              data={arr}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default AllBookings;
