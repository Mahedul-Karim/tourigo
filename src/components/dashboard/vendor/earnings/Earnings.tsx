"use client";

import React, { useEffect, useState } from "react";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import { CiWallet } from "react-icons/ci";
import { formatCurrency } from "@/lib/utils";
import { LuAreaChart } from "react-icons/lu";
import { MdAccountBalance } from "react-icons/md";
import { IoCashOutline } from "react-icons/io5";
import WithdrawButtons from "@/components/dashboard/vendor/earnings/WithdrawButtons";
import SalesChart from "@/components/dashboard/vendor/earnings/SalesChart";
import VendorEarningsSkeleton from "@/components/common/ui/skeleton/VendorEarningsSkeleton";
import { getVendorEarnings } from "@/lib/actions/vendor";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";

type BankData = {
  [key: string]: string;
};

type EarningData = {
  earnings: number;
  availableBalance: number;
  withdrawPending: number;
};

const Earnings = () => {
  const [bankDetails, setBankDetails] = useState<BankData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [earningData, setEarningData] = useState<EarningData>({
    earnings: 0,
    availableBalance: 0,
    withdrawPending: 0,
  });

  const { user } = useCtx();

  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      try {
        const res = await getVendorEarnings(user?.id);

        if (!res.success) {
          throw new Error(res.message);
        }

        const { bankData, earnings, availableBalance, withdrawPending } =
          res.data;

        setBankDetails(bankData);
        setEarningData({ earnings, availableBalance, withdrawPending });
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
    return <VendorEarningsSkeleton />;
  }

  return (
    <>
      <div className="flex items-center justify-end gap-4 mb-6">
        <WithdrawButtons
          bankDetails={bankDetails}
          setBankDetails={setBankDetails}
          availableBalance={earningData.availableBalance}
          setEarningData={setEarningData}
        />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatsCard
          Icon={CiWallet}
          label="Total Earnings"
          value={formatCurrency(earningData.earnings)}
        />
        <StatsCard
          Icon={LuAreaChart}
          label="Sales this month"
          value={formatCurrency(Math.round(Math.random() * 500))}
        />
        <StatsCard
          Icon={MdAccountBalance}
          label="Available Balance"
          value={formatCurrency(earningData.availableBalance)}
        />
        <StatsCard
          Icon={IoCashOutline}
          label="Withdraw Pending"
          value={formatCurrency(earningData.withdrawPending)}
        />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <SalesChart />
      </div>
    </>
  );
};

export default Earnings;
