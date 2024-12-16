"use client";

import BankDetailsForm from "@/components/common/ui/modal/BankDetailsForm";
import WithdrawModal from "@/components/common/ui/modal/WithdrawModal";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

interface Props {
  setBankDetails: (val: any) => void;
  bankDetails: { [key: string]: string } | null;
  availableBalance: number;
  setEarningData: (val: any) => void;
}

const WithdrawButtons: React.FC<Props> = ({
  bankDetails,
  setBankDetails,
  availableBalance,
  setEarningData,
}) => {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  return (
    <>
      <Button
        className="bg-primary hover:bg-primary"
        onClick={setOpen.bind(null, true)}
      >
        Withdraw
      </Button>
      {!bankDetails && (
        <Button
          variant={"outline"}
          className="border-primary hover:border-primary text-primary hover:text-primary bg-transparent"
          onClick={setOpenForm.bind(null, true)}
        >
          Add Withdraw Method
        </Button>
      )}
      {open && (
        <WithdrawModal
          onModalClose={setOpen}
          bankDetails={bankDetails}
          availableBalance={availableBalance}
          setEarningData={setEarningData}
        />
      )}
      {openForm && (
        <BankDetailsForm
          onModalClose={setOpenForm}
          setBankDetails={setBankDetails}
        />
      )}
    </>
  );
};

export default WithdrawButtons;
