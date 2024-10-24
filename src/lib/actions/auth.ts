"use server";

import { signUpSchema } from "@/components/forms/formSchema";
import prisma from "../prisma";
import { z } from "zod";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export const register = async (data: z.infer<typeof signUpSchema>) => {
  const { firstName, lastName, email, password } = data;

  try {
    await createUserWithEmailAndPassword(auth, email, password);

    await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return {
      success: true,
    };
  } catch (err: any) {
    if (err.code === "auth/email-already-in-use") {
      return {
        success: false,
        message: "Email already exists!",
      };
    }
  }
};
