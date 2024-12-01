"use client";

import CardSkeleton from "@/components/common/ui/skeleton/CardSkeleton";
import Card from "@/components/tours/Card";
import { useCtx } from "@/context/ContextProvider";
import React, { useState, useEffect } from "react";
import Empty from "@/components/common/ui/Empty";
import { userWishlists } from "@/lib/actions/user";
import { toast } from "sonner";

interface Wishlists {
  userId: string;
  tourId: string;
  id: string;
  tour: {
    id: string;
    tourName: string;
    location: string;
    duration: string;
    price: number;
    overview: string;
    gallery: {
      url: string;
    }[];
    totalRatings: number;
    reviews: {
      id: string;
    }[];
  };
}

const Wishlist = () => {
  const [data, setData] = useState<Wishlists[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useCtx();

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const data = await userWishlists(user?.id as string);

        if (!data.success) {
          throw new Error(data.message);
        }

        setData(data.tours as Wishlists[]);
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
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    );
  }

  return (
    <>
      {data?.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4">
          {data.map((tour, i) => (
            <Card
              key={tour?.id}
              id={tour?.tour?.id}
              tourName={tour?.tour?.tourName}
              location={tour?.tour?.location}
              totalRatings={tour?.tour?.totalRatings}
              duration={tour?.tour?.duration}
              price={tour?.tour?.price}
              gallery={tour?.tour?.gallery}
              totalReviews={tour?.tour?.reviews?.length}
            />
          ))}
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Wishlist;
