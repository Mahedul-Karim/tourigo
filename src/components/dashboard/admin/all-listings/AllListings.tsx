import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import ListingsBody from './ListingsBody'

const AllListings = () => {
  return (
    <GridContainer className="overflow-y-auto">
      <THead columns="70px 0.4fr 0.1fr 0.2fr 0.1fr 0.2fr 40px">
        <div></div>
        <div>Name</div>
        <div>Price</div>
        <div>Created At</div>
        <div>Creator</div>
        <div>Status</div>
        <div></div>
      </THead>
      <ListingsBody />
      <ListingsBody />
      <ListingsBody />
      <ListingsBody />
    </GridContainer>
  );
};

export default AllListings;
