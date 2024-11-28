import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import Nav from "./Nav";
import NavButtons from "./NavButtons";
import { useCtx } from "@/context/ContextProvider";

type Props = React.HTMLAttributes<HTMLDivElement>;

const MobileNav: React.FC<Props> = ({ className }) => {
  const { isLoggedIn } = useCtx();

  return (
    <div className={`${className}`}>
      <Sheet>
        <SheetTrigger className="text-dark-1">
          <div className="w-[30px] flex flex-col gap-1 cursor-pointer">
            <span className="bg-primary w-full h-[3px] rounded-md" />
            <span className="bg-primary w-[80%] h-[3px] rounded-md self-end" />
            <span className="bg-primary w-full h-[3px] rounded-md" />
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetHeader className="h-full">
            <SheetDescription />
            <SheetClose asChild>
              <div className="mt-12 h-full flex flex-col justify-between">
                <Nav className="flex-col" />
                {!isLoggedIn && <NavButtons className="flex-col" />}
              </div>
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
