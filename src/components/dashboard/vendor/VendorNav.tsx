import React from "react";
import Sidebar from "@/components/dashboard/common/nav/Sidebar";
import { RxDashboard } from "react-icons/rx";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineTicket,
  HiOutlineBell,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { IoChatbubblesOutline, IoAddCircleOutline } from "react-icons/io5";
import { IoMdStarOutline } from "react-icons/io";
const NAV_LINKS = [
  {
    href: "/vendor",
    label: "Dashboard",
    icon: <RxDashboard className="text-xl" />,
  },
  {
    href: "/vendor/listings",
    label: "Listings",
    icon: <HiOutlineClipboardDocumentList className="text-xl" />,
  },
  {
    href: "/vendor/add-listings",
    label: "Add Listings",
    icon: <IoAddCircleOutline className="text-xl" />,
  },
  {
    href: "/vendor/chats",
    label: "Chats",
    icon: <IoChatbubblesOutline className="text-xl" />,
  },
  {
    href: "/vendor/bookings",
    label: "Bookings",
    icon: <HiOutlineTicket className="text-xl" />,
  },
  {
    href: "/vendor/activites",
    label: "Activites",
    icon: <HiOutlineBell className="text-xl" />,
  },
  {
    href: "/vendor/earnings",
    label: "Earnings",
    icon: <HiOutlineCurrencyDollar className="text-xl" />,
  },
  {
    href: "/vendor/reviews",
    label: "Reviews",
    icon: <IoMdStarOutline className="text-xl" />,
  },
];

interface Props {
  className?: string;
  onClick?: (val: boolean) => void;
}

const VendorNav: React.FC<Props> = ({ className, onClick }) => {
  return (
    <aside className={`${className}`}>
      <Sidebar navItems={NAV_LINKS} onClick={onClick} />
    </aside>
  );
};

export default VendorNav;
