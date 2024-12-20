import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-[80px]" />
        <Skeleton className="h-[80px]" />
      </div>
      <div className="mt-6">
        <Skeleton className="h-[250px]" />
      </div>
    </>
  );
};

export default loading;
