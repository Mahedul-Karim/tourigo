import React from "react";

interface Props {
  Icon: React.ReactElement;
  heading: string;
  text: string;
}

const ListItems: React.FC<Props> = ({ Icon, heading, text }) => {
  return (
    <div className="flex gap-3">
      <div className="size-[50px] xs:size-[84px] grid place-items-center bg-white border border-solid border-border rounded-full shrink-0">
        {Icon}
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="text-sm xs:text-lg font-bold text-dark-1">{heading}</h4>
        <p className="sm:text-base text-xs xs:text-sm text-dark-0">{text}</p>
      </div>
    </div>
  );
};

export default ListItems;
