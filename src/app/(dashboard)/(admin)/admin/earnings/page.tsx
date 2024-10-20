import React from "react";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import { CiWallet } from "react-icons/ci";
import { formatCurrency } from "@/lib/utils";
import { LuAreaChart } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import SalesChart from "@/components/dashboard/vendor/earnings/SalesChart";
import AllWithdraws from "@/components/dashboard/admin/earnings/AllWithdraws";

const Page = () => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={CiWallet}
          label="Total Earnings"
          value={formatCurrency(1200)}
        />
        <StatsCard
          Icon={LuAreaChart}
          label="Sales this month"
          value={formatCurrency(1200)}
        />
        <StatsCard
          Icon={MdAccountBalance}
          label="Available Balance"
          value={formatCurrency(1200)}
        />
        <StatsCard
          Icon={IoCashOutline}
          label="Withdraw Pending"
          value={formatCurrency(1200)}
        />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <SalesChart />
      </div>
      <AllWithdraws />
    </>
  );
};

export default Page;
