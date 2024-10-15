"use client";


import BankDetailsForm from "@/components/common/ui/modal/BankDetailsForm";
import WithdrawModal from "@/components/common/ui/modal/WithdrawModal";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const WithdrawButtons = () => {
  const [open, setOpen] = useState(false);
  const [openForm,setOpenForm]=useState(false)

  return (
    <>
      <Button
        className="bg-primary hover:bg-primary"
        onClick={setOpen.bind(null, true)}
      >
        Withdraw
      </Button>
      <Button
        variant={"outline"}
        className="border-primary hover:border-primary text-primary hover:text-primary bg-transparent"
        onClick={setOpenForm.bind(null,true)}
      >
        Add Withdraw Method
      </Button>
      {open && (
        <WithdrawModal onModalClose={setOpen} onModalAction={()=>{}} />
      )}
      {openForm && <BankDetailsForm onModalClose={setOpenForm} onModalAction={()=>{}} />}
    </>
  );
};

export default WithdrawButtons;
