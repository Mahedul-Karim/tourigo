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
import { adminHome } from "@/lib/actions/admin";
import { formatCurrency } from "@/lib/utils";


const chartConfig = {
  joined: {
    label: "Joined",
    color: "var(--primary)",
  },
} satisfies ChartConfig;


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

const Page = async () => {
  const {
    totalListings,
    totalUsers,
    totalVendors,
    totalEarnings,
    chartData,
    visitorsData,
  } = await adminHome();

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={HiOutlineClipboardDocumentList}
          label="Total Listing"
          value={totalListings}
        />
        <StatsCard Icon={LuUser2} label="Total Users" value={totalUsers} />
        <StatsCard Icon={LuUserCog} label="Total Vendors" value={totalVendors} />
        <StatsCard
          Icon={HiOutlineCurrencyDollar}
          label="Total Earnings"
          value={formatCurrency(totalEarnings)}
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
