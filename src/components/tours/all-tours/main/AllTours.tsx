"use client";

import React, { useEffect, useState } from "react";
import LayoutToggle from "./LayoutToggle";
import Search from "./Search";
import Spinner from "@/components/common/ui/Spinner";
import GridCard from "./card/GridCard";
import Empty from "@/components/common/ui/Empty";
import { toast } from "sonner";

const AllTours = () => {
  const [type, setType] = useState("grid");
  const [tours, setTours] = useState<AllToursType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTours = async function () {
      try {
        setIsLoading(true);

        const res = await fetch("/api/tour", {
          next: {
            revalidate: 3600,
            tags: ["allTours"],
          },
        });

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setTours(data?.tours);
      } catch (err: any) {
        toast.error("Error!", {
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchTours();
  }, []);

  return (
    <>
      <div className="flex sm:flex-row-reverse items-center">
        <div className="flex items-center gap-2 xs:gap-4 w-full sm:w-auto">
          <LayoutToggle type={type} setType={setType} />
          <Search />
        </div>
      </div>
      {isLoading && (
        <div className="flex items-center justify-center h-full">
          <Spinner />
        </div>
      )}
      {!isLoading && tours?.length > 0 && (
        <GridCard type={type} tours={tours} />
      )}
      {!isLoading && tours?.length === 0 && <Empty />}
    </>
  );
};

export default AllTours;
