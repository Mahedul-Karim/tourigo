"use server";

import { Status } from "@prisma/client";
import prisma from "../prisma";
import { revalidatePath, unstable_cache as cache } from "next/cache";

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

    revalidatePath(path);

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
    revalidate: 3600,
  }
);

const allTours = cache(
  async () => {
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
        },
      });

      if (!tours || tours.length === 0) {
        return [];
      }

      return tours;
    } catch (err: any) {
      return [];
    }
  },
  ["allToursPage"],
  {
    revalidate: 3600,
    tags: ["allTours"],
  }
);

export { updateTourStatus, adminAllTours, allTours };
