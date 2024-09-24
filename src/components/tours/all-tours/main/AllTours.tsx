"use client";

import React, { useState } from "react";
import LayoutToggle from "./LayoutToggle";
import Search from "./Search";
import CardList from "../../CardList";
import Card from "../../Card";

const AllTours = () => {
  const [type, setType] = useState("grid");

  return (
    <>
      <div className="flex sm:flex-row-reverse items-center">
        <div className="flex items-center gap-2 xs:gap-4 w-full sm:w-auto">
          <LayoutToggle type={type} setType={setType} />
          <Search />
        </div>
      </div>
      {type === "grid" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-4 sm:gap-6 mt-6">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      )}
      {type === "list" && (
        <div className="flex flex-col mt-6 gap-4">
          <CardList />
          <CardList />
          <CardList />
        </div>
      )}
    </>
  );
};

export default AllTours;
