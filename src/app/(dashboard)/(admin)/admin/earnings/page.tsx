import React from "react";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import { CiWallet } from "react-icons/ci";
import { formatCurrency } from "@/lib/utils";
import { LuAreaChart } from "react-icons/lu";
import { adminAllEarnings } from "@/lib/actions/admin";
import SalesChart from "@/components/dashboard/vendor/earnings/SalesChart";
import AllWithdraws from "@/components/dashboard/admin/earnings/AllWithdraws";

const Page =async () => {

  const { totalEarnings,salesThisMonth,withdraws } = await adminAllEarnings()

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          Icon={CiWallet}
          label="Total Earnings"
          value={formatCurrency(totalEarnings)}
        />
        <StatsCard
          Icon={LuAreaChart}
          label="Sales this month"
          value={formatCurrency(salesThisMonth)}
        />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <SalesChart />
      </div>
      {<AllWithdraws withdraws={withdraws}/>}
    </>
  );
};

export default Page;
