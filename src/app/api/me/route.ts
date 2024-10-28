import { adminAuth } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const cookie = cookies();

  const header = headers();

  try {
    const token =
      cookie.get("userToken")?.value ||
      header.get("authorization")?.split(" ")[1];

    if (!token) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 401,
        }
      );
    }


    const verifiedToken = await adminAuth.verifyIdToken(token);

    if (!verifiedToken) {
      return NextResponse.json(
        {
          success: false,
        },
        {
          status: 401,
        }
      );
    }

    const email = verifiedToken.email;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return NextResponse.json(
      {
        success: true,
        user,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 401,
      }
    );
  }
};
