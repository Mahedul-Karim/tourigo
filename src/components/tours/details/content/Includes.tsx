import React from "react";
import Title from "./Title";

import Check from "./includes/Check";

import Cross from "./includes/Cross";

const Includes = () => {
  return (
    <div>
      <Title>What&apos;s included</Title>
      <div className="mt-4 grid grid-cols-2 gap-1 sm:gap-2">
        <div className="flex flex-col gap-4">
          <Check />
          <Check />
          <Check />
        </div>
        <div className="flex flex-col gap-4">
          <Cross />
          <Cross />
          <Cross />
        </div>
      </div>
    </div>
  );
};

export default Includes;
