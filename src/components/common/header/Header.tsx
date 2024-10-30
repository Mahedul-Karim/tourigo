"use client";

import React, { useEffect, useRef } from "react";
import Container from "../ui/Container";
import Logo from "../Logo";
import Nav from "./nav/Nav";
import NavButtons from "./nav/NavButtons";
import UserAvatar from "../ui/UserAvatar";
import MobileNav from "./nav/MobileNav";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useCtx } from "@/context/ContextProvider";

const Header = () => {
  const pathname = usePathname();

  const headerRef = useRef<HTMLDivElement | null>(null);

  const { user, isLoggedIn } = useCtx();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        headerRef.current?.classList.add("sticky-header");
      } else {
        headerRef.current?.classList.remove("sticky-header");
      }
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 h-[70px] z-[3] w-full ${
        pathname !== "/" && "bg-white border-b border-solid border-border"
      }`}
      ref={headerRef}
    >
      <Container className="flex items-center justify-between h-full">
        <Logo />

        <Nav className="hidden md:flex" />

        <div className="flex items-center gap-2">
          {!isLoggedIn ? (
            <NavButtons className="hidden md:flex" />
          ) : (
            <Link href={"/user"}>
              <UserAvatar src={user?.image?.url} fallback={user && user?.firstName?.[0]+user?.lastName?.[0]}/>
            </Link>
          )}
          <MobileNav className="block md:hidden" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
