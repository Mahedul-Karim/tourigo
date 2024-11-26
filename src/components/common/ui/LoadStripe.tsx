"use client";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import React from "react";

interface Props {
  children: React.ReactNode;
}

const LoadStripe: React.FC<Props> = ({ children }) => {
  const stripeLoaded = loadStripe(process.env.NEXT_PUBLIC_STRIPE as string);

  return <Elements stripe={stripeLoaded}>{children}</Elements>;
};

export default LoadStripe;
