"use server";

import { Status } from "@prisma/client";
import prisma from "../prisma";
import { revalidatePath } from "next/cache";

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

export { updateTourStatus };
