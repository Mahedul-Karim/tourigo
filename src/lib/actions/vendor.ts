"use server";

import prisma from "../prisma";

const vendorStats = async (userId: string) => {
  try {
    const data = await prisma.booking.findMany({
      where: {
        tourCreator: userId,
        status: {
          equals: "completed",
          mode: "insensitive",
        },
      },
      include: {
        tour: {
          select: {
            price: true,
          },
        },
      },
    });

    const stateObject: any = {};

    if (!data || data.length === 0) {
      stateObject.earnings = 0;
    }

    stateObject.earnings = data.reduce((acc, stat) => acc + stat.tour.price, 0);

    const allListings = await prisma.tour.count({
      where: {
        creatorId: userId,
      },
    });

    if (!allListings) {
      stateObject.totalListing = 0;
    } else {
      stateObject.totalListing = allListings;
    }

    return {
      success: true,
      data: stateObject,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong while fetching data!",
    };
  }
};

const vendorListings = async (userId: string) => {
  try {
    if (!userId) {
      throw new Error("User must be logged in!");
    }

    const tours = await prisma.tour.findMany({
      where: {
        creatorId: userId,
      },
    });

    if (!tours || tours.length === 0) {
      return {
        success: true,
        tours: [],
      };
    }

    return {
      success: true,
      tours,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: err.message,
    };
  }
};

const addBankDetails = async ({
  name,
  country,
  swiftCode,
  bankAccountNumber,
  bankHolderName,
  userId,
}: {
  [key: string]: string;
}) => {
  try {
    const bankData = await prisma.bankDetails.create({
      data: {
        name,
        country,
        swiftCode,
        bankAcccountNumber: bankAccountNumber,
        bankHolderName,
        userId,
      },
    });

    return {
      success: true,
      bankData,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

const getVendorEarnings = async (userId: string) => {
  try {
    const bookingPromise = prisma.booking.findMany({
      where: {
        tourCreator: userId,
        status: {
          equals: "completed",
          mode: "insensitive",
        },
      },
      include: {
        tour: {
          select: {
            price: true,
          },
        },
      },
    });

    const bankDetailsPromise = prisma.bankDetails.findUnique({
      where: {
        userId,
      },
    });

    const withdrawPromise = prisma.withdraw.aggregate({
      where: {
        userId,
      },
      _sum: {
        amount: true,
      },
    });

    const withdrawPendingPromise = prisma.withdraw.aggregate({
      where: {
        userId,
        status: {
          equals: "pending",
          mode: "insensitive",
        },
      },
      _sum: {
        amount: true,
      },
    });

    const [bookingData, bankDetailsData, withdrawData, withdrawPendingData] =
      await Promise.all([
        bookingPromise,
        bankDetailsPromise,
        withdrawPromise,
        withdrawPendingPromise,
      ]);

    const earningObject: any = {};

    const totalEarnings: number =
      bookingData?.reduce((acc, stat) => acc + stat.tour.price, 0) || 0;

    earningObject.earnings = totalEarnings;

    earningObject.bankData = !bankDetailsData ? null : bankDetailsData;

    earningObject.availableBalance = !withdrawData._sum.amount
      ? totalEarnings
      : totalEarnings - withdrawData._sum.amount;

    earningObject.withdrawPending = !withdrawPendingData._sum.amount
      ? 0
      : withdrawPendingData._sum.amount;

    return {
      success: true,
      data: earningObject,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong while fetching data",
    };
  }
};

const requestForWithdraw = async (
  userId: string,
  accountNumber: string,
  amount: number
) => {
  try {
    await prisma.withdraw.create({
      data: {
        userId,
        accountNumber,
        amount,
        status: "pending",
      },
    });

    return {
      success: true,
      message: "Withdraw request has been submitted",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

const vendorReviews = async (creatorId: string, isAdmin: boolean) => {
  try {
    const allReviewPromise = !isAdmin
      ? prisma.review.findMany({
          where: {
            creatorId,
          },
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                image: true,
              },
            },
          },
        })
      : prisma.review.findMany({
          include: {
            user: {
              select: {
                firstName: true,
                lastName: true,
                image: true,
              },
            },
          },
        });

    const averageRatingPromise = prisma.review.aggregate({
      where: {
        creatorId,
      },
      _avg: {
        total: true,
      },
    });

    const [allReviews, averageRatings] = await Promise.all([
      allReviewPromise,
      averageRatingPromise,
    ]);

    const data = await Promise.all(
      [5, 4, 3, 2, 1].map(async (num) => {
        const res = await prisma.review.count({
          where: {
            creatorId,
            total: num,
          },
        });
        return {
          value: res,
          label: num,
        };
      })
    );

    return {
      success: true,
      data,
      allReviews: allReviews.length === 0 || !allReviews ? [] : allReviews,
      averageRatings: averageRatings._avg.total,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

export {
  vendorStats,
  vendorListings,
  addBankDetails,
  getVendorEarnings,
  requestForWithdraw,
  vendorReviews,
};
