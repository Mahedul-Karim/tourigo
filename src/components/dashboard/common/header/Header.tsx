'use client'

import Container from "@/components/common/ui/Container";
import Link from "next/link";
import React from "react";
import MobileNav from "../nav/MobileNav";
import UserAvatar from "@/components/common/ui/UserAvatar";
import { useCtx } from "@/context/ContextProvider";

interface Props {
  isAdmin?: boolean;
}

const Header: React.FC<Props> = ({ isAdmin }) => {

  const { user } = useCtx()

  return (
    <header className="bg-white border-b border-solid border-border py-4">
      <Container className="flex items-center justify-between">
        <div>
          <MobileNav isAdmin={isAdmin} />
        </div>
        <div>
          <Link href="/user">
            <UserAvatar src={user?.image?.url} fallback={user && user?.firstName?.[0]+user?.lastName?.[0]}/>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
