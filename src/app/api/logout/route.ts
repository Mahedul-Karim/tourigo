import { NextResponse } from "next/server";
import { signOut } from "firebase/auth";
import { cookies } from "next/headers";

import { auth } from "@/lib/firebase";

export const POST = async () => {
  try {
    await signOut(auth);

    cookies().delete("userToken");

    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 502,
      }
    );
  }
};
