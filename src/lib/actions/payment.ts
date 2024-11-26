"use server";

import Stripe from "stripe";
import prisma from "../prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET as string);

const getPayment = async (amount: number) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
    });

    return {
      success: true,
      client_secret: paymentIntent.client_secret,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong! Please try again later!",
    };
  }
};

const bookTour = async (
  startDate: Date,
  endDate: Date,
  totalPeople: number,
  userId: string,
  tourId: string
) => {
  try {
    await prisma.booking.create({
      data: {
        startDate,
        endDate,
        totalPeople,
        userId,
        tourId,
        status: "paid",
      },
    });

    return {
      success: true,
      message: "Tour booked successfully!",
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong! Please try again later!",
    };
  }
};

export { getPayment, bookTour };
