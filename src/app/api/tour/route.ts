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

    revalidateTag("allTours");

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


export const PATCH=async (req:NextRequest)=>{

  try{

    const { id,gallery,...tourData } =await req.json();

    await prisma.tour.update({
      where:{
        id
      },
      data:{...tourData}
    });

    revalidateTag("allTours");

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 201,
      }
    );

  }catch(err:any){
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
}