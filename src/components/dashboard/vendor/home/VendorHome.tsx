"use client";

import React, { useEffect, useState } from "react";
import { vendorStats } from "@/lib/actions/vendor";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
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
import { ChartConfig } from "@/components/ui/chart";
import VendorHomeSkeleton from "@/components/common/ui/skeleton/VendorHomeSkeleton";
import { toast } from "sonner";
import { useCtx } from "@/context/ContextProvider";

const chartData = [
  { month: "", booked: 0 },
  { month: "", booked: 0 },
  { month: "", booked: 0 },
  { month: "", booked: 0 },
  { month: "", booked: 0 },
  { month: "", booked: 0 },
];

const chartConfig = {
  booked: {
    label: "Booked",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const visitorsData = [
  { month: "January", visited: 186, wishlist: 80 },
  { month: "February", visited: 305, wishlist: 200 },
  { month: "March", visited: 237, wishlist: 120 },
  { month: "April", visited: 73, wishlist: 190 },
  { month: "May", visited: 209, wishlist: 130 },
  { month: "June", visited: 214, wishlist: 140 },
];
const chartVisitorConfig = {
  visited: {
    label: "Visited",
    color: "var(--primary)",
  },
  wishlist: {
    label: "Wishlist",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const VendorHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<{
    earnings: number;
    totalListing: number;
  }>({
    earnings: 0,
    totalListing: 0,
  });
  const [chData, setChData] = useState(chartData);
  const [visitors, setVisitors] = useState(visitorsData);

  const { user } = useCtx();

  const currentMonth = new Date().getMonth();

  useEffect(() => {
    if (!user?.id) {
      return;
    }

    (async () => {
      try {
        setIsLoading(true);
        const res = await vendorStats(user?.id as string);

        if (!res.success) {
          throw new Error(res.message);
        }

        const dataArray = [];
        const visitorsArray = [];

        for (let i = currentMonth - 5; i <= currentMonth; i++) {
          const chartObject = {
            month: month[i],
            booked: Math.round(Math.random() * 300),
          };

          const visitorObject = {
            month: month[i],
            visited: Math.round(Math.random() * 214),
            wishlist: Math.round(Math.random() * 214),
          };
          dataArray.push(chartObject);
          visitorsArray.push(visitorObject);
        }
        setChData(dataArray);
        setVisitors(visitorsArray);

        setData(res.data);
      } catch (err: any) {
        toast.error("Error!", {
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user?.id]);

  if (isLoading) {
    return <VendorHomeSkeleton />;
  }

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={CiWallet}
          label="Earnings"
          value={formatCurrency(data?.earnings)}
        />
        <StatsCard
          Icon={HiOutlineClipboardDocumentList}
          label="Total Listing"
          value={data?.totalListing}
        />
        <StatsCard
          Icon={IoHeartOutline}
          label="Wishlist"
          value={Math.round(Math.random() * 100)}
        />
        <StatsCard
          Icon={BsBarChart}
          label="Visitors"
          value={Math.round(Math.random() * 500)}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-md border border-solid border-border p-4">
          <BookingChart
            chartData={chData}
            chartConfig={chartConfig}
            dataKey="booked"
            title="Booking Stats"
          />
        </div>
        <div className="bg-white rounded-md border border-solid border-border p-4">
          <BookingPie />
        </div>
      </div>
      <div className="mt-6 p-4 bg-white rounded-md border border-solid border-border">
        <SectionHeading>Viewed</SectionHeading>
        <VisitorsBar
          dataKey1="visited"
          datakey2="wishlist"
          chartData={visitors}
          chartConfig={chartVisitorConfig}
        />
      </div>
      <div className="mt-6 p-4 bg-white rounded-md border border-solid border-border">
        <SectionHeading>Recent Bookings</SectionHeading>
        <RecentBookings />
      </div>
    </>
  );
};

export default VendorHome;
