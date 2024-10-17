import Container from "@/components/common/ui/Container";
import Link from "next/link";
import React from "react";
import MobileNav from "../nav/MobileNav";
import UserAvatar from "@/components/common/ui/UserAvatar";

interface Props {
  isAdmin?: boolean;
}

const Header: React.FC<Props> = ({ isAdmin }) => {
  return (
    <header className="bg-white border-b border-solid border-border py-4">
      <Container className="flex items-center justify-between">
        <div>
          <MobileNav isAdmin={isAdmin} />
        </div>
        <div>
          <Link href="/user">
            <UserAvatar />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
