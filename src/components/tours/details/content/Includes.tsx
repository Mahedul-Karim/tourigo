import React from "react";
import Title from "./Title";

import Check from "./includes/Check";

import Cross from "./includes/Cross";

interface Props {
  includes: string[];
}

const Includes: React.FC<Props> = ({ includes }) => {
  return (
    <div>
      <Title>What&apos;s included</Title>
      <div className="mt-4 grid xs:grid-cols-2 gap-4 xs:gap-2">
        <div className="flex flex-col gap-4">
          {includes?.map((inc, i) => (
            <Check key={i} text={inc} />
          ))}
        </div>
        {/* <div className="flex flex-col gap-4">
          <Cross />
          <Cross />
          <Cross />
        </div> */}
      </div>
    </div>
  );
};

export default Includes;
