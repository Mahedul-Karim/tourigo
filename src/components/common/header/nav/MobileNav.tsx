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

type Props = React.HTMLAttributes<HTMLDivElement>;

const MobileNav: React.FC<Props> = ({ className }) => {
  return (
    <div className={`${className}`}>
      <Sheet>
        <SheetTrigger className="text-dark-1">
          <GiHamburgerMenu size={26} />
        </SheetTrigger>
        <SheetContent>
          <SheetTitle className="sr-only">Menu</SheetTitle>
          <SheetHeader className="mt-12 h-full justify-between">
            <SheetDescription />
            <SheetClose>
              <Nav className="flex-col" />
              <NavButtons className="flex-col" />
            </SheetClose>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
