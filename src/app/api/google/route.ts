import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  try {
    const { email, token, firstName, lastName } = await req.json();

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    cookies().set("userToken", token, {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //7 day from current day
    });

    if (existingUser) {
      return NextResponse.json({
        success: true,
        user: existingUser,
        token,
      });
    } else {
      const user = await prisma.user.create({
        data: {
          email,
          firstName,
          lastName,
        },
      });

      return NextResponse.json({
        success: true,
        user,
        token,
      });
    }
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 404,
      }
    );
  }
};
