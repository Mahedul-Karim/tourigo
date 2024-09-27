'use client';

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Props = React.HTMLAttributes<HTMLDivElement>;

const NavButtons: React.FC<Props> = ({ className }) => {

  const router = useRouter()

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button className="bg-primary hover:bg-zinc-900 w-full text-white font-semibold md:rounded-full transtion-all duration-300" onClick={()=>router.push('/login')}>
        Login
      </Button>
      <Button
        variant={"outline"}
        className="border-primary w-full text-primary font-semibold hover:bg-transparent hover:text-zinc-900 hover:border-zinc-900 bg-transparent md:rounded-full transtion-all duration-300"
        onClick={()=>router.push('/sign-up')}
      >
        SignUp
      </Button>
    </div>
  );
};

export default NavButtons;
