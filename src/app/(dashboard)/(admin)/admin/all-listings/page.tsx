import React from "react";
import Title from "@/components/dashboard/common/Title";
import AllListings from "@/components/dashboard/admin/all-listings/AllListings";
const Page = () => {
  return (
    <>
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Listings</Title>
        <AllListings />
      </div>
    </>
  );
};

export default Page;
