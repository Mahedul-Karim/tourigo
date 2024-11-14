import prisma from "@/lib/prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { configCloudinary, uploadToCloudinary } from "@/lib/util/cloudinary";
import { revalidateTag } from "next/cache";

export const POST = async (req: NextRequest) => {
  try {
    configCloudinary();

    const values = await req.json();

    const gallery: {
      public_id: string;
      url: string;
    }[] = [];

    await Promise.all(
      values.gallery.map(async (img: string) => {
        const result = await uploadToCloudinary(img);

        gallery.push({
          public_id: result.public_id,
          url: result.url,
        });
      })
    );

     await prisma.tour.create({
      data: { ...values, gallery },
    });

    revalidateTag('allTours')

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 201,
      }
    );
  } catch (err: any) {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong! Please try again later",
      },
      {
        status: 501,
      }
    );
  }
};

export const GET = async () => {
  try {
    const tours = await prisma.tour.findMany({
      select:{
        tourName:true,
        id:true,
        location:true,
        gallery:{
          select:{
            url:true
          },
          
        },
        duration:true,
        price:true,
        totalRatings:true
      }
    });

    if(!tours || tours.length === 0 ){
      return NextResponse.json(
        {
          success: true,
          tours:[],
        },
        {
          status: 200,
        }
      );
    }

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
        message: "Something went wrong! Please try again later",
      },
      {
        status: 500,
      }
    );
  }
};
