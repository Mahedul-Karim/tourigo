"use client";

import { NAV_DATA } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Nav: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <nav className={`md:self-stretch flex items-center ${className}`}>
      <ul className="flex items-center gap-2 md:flex-row flex-col justify-center md:justify-normal w-full md:w-auto">
        {NAV_DATA.map((nav, i) => (
          <li key={i} className="h-full w-full md:w-auto">
            <Link
              href={nav.to}
              className={`px-4 ${
                pathname === nav.to ? "bg-primary text-white" : "text-dark-1"
              } flex items-center h-full font-medium justify-center md:justify-normal py-2 md:py-1 rounded-md md:rounded-full transition-all duration-300 hover:bg-light text-[15px]`}
            >
              {nav.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
