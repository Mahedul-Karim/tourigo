import React from "react";
import Title from "@/components/dashboard/common/Title";
import AllListings from "@/components/dashboard/admin/all-listings/AllListings";

const Page = async () => {
  const res = await fetch(`${process.env.BASE_URL}/api/admin/all-listings`, {
    next: {
      revalidate: 3600,
    },
  });

  const data = await res.json();

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
