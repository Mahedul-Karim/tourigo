"use client";

import React, { useEffect, useMemo, useState } from "react";
import LayoutToggle from "./LayoutToggle";
import Search from "./Search";
import Spinner from "@/components/common/ui/Spinner";
import GridCard from "./card/GridCard";
import Empty from "@/components/common/ui/Empty";


const AllTours = ({ data }: { data: AllToursType[] }) => {
  const [type, setType] = useState("grid");
  const [tours, setTours] = useState<AllToursType[]>(data);

  const memoizeData = useMemo(()=>data,[data])
  
  useEffect(() => {
    setTours(memoizeData);
  }, [memoizeData]);

  return (
    <>
      <div className="flex sm:flex-row-reverse items-center">
        <div className="flex items-center gap-2 xs:gap-4 w-full sm:w-auto">
          <LayoutToggle type={type} setType={setType} />
          <Search />
        </div>
      </div>

      {tours?.length > 0 && <GridCard type={type} tours={tours} />}
      {tours?.length === 0 && <Empty />}
    </>
  );
};

export default AllTours;
