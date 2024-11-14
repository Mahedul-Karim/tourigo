import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
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
      return NextResponse.json(
        {
          success: true,
          tours: [],
        },
        {
          status: 200,
        }
      );
    }

    await Promise.all(
      tours.map(async (tour, i) => {
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
        tours[i].creator = users;
      })
    );

    return NextResponse.json(
      {
        success: true,
        tours,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while fetching tours",
      },
      {
        status: 500,
      }
    );
  }
};
