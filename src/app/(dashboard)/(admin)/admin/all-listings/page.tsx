import React from "react";
import Title from "@/components/dashboard/common/Title";
import AllListings from "@/components/dashboard/admin/all-listings/AllListings";
import { adminAllTours } from "@/lib/actions/tours";

const Page = async () => {
  const data = await adminAllTours()


  return (
    <>
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Listings</Title>
        <AllListings data={data?.tours} />
      </div>
    </>
  );
};

export default Page;
