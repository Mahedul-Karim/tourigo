import React from "react";

import { IconType } from "react-icons/lib";

interface Props {
  Icon: IconType;
  label: string;
  value: string | number;
}

const StatsCard: React.FC<Props> = ({ Icon, label,value }) => {
  return (
    <div className="flex items-center gap-2 bg-white border border-solid border-border p-3 xs:p-4 rounded-md">
      <div className="p-2 bg-primary-2 rounded-full text-primary">
        <Icon className="text-xl xs:text-3xl" />
      </div>
      <div className="flex flex-col">
        <p className="text-dark-0 text-[10px] xs:text-sm">{label}</p>
        <p className="text-sm xs:text-xl text-dark-1 font-semibold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
