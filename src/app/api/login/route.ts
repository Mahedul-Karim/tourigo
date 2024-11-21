import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../lib/firebase";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export const POST = async (req: NextRequest) => {
  const { email, password } = await req.json();

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);

    const tokenPromise = user.getIdToken();

    const userDataPromise = prisma.user.findUnique({
      where: {
        email: user.email!,
        status: {
          not: "blocked",
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        image: {
          select:{
            url:true
          }
        },
        phoneNumber: true,
        bio: true,
        role: true,
        wishlist:{
          select:{
            tourId:true
          }
        },
        writtenReviews:{
          select:{
            tourId:true
          }
        }
      }
    });

    const [token, userData] = await Promise.all([
      tokenPromise,
      userDataPromise,
    ]);

    cookies().set("userToken", token, {
      expires: Date.now() + 7 * 24 * 60 * 60 * 1000, //7 day from current day
    });

    return NextResponse.json(
      {
        success: true,
        user: userData,
        token,
      },
      {
        status: 200,
      }
    );
  } catch (err: any) {
    if (err.code === "auth/invalid-credential") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid credential!",
        },
        {
          status: 404,
        }
      );
    }
  }
};
