import React from "react";

interface Props {
  icon: React.ReactElement;
  label: string;
  details: string;
}

const Badges: React.FC<Props> = ({ icon, label, details }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-white border border-solid border-border rounded-lg p-2 text-dark-1">
        {icon}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-xs md:text-sm text-dark-1">{label}</p>
        <p className="text-[10px] md:text-xs text-dark-0">{details}</p>
      </div>
    </div>
  );
};

export default Badges;
