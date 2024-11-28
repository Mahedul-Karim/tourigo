"use client";

import Calendar from "@/components/common/ui/Calendar";
import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";

import TotalGuest from "./TotalGuest";
import { Button } from "@/components/ui/button";
import { formatCurrency, formatDate } from "@/lib/utils";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";
import PaymentModal from "@/components/common/ui/modal/PaymentModal";
import LoadStripe from "@/components/common/ui/LoadStripe";

interface Props {
  id: string;
  price: number;
  duration: string;
  groupSize: number;
  creatorId: string;
}

const Sidebar: React.FC<Props> = ({
  id,
  price,
  duration,
  groupSize,
  creatorId,
}) => {
  const [startDate, setStartDate] = useState(Date.now());

  const [open, setOpen] = useState(false);

  const [adultGuest, setAdultGuest] = useState(0);
  const [childGuest, setChildGuest] = useState(0);

  const { user, isLoggedIn } = useCtx();

  const numberOfDays: number = Number(duration?.match(/\d+/)?.[0]);

  const endDate = startDate + numberOfDays * 24 * 60 * 60 * 1000;

  const handleGuestIncrese = (type: string) => {
    if (adultGuest + childGuest === groupSize) {
      return;
    }

    type === "adult"
      ? setAdultGuest((prev) => prev + 1)
      : setChildGuest((prev) => prev + 1);
  };

  const handleGuestDecrese = (type: string) => {
    if (
      (type === "adult" && adultGuest === 0) ||
      (type === "child" && childGuest === 0)
    ) {
      return;
    }
    type === "adult"
      ? setAdultGuest((prev) => prev - 1)
      : setChildGuest((prev) => prev - 1);
  };

  return (
    <>
      <div className="bg-white border border-solid border-border rounded-lg h-max px-4 py-8">
        <div className="flex gap-2 items-center text-dark-1">
          <span className="text-xs">From</span>
          <p className="font-medium text-base xs:text-lg">
            {formatCurrency(price)}
          </p>
        </div>
        <div className="my-4">
          <div className="flex items-center border border-solid border-border rounded-lg px-4 py-3 gap-2">
            <div className="p-2 rounded-lg bg-light">
              <CiCalendarDate className="text-lg xs:text-xl text-dark-1" />
            </div>
            <div className="flex flex-col text-dark-1">
              <p className="text-xs xs:text-sm">From</p>
              <p className="text-[10px] xs:text-xs whitespace-nowrap text-ellipsis overflow-clip">
                {formatDate(new Date(startDate))}-
                {formatDate(new Date(endDate))}
              </p>
            </div>
          </div>
        </div>
        <div className="my-4">
          <Calendar startDate={startDate} setStartDate={setStartDate} />
        </div>
        <div className="mb-4 flex flex-col gap-3">
          <TotalGuest
            label={"Adult"}
            guestNumber={adultGuest}
            onIncrease={() => handleGuestIncrese("adult")}
            onDecrese={() => handleGuestDecrese("adult")}
          />
          <TotalGuest
            label={"Child"}
            guestNumber={childGuest}
            onIncrease={() => handleGuestIncrese("child")}
            onDecrese={() => handleGuestDecrese("child")}
          />
        </div>
        <div className="border-t border-solid border-border mb-4" />
        <div className="flex items-center justify-between text-dark-1 text-base xs:text-lg mb-4">
          <p>Total</p>
          <p>{formatCurrency(price)}</p>
        </div>
        {user?.id !== creatorId && (
          <Button
            size="lg"
            className="w-full bg-primary"
            onClick={() => setOpen(true)}
          >
            Book Now
          </Button>
        )}
      </div>
      {open && (
        <LoadStripe amount={price*100}>
          <PaymentModal
            userId={user?.id as string}
            tourId={id}
            onModalClose={setOpen}
            amount={price}
            isLoggedIn={isLoggedIn}
            startDate={new Date(startDate)}
            endDate={new Date(endDate)}
            totalPeople={adultGuest + childGuest}
            tourCreator={creatorId}
          />
        </LoadStripe>
      )}
    </>
  );
};

export default Sidebar;
