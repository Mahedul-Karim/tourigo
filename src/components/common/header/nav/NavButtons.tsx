import React from "react";
import { Button } from "@/components/ui/button";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NavButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button className="bg-secondary w-full text-white hover:bg-secondary font-semibold md:rounded-full">
        Login
      </Button>
      <Button
        variant={"outline"}
        className="border-secondary w-full text-secondary font-semibold hover:bg-transparent hover:text-secondary bg-transparent md:rounded-full"
      >
        SignUp
      </Button>
    </div>
  );
};

export default NavButtons;
