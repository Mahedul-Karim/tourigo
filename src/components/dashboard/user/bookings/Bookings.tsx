"use client";

import React, { useEffect, useState } from "react";
import Card from "@/components/dashboard/user/bookings/Card";
import LoadingCard from "./LoadingCard";
import Empty from "@/components/common/ui/Empty";
import { useCtx } from "@/context/ContextProvider";
import { usersBookedTours } from "@/lib/actions/user";
import { toast } from "sonner";

interface BookedTours {
  id: string;
  userId: string;
  tourId: string;
  status: string;
  startDate: Date;
  endDate: Date;
  totalPeople: number;
  tourCreator: string;
  createdAt: Date;
  tour: {
    tourName: string;
    price: number;
    gallery: {
      public_id: string;
      url: string;
    }[];
  };
}

const Bookings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<BookedTours[]>([]);

  const { user } = useCtx();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data = await usersBookedTours(user?.id as string);

        if (!data.success) {
          throw new Error(data.message);
        }

        setData(data?.tours as BookedTours[]);
      } catch (err: any) {
        setData([]);
        toast.error("Error!", {
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user?.id]);

  if (isLoading) {
    return (
      <div className="mt-4 border border-solid border-border rounded-md overflow-clip bookingsCard">
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </div>
    );
  }

  return (
    <>
      {data?.length > 0 ? (
        <div className="mt-4 border border-solid border-border rounded-md overflow-clip bookingsCard">
          {data.map((dat, i) => (
            <Card
              key={i}
              tourId={dat?.tourId}
              status={dat?.status}
              startDate={dat?.startDate}
              endDate={dat?.endDate}
              totalPeople={dat?.totalPeople}
              tour={dat?.tour}
              createdAt={dat?.createdAt}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Bookings;
