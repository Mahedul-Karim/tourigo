import React from "react";
import Sidebar from "@/components/dashboard/common/nav/Sidebar";
import { RxDashboard } from "react-icons/rx";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineTicket,
  HiOutlineBell,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { LuUser2,LuUsers } from "react-icons/lu";
import { IoMdStarOutline } from "react-icons/io";
const NAV_LINKS = [
  {
    href: "/admin",
    label: "Dashboard",
    icon: <RxDashboard className="text-xl" />,
  },
  {
    href: "/admin/all-listings",
    label: "Listings",
    icon: <HiOutlineClipboardDocumentList className="text-xl" />,
  },

  {
    href: "/admin/all-bookings",
    label: "Bookings",
    icon: <HiOutlineTicket className="text-xl" />,
  },
  {
    href: "/admin/earnings",
    label: "Earnings",
    icon: <HiOutlineCurrencyDollar className="text-xl" />,
  },
  {
    href: "/admin/users",
    label: "Users",
    icon: <LuUser2 className="text-xl" />,
  },
  {
    href: "/admin/vendors",
    label: "Vendors",
    icon: <LuUsers className="text-xl" />,
  },
  {
    href: "/admin/all-reviews",
    label: "Reviews",
    icon: <IoMdStarOutline className="text-xl" />,
  },
];

interface Props {
  className?: string;
  onClick?: (val: boolean) => void;
}

const AdminNav: React.FC<Props> = ({ className, onClick }) => {
  return (
    <aside className={`${className}`}>
      <Sidebar navItems={NAV_LINKS} onClick={onClick} />
    </aside>
  );
};

export default AdminNav;
