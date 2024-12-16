"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { FiTrash } from "react-icons/fi";
import { requestForWithdraw } from "@/lib/actions/vendor";
import { useCtx } from "@/context/ContextProvider";
import SpinnerButton from "../SpinnerButton";
import { toast } from "sonner";

interface Props {
  onModalClose: (val: boolean) => void;
  bankDetails: any;
  availableBalance: number;
  setEarningData: (val: any) => void;
}

const WithdrawModal: React.FC<Props> = ({
  onModalClose,
  bankDetails,
  availableBalance,
  setEarningData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const { user } = useCtx();

  const handleWithdraw = async () => {
    if (+amount > availableBalance) {
      toast.error("Error!", {
        description: "Withdraw amount can not be larger than available balance",
      });
      return;
    }

    try {

      setIsLoading(true)

      const userId = user?.id;

      const res = await requestForWithdraw(
        userId as string,
        bankDetails?.bankAcccountNumber,
        +amount
      );

      if (!res.success) {
        throw new Error(res.message);
      }

      setEarningData((prev: any) => ({
        ...prev,
        availableBalance: availableBalance - Number(amount),
        withdrawPending: amount,
      }));
      onModalClose(false)
      toast.success("Success!", {
        description: res.message,
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }finally{
      setIsLoading(false);
    }
  };

  return (
    <Modal className="" onModalClose={onModalClose}>
      <div className="flex items-center justify-end">
        <button onClick={onModalClose.bind(null, false)}>
          <RxCross1 className="text-lg" />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-xl sm:text-2xl font-medium text-dark-1">
          Available Withdraw Method
        </h3>
        {!bankDetails ? (
          <p>No withdraw method is available</p>
        ) : (
          <>
            {" "}
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1 text-sm text-dark-1 sm:text-base">
                <p>
                  Account Number: <span>{bankDetails?.bankAcccountNumber}</span>
                </p>
                <p>
                  Bank Name: <span>{bankDetails?.name}</span>
                </p>
                <p>
                  Available balance: $<span>{availableBalance}</span>
                </p>
              </div>
              <button>
                <FiTrash className="text-lg" />
              </button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <input
                type="number"
                className="border border-solid border-border rounded-md focus:outline-none px-2 py-1 w-[100px]"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <Button
                className="bg-primary hover:bg-primary disabled:bg-disabled flex items-center gap-2"
                disabled={isLoading}
                onClick={handleWithdraw}
              >
                {isLoading && <SpinnerButton />} Withdraw
              </Button>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

export default WithdrawModal;
