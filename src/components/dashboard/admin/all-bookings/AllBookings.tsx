import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";

import BookingsBody from "./BookingsBody";
import { Prisma } from "@prisma/client";

interface Props {
  bookings: Prisma.BookingGetPayload<{
    include: {
      tour: {
        select: {
          tourName: true;
          gallery: true;
          price: true;
        };
      };
    };
  }>[];
}

const AllBookings: React.FC<Props> = ({ bookings }) => {
  return (
    <GridContainer>
      <THead columns="65px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr">
        <div>Id</div>
        <div>Tour</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Price</div>
        <div>Group</div>
        <div>Status</div>
      </THead>
      {bookings.map((td) => (
        <BookingsBody
          key={td.id}
          tour={td.tour}
          status={td.status}
          startDate={td.startDate}
          endDate={td.endDate}
          totalPeople={td.totalPeople}
          id={td.id}
        />
      ))}
    </GridContainer>
  );
};

export default AllBookings;
