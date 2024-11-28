"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { toast } from "sonner";
import { getPayment, bookTour } from "@/lib/actions/payment";

import React, { useCallback, useEffect, useState } from "react";
import LinearProgress from "./LinearProgress";

const stripeLoaded = loadStripe(process.env.NEXT_PUBLIC_STRIPE as string);

const LoadStripe = ({
  children,
  amount,
}: {
  children: React.ReactNode;
  amount: number;
}) => {
  const [clientSecret, setClientSecret] = useState<string | null | undefined>(
    ""
  );
  const [isLoading, setIsLoading] = useState(false);

  const getClientSecret = useCallback(async () => {
    try {
      setIsLoading(true);

      const data:
        | {
            success: boolean;
            client_secret: string | null;
            message?: undefined;
          }
        | {
            success: boolean;
            message: string;
            client_secret?: undefined;
          } = await getPayment(amount);

      if (!data.success) {
        throw new Error();
      }

      setClientSecret(data.client_secret);
    } catch (err: any) {
      setClientSecret("");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getClientSecret();
  }, [amount, getClientSecret]);

  if (!clientSecret && !isLoading) {
    return null;
  }

  return (
    <>
      {isLoading ? (
        <LinearProgress />
      ) : (
        clientSecret && (
          <Elements
            stripe={stripeLoaded}
            options={{
              clientSecret: clientSecret as any,
              appearance: {
                theme: "stripe",
              },
            }}
            key={clientSecret}
          >
            {children}
          </Elements>
        )
      )}
    </>
  );
};

export default LoadStripe;
