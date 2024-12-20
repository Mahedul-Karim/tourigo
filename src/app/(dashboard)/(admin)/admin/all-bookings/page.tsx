import React from "react";
import Title from "@/components/dashboard/common/Title";
import AllBookings from "@/components/dashboard/admin/all-bookings/AllBookings";
import Empty from "@/components/common/ui/Empty";
import { adminAllBookings } from "@/lib/actions/admin";


const Page = async () => {

  const { bookings } = await adminAllBookings();

  return (
    <>
      {bookings?.length === 0 ? (
        <div className="p-4 bg-white border-border border border-solid rounded-md">
          <Empty />
        </div>
      ) : (
        <div className="p-4 bg-white border-border border border-solid rounded-md">
          <Title>All Bookings</Title>
          <AllBookings bookings={bookings}/>
        </div>
      )}
    </>
  );
};

export default Page;
