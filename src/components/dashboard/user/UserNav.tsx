"use client";

import React from "react";
import { CiUser } from "react-icons/ci";
import { GoShieldCheck } from "react-icons/go";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { IoChatbubbleOutline } from "react-icons/io5";
import { CiBookmarkCheck, CiHeart } from "react-icons/ci";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCtx } from "@/context/ContextProvider";

const navData = [
  {
    label: "Personal Info",
    Icon: <CiUser className="text-xl" />,
    href: "/user",
  },
  {
    label: "Security",
    Icon: <GoShieldCheck className="text-xl" />,
    href: "/user/security",
  },
  {
    label: "Chats",
    Icon: <IoChatbubbleOutline className="text-xl" />,
    href: "/user/chats",
    isChat: true,
  },
  {
    href: "/admin",
  },
  {
    label: "My Bookings",
    Icon: <CiBookmarkCheck className="text-xl" />,
    href: "/user/bookings",
  },
  {
    label: "My Wishlist",
    Icon: <CiHeart className="text-xl" />,
    href: "/user/wishlist",
  },
];

const UserNav = () => {
  const pathname = usePathname();

  const { user } = useCtx();

  return (
    <>
      <div className="md:mb-6 md:pl-4 w-full">
        <nav className="flex flex-row justify-around w-full md:flex-col gap-4 md:mt-2">
          {navData.map((nav, i) => {
            if (nav.href === "/admin" && user?.role === "admin") {
              return (
                <Link
                  href={"/admin"}
                  className={`flex items-center size-[30px] md:size-auto justify-center md:justify-between gap-2  ${
                    pathname === "/admin"
                      ? "bg-primary md:bg-transparent text-white rounded-full md:text-primary"
                      : "text-dark-1"
                  } relative`}
                  key={i}
                >
                  <p className="flex items-center gap-2 relative">
                    <MdOutlineAdminPanelSettings className="text-xl" />
                    <span className="font-[500] text-[14px] hidden md:inline-block">
                      {" "}
                      {"Admin Dashboard"}
                    </span>
                  </p>
                </Link>
              );
            }
            if (nav.href !== "/admin") {
              return (
                <Link
                  href={nav.href}
                  className={`flex items-center size-[30px] md:size-auto justify-center md:justify-between gap-2  ${
                    pathname === nav.href
                      ? "bg-primary md:bg-transparent text-white rounded-full md:text-primary"
                      : "text-dark-1"
                  } relative`}
                  key={i}
                >
                  <p className="flex items-center gap-2 relative">
                    {nav.Icon}
                    <span className="font-[500] text-[14px] hidden md:inline-block">
                      {" "}
                      {nav.label}
                    </span>
                  </p>
                  {nav.isChat && (
                    <span className="text-xs top-0 -right-[1px] md:text-sm text-white bg-primary size-[15px] md:size-[20px] flex items-center justify-center rounded-full absolute md:static">
                      2
                    </span>
                  )}
                </Link>
              );
            }
          })}
        </nav>
      </div>
    </>
  );
};

export default UserNav;
