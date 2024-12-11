"use client";

import React, { useEffect, useState } from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import ListingsBody from "./ListingsBody";
import Spinner from "@/components/common/ui/Spinner";
import Empty from "@/components/common/ui/Empty";
import { Tour } from "@prisma/client";
import { vendorListings } from "@/lib/actions/vendor";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";

const AllListings = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Tour[]>([]);

  const { user } = useCtx();

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const res = await vendorListings(user?.id as string);

        if (!res.success) {
          throw new Error(res.message);
        }

        setData(res.tours as Tour[]);
      } catch (err: any) {
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
          <THead>
            <div></div>
            <div>Name</div>
            <div>Price</div>
            <div>Created At</div>
            <div></div>
          </THead>
          {data.map((tour) => (
            <ListingsBody
              key={tour.id}
              gallery={tour?.gallery}
              tourName={tour.tourName}
              price={tour.price}
              createdAt={tour.createdAt}
              status={tour.status}
              tour={tour}
            />
          ))}
        </GridContainer>
      )}
    </>
  );
};

export default AllListings;
