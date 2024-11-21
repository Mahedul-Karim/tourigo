import { clsx, type ClassValue } from "clsx";
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import { addTourToWishlist, removeFromWishlist } from "./actions/user";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatCurrency = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(number);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const handleAddWishlist = async ({
  user,
  isLoggedIn,
  setUser,
  tourId,
}: {
  [key: string]: any;
}) => {
  if (!isLoggedIn) {
    return toast.error("Error!", {
      description: "Login first to add to wishlist",
    });
  }

  const copiedUser = { ...user };

  try {
    if (user?.wishlist?.find((tour: any) => tour.tourId === tourId)) {
      const filteredWishlist = user?.wishlist?.filter(
        (tour: any) => tour.tourId !== tourId
      );

      copiedUser.wishlist = [...filteredWishlist];
      setUser(copiedUser);
      toast.success('Success!',{
        description:'Tour was removed wishlist!'
      })
      await removeFromWishlist({ userId: user.id, tourId });
    } else {
      const wishlist = [...user?.wishlist];

      wishlist.push({ tourId });

      copiedUser.wishlist = [...wishlist];
      setUser(copiedUser);
      toast.success('Success!',{
        description:'Tour was added to wishlist!'
      })
      await addTourToWishlist({ userId: user.id, tourId });
    }
    
    
  } catch (err) {
    setUser(user);
    toast.error("Error!", {
      description: "Something went wrong! Please try again later",
    });
  }
};
