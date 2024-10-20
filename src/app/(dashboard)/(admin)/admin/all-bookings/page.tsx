import React from "react";
import Title from "@/components/dashboard/common/Title";
import AllBookings from "@/components/dashboard/admin/all-bookings/AllBookings";

const Page = () => {
  return (
    <>
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Bookings</Title>
        <AllBookings />
      </div>
    </>
  );
};

export default Page;
