import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import ListingsBody from "./ListingsBody";

const AllListings = () => {
  return (
    <GridContainer>
      <THead>
        <div></div>
        <div>Name</div>
        <div>Price</div>
        <div>Created At</div>
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
