import React from "react";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import {
  HiOutlineClipboardDocumentList,
  HiOutlineCurrencyDollar,
} from "react-icons/hi2";
import { LuUser2, LuUserCog } from "react-icons/lu";
import { ChartConfig } from "@/components/ui/chart";
import BookingChart from "@/components/dashboard/vendor/home/BookingChart";
import SectionHeading from "@/components/dashboard/common/SectionHeading";
import VisitorsBar from "@/components/dashboard/vendor/home/VisitorsBar";

const chartData = [
  { month: "January", joined: 80 },
  { month: "February", joined: 150 },
  { month: "March", joined: 100 },
  { month: "April", joined: 200 },
  { month: "May", joined: 130 },
  { month: "June", joined: 140 },
];

const chartConfig = {
  joined: {
    label: "Joined",
    color: "var(--primary)",
  },
} satisfies ChartConfig;


const visitorsData = [
  { month: "January", newCustomers: 186, existingCustomers: 80 },
  { month: "February", newCustomers: 305, existingCustomers: 200 },
  { month: "March", newCustomers: 237, existingCustomers: 120 },
  { month: "April", newCustomers: 73, existingCustomers: 190 },
  { month: "May", newCustomers: 209, existingCustomers: 130 },
  { month: "June", newCustomers: 214, existingCustomers: 140 },
];
const chartVisitorConfig = {
  newCustomers: {
    label: "New Customers",
    color: "var(--primary)",
  },
  existingCustomers: {
    label: "Existing Customers",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={HiOutlineClipboardDocumentList}
          label="Total Listing"
          value="66"
        />
        <StatsCard Icon={LuUser2} label="Total Users" value="66" />
        <StatsCard Icon={LuUserCog} label="Total Vendors" value="66" />
        <StatsCard
          Icon={HiOutlineCurrencyDollar}
          label="Total Earnings"
          value="$66,000"
        />
      </div>
      {/* <div className="grid md:grid-cols-2 gap-4 mt-6"> */}
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <BookingChart
          chartData={chartData}
          chartConfig={chartConfig}
          dataKey="joined"
          title="User joined"
        />
      </div>
      {/* </div> */}
      <div className="mt-6 p-4 bg-white rounded-md border border-solid border-border">
        <SectionHeading>Customers</SectionHeading>
        <VisitorsBar
          dataKey1="newCustomers"
          datakey2="existingCustomers"
          chartData={visitorsData}
          chartConfig={chartVisitorConfig}
        />
      </div>
    </>
  );
};

export default Page;
