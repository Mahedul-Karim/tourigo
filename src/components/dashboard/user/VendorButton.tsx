"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = React.HTMLAttributes<HTMLDivElement>;

const VendorButton: React.FC<Props> = ({ className }) => {
  const router = useRouter();

  return (
    <div className={`${className}`}>
      <Button
        className={`w-full bg-white hover:bg-white border-primary text-xs sm:text-sm sm:px-4 px-2 md:py-2 py-1 text-primary hover:text-primary`}
        variant={"outline"}
        onClick={() => router.push("/vendor")}
      >
        Become a vendor
      </Button>
    </div>
  );
};

export default VendorButton;
