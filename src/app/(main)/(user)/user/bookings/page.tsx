import React from "react";
import Section from "@/components/dashboard/common/Section";
import Title from "@/components/dashboard/common/Title";
import Bookings from "@/components/dashboard/user/bookings/Bookings";
import { revalidateTag } from "next/cache";

const Page = () => {


  revalidateTag('bookedTours')

  return (
    <>
      <Section>
        <Title>My Bookings</Title>
        <Bookings />
      </Section>
    </>
  );
};

export default Page;
