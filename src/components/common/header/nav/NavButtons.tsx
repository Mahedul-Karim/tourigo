import React from "react";
import { Button } from "@/components/ui/button";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NavButtons: React.FC<Props> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button className="bg-primary hover:bg-secondary w-full text-white font-semibold md:rounded-full transtion-all duration-300">
        Login
      </Button>
      <Button
        variant={"outline"}
        className="border-primary w-full text-primary font-semibold hover:bg-transparent hover:text-secondary hover:border-secondary bg-transparent md:rounded-full transtion-all duration-300"
      >
        SignUp
      </Button>
    </div>
  );
};

export default NavButtons;
