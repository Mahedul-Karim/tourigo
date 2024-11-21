"use server";

import { configCloudinary, uploadToCloudinary } from "../util/cloudinary";
import prisma from "../prisma";
import { auth } from "../firebase";

import { updatePassword } from "firebase/auth";

const uploadUserImage = async (image: string, email: string) => {
  try {
    configCloudinary();

    const result = await uploadToCloudinary(image);

    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        image: {
          public_id: result.public_id,
          url: result.url,
        },
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        image: {
          select: {
            url: true,
          },
        },
        phoneNumber: true,
        bio: true,
        role: true,
      },
    });

    return {
      success: true,
      user,
    };
  } catch (err: any) {
    console.log(err.message);
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

interface UserInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
}

const updateUserDetails = async (details: UserInfo) => {
  const { firstName, lastName, email, phoneNumber, bio } = details;

  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        firstName,
        lastName,
        phoneNumber,
        bio,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        image: {
          select: {
            url: true,
          },
        },
        phoneNumber: true,
        bio: true,
        role: true,
        wishlist: {
          select: {
            tourId: true,
          },
        },
        writtenReviews: {
          select: {
            tourId: true,
          },
        },
      },
    });

    return {
      success: true,
      user,
    };
  } catch (err) {
    return {
      success: false,
      message: "Something went wrong! Please try again later!",
    };
  }
};

const updateUserPassword = async (newPassword: string) => {
  try {
    const currentUser = auth.currentUser;

    await updatePassword(currentUser!, newPassword);

    return {
      success: true,
      message: "Password updated successfully!",
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

const requestForVendor = async (email: string) => {
  try {
    const user = await prisma.user.update({
      where: {
        email,
      },
      data: {
        role: "pending",
      },
    });

    return {
      success: true,
      user,
    };
  } catch (err: any) {
    return {
      success: false,
      message: "Something went wrong! Please try again later",
    };
  }
};

const addTourToWishlist = async ({
  userId,
  tourId,
}: {
  userId: string;
  tourId: string;
}) => {
  try {
    await prisma.wishlist.create({
      data: {
        userId,
        tourId,
      },
    });

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};

const removeFromWishlist = async ({
  userId,
  tourId,
}: {
  userId: string;
  tourId: string;
}) => {
  try {
    const wishlist = await prisma.wishlist.findFirst({
      where: {
        userId: userId,
        tourId: tourId,
      },
    });

    await prisma.wishlist.delete({
      where: {
        id: wishlist?.id,
      },
    });

    return {
      success: true,
    };
  } catch (err) {
    return {
      success: false,
    };
  }
};

export {
  uploadUserImage,
  updateUserDetails,
  updateUserPassword,
  requestForVendor,
  addTourToWishlist,
  removeFromWishlist
};
