"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { IoAddCircleOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const NewListing = () => {

    const router = useRouter();

  return (
    <div>
      <Button
        className={`w-full bg-white hover:bg-white border-primary text-xs sm:text-sm sm:px-4 px-2 md:py-2 py-1 text-primary hover:text-primary flex items-center gap-1`}
        variant={"outline"}
        onClick={() => router.push("/vendor/add-listings")}
      >
        <IoAddCircleOutline className="text-xl" /> <span>New Listing</span>
      </Button>
    </div>
  );
};

export default NewListing;
