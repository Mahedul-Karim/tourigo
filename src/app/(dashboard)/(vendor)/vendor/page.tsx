import Container from "@/components/common/ui/Container";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import React from "react";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoHeartOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";
import { formatCurrency } from "@/lib/utils";
import { BsBarChart } from "react-icons/bs";
import BookingChart from "@/components/dashboard/vendor/home/BookingChart";
import BookingPie from "@/components/dashboard/vendor/home/BookingPie";
import SectionHeading from "@/components/dashboard/common/SectionHeading";
import VisitorsBar from "@/components/dashboard/vendor/home/VisitorsBar";
import RecentBookings from "@/components/dashboard/vendor/home/RecentBookings";

const Page = () => {
  return (
    <Container className="py-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={CiWallet}
          label="Earnings"
          value={formatCurrency(1200)}
        />
        <StatsCard
          Icon={HiOutlineClipboardDocumentList}
          label="Total Listing"
          value="66"
        />
        <StatsCard
          Icon={IoHeartOutline}
          label="Wishlist"
          value="66"
        />
        <StatsCard
          Icon={BsBarChart}
          label="Visitors"
          value="66"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-md border border-solid border-border p-4">
          <BookingChart />
        </div>
        <div className="bg-white rounded-md border border-solid border-border p-4">
          <BookingPie />
        </div>
      </div>
      <div className="mt-6 p-4 bg-white rounded-md border border-solid border-border">
        <SectionHeading>Viewed</SectionHeading>
        <VisitorsBar />
      </div>
      <div className="mt-6 p-4 bg-white rounded-md border border-solid border-border">
        <SectionHeading>Recent Bookings</SectionHeading>
        <RecentBookings />
      </div>
    </Container>
  );
};

export default Page;
