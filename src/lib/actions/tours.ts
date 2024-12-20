"use server";

import { Status } from "@prisma/client";
import prisma from "../prisma";
import {
  revalidatePath,
  unstable_cache as cache,
  revalidateTag,
} from "next/cache";

const updateTourStatus = async (updateTo: Status, id: string, path: string) => {
  try {
    await prisma.tour.update({
      where: {
        id,
      },
      data: {
        status: updateTo,
      },
    });

    revalidateTag("allTours");

    return {
      success: true,
      message: "Tour status updated!",
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

const adminAllTours = cache(
  async () => {
    try {
      const tours = await prisma.tour.findMany({
        where: {},
        select: {
          id: true,
          tourName: true,
          price: true,
          status: true,
          createdAt: true,
          gallery: {
            select: {
              url: true,
            },
          },
          creatorId: true,
        },

        orderBy: {
          createdAt: "desc",
        },
      });

      if (!tours || tours.length === 0) {
        return {
          success: true,
          tours: [],
        };
      }

      const copiedTours: {
        id: string;
        tourName: string;
        price: number;
        status: string;
        gallery: {
          url: string;
        }[];
        creatorId: string;
        createdAt: Date;
        creator?: {
          firstName: string;
          lastName: string;
        };
      }[] = [...tours];

      await Promise.all(
        copiedTours.map(async (tour, i) => {
          const users = await prisma.user.findUnique({
            where: {
              id: tour.creatorId,
            },
            select: {
              firstName: true,
              lastName: true,
            },
          });
          //@ts-ignore
          copiedTours[i].creator = users;
        })
      );

      return {
        success: true,
        tours: copiedTours,
      };
    } catch (arr) {
      return {
        success: false,
        tours: [],
      };
    }
  },
  ["adminAllTours"],
  {
    revalidate: 300,
  }
);

const allTours = cache(
  async (queryParams: any) => {
    try {
      const { type, price, duration, rating, search } = queryParams;

      const query: any = {
        status: "approved",
      };

      if (type) {
        query.category = {
          equals: type,
          mode: "insensitive",
        };
      }

      if (duration) {
        query.duration = {
          contains: duration,
          mode: "insensitive",
        };
      }

      if (price) {
        const splitPrice = price.split("-");
        const lowPrice = splitPrice.at(0);
        const highPrice = splitPrice.at(1);

        query.AND = [
          {
            price: {
              gte: +lowPrice,
            },
          },
          {
            price: {
              lte: +highPrice,
            },
          },
        ];
      }

      if (rating) {
        const numberArray = rating.split("-").map((rat: string) => +rat);

        query.totalRatings = {
          in: numberArray,
        };
      }

      if (search) {
        query.tourName = {
          contains: search,
          mode: "insensitive",
        };
      }

      const tours = await prisma.tour.findMany({
        where: query,
        select: {
          tourName: true,
          id: true,
          location: true,
          gallery: {
            select: {
              url: true,
            },
          },
          duration: true,
          price: true,
          totalRatings: true,
          overview: true,
          reviews: {
            select: {
              id: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      if (!tours || tours.length === 0) {
        return {
          success: true,
          tours: [],
        };
      }

      return { success: true, tours };
    } catch (err: any) {
      return {
        success: false,
        tours: [],
      };
    }
  },
  ["allToursPage"],
  {
    tags: ["allTours"],
  }
);

const getSingleTour = async (id: string) => {
  try {
    const tour = await prisma.tour.findUnique({
      where: {
        id,
      },
      include: {
        reviews: {
          select: {
            comment: true,
            total: true,
            user: {
              select: {
                firstName: true,
                lastName: true,
                image: true,
              },
            },
          },
        },
      },
    });

    if (!tour) {
      return null;
    }

    const overall = await prisma.review.aggregate({
      where: {
        tourId: tour.id,
      },
      _avg: {
        location: true,
        amenities: true,
        food: true,
        price: true,
        rooms: true,
        tourSupport: true,
      },
    });

    return { tour, overall: overall._avg };
  } catch (err) {
    return null;
  }
};

const updateBookingStatus = async (id: string, status: string) => {
  try {
    const updatedBookingState = await prisma.booking.update({
      where: {
        id,
      },
      data: {
        status,
      },
      include: {
        tour: {
          select: {
            tourName: true,
            gallery: true,
            price: true,
          },
        },
      },
    });
    revalidateTag("bookedTours");

    return {
      success: true,
      tour: updatedBookingState,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong! Please try again later!",
    };
  }
};

const featuredTours = async () => {
  try {
    const tours = await prisma.tour.findMany({
      select: {
        tourName: true,
        id: true,
        location: true,
        gallery: {
          select: {
            url: true,
          },
        },
        duration: true,
        price: true,
        totalRatings: true,
        overview: true,
        reviews: {
          select: {
            id: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take:8
    });

    return {
      tours,
    };
  } catch (err: any) {
    return {
      tours: [],
    };
  }
};

export {
  updateTourStatus,
  adminAllTours,
  allTours,
  getSingleTour,
  updateBookingStatus,
  featuredTours
};
