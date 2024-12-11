"use server";

import prisma from "../prisma";

const vendorStats = async (userId: string) => {
  try {
    const data = await prisma.booking.findMany({
      where: {
        tourCreator: userId,
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

export { vendorStats,vendorListings };
