"use client";

import React, { useState } from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import ListingsBody from "./ListingsBody";

type Props = {
  data: {
    id: string;
    tourName: string;
    price: number;
    status: string;
    gallery: {
      url: string;
    }[];
    creatorId: string;
    createdAt: Date;
    creator: {
      firstName: string;
      lastName: string;
    };
  }[];
};

const AllListings: React.FC<Props> = ({ data }) => {
  const [listings, setListings] = useState(data || []);

  

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
      {!listings || listings?.length === 0 ? (
        <p className="p-4 flex items-center justify-center text-dark-1 font-semibold">
          No listings found!😥
        </p>
      ) : (
        listings?.map((list) => (
          <ListingsBody
            key={list?.id}
            id={list.id}
            image={list.gallery[0].url}
            tourName={list.tourName}
            price={list.price}
            status={list.status}
            createdAt={list.createdAt}
            creator={list.creator}
            listings={listings}
            setListings={setListings}
          />
        ))
      )}
    </GridContainer>
  );
};

export default AllListings;
