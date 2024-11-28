"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Modal from "./Modal";
import SpinnerButton from "../SpinnerButton";
import LoadStripe from "../LoadStripe";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { getPayment, bookTour, deleteBooking } from "@/lib/actions/payment";
import { StripeCardNumberElement } from "@stripe/stripe-js";

interface Props {
  userId: string;
  tourId: string;
  onModalClose: (val: boolean) => void;
  amount: number;
  isLoggedIn: boolean;
  startDate: Date;
  endDate: Date;
  totalPeople: number;
  tourCreator: string;
}

const PaymentModal: React.FC<Props> = ({
  userId,
  tourId,
  onModalClose,
  isLoggedIn,
  startDate,
  endDate,
  totalPeople,
  amount,
  tourCreator,
}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  const handleBooking = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoggedIn) {
      return toast.error("Error!", {
        description: "Login first to book a tour!",
      });
    }

    if (totalPeople === 0) {
      return toast.error("Error!", {
        description: "Amount of guest cannot be empty!",
      });
    }

    if (!stripe || !elements) {
      return;
    }

    try {
      setIsLoading(true);

      // const payment = await getPayment(amount * 100);

      // if (!payment.success) {
      //   throw new Error(payment.message);
      // }

      const booking = await bookTour(
        startDate,
        endDate,
        totalPeople,
        userId,
        tourId,
        tourCreator
      );

      const { error } = await stripe?.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${process.env.NEXT_PUBLIC_BASE_URL}/booking/success`,
        },
        redirect: "if_required",
      });

      if (error) {
        await deleteBooking(booking.id as string);
        throw new Error("An error occured while processing payment!");
      }

      toast.success("Success!", {
        description: "Tour booked successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      setIsLoading(false);
      onModalClose(false);
    }
  };

  return (
    <Modal
      onModalClose={onModalClose}
      className="overflow-y-auto max-h-[479px] showScrollbar"
    >
      <h3 className="text-lg text-dark-3 font-semibold">Make Payment</h3>
      <form onSubmit={handleBooking}>
        <PaymentElement />
        <div className="flex items-center gap-2 justify-end mt-4">
          <Button
            variant={"outline"}
            type="button"
            className="hover:bg-transparent bg-transparent"
            onClick={onModalClose.bind(null, false)}
          >
            Cancel
          </Button>
          <Button disabled={isLoading} className="flex items-center gap-2">
            {isLoading && <SpinnerButton size="size-4" />} Book Now!
          </Button>
        </div>
      </form>
      {/* <div className="py-4 flex flex-col gap-3">
        <div>
          <CardNumberElement
            className="bg-white border border-solid border-border text-base p-3 focus:outline-none rounded-lg w-full relative disabled:bg-grey-5 disabled:cursor-not-allowed text-richblack-700 placeholder:text-richblack-700"
            options={{
              style: {
                base: {
                  color: "#2c333f",
                  fontSize: "15px",
                },
              },
            }}
          />
        </div>
        <div className="flex 400px:flex-row flex-col items-center gap-4 w-full">
          <div className="w-full">
            <CardExpiryElement
              className="bg-white border border-solid border-border text-base p-3 focus:outline-none rounded-lg w-full relative disabled:bg-grey-5 disabled:cursor-not-allowed text-richblack-700 placeholder:text-richblack-700"
              options={{
                style: {
                  base: {
                    color: "#2c333f",
                    fontSize: "15px",
                  },
                },
              }}
            />
          </div>
          <div className="w-full">
            <CardCvcElement
              className="bg-white border border-solid border-border text-base p-3 focus:outline-none rounded-lg w-full relative disabled:bg-grey-5 disabled:cursor-not-allowed text-richblack-700 placeholder:text-richblack-700"
              options={{
                style: {
                  base: {
                    color: "#2c333f",
                    fontSize: "15px",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 justify-end mt-4">
        <Button
          variant={"outline"}
          className="hover:bg-transparent bg-transparent"
          onClick={onModalClose.bind(null, false)}
        >
          Cancel
        </Button>
        <Button
          disabled={isLoading}
          onClick={handleBooking}
          className="flex items-center gap-2"
        >
          {isLoading && <SpinnerButton size="size-4" />} Book Now!
        </Button>
      </div> */}
    </Modal>
  );
};

export default PaymentModal;
