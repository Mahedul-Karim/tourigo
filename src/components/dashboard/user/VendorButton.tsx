import React from "react";
import { Button } from "@/components/ui/button";

type Props = React.HTMLAttributes<HTMLDivElement>;

const VendorButton: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Button
        className={`w-full bg-white hover:bg-white border-primary text-xs sm:text-sm sm:px-4 px-2 md:py-2 py-1 text-primary hover:text-primary`}
        variant={"outline"}
      >
        Become a vendor
      </Button>
    </div>
  );
};

export default VendorButton;
