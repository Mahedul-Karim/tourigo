import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";

import BookingsBody from "./BookingsBody";

const AllBookings = () => {
  return (
    <GridContainer>
      <THead columns="90px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr 0.1fr">
        <div>Id</div>
        <div>Tour</div>
        <div>Start Date</div>
        <div>End Date</div>
        <div>Price</div>
        <div>Group</div>
        <div>Status</div>
      </THead>
      <BookingsBody />
      <BookingsBody />
      <BookingsBody />
      <BookingsBody />
    </GridContainer>
  );
};

export default AllBookings;
