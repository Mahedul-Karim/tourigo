import React from "react";
import Container from "@/components/common/ui/Container";
import Title from "@/components/dashboard/common/Title";
import AllBookings from "@/components/dashboard/vendor/bookings/AllBookings";

const Page = () => {
  return (
    <Container className="py-8">
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Bookings</Title>
        <AllBookings />
      </div>
      
    </Container>
  );
};

export default Page;
