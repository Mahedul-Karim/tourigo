"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GoPencil } from "react-icons/go";
import { useCtx } from "@/context/ContextProvider";
import { FaCheck } from "react-icons/fa6";
import { uploadUserImage } from "@/lib/actions/user";
import SpinnerButton from "@/components/common/ui/SpinnerButton";
import { toast } from "sonner";

type Props = React.HTMLAttributes<HTMLDivElement>;

const UserImage: React.FC<Props> = ({ className }) => {
  const { user, setUser } = useCtx();

  const [image, setImage] = useState<string | ArrayBuffer | null | undefined>(
    user?.image?.url
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setImage(fileReader.result);
    };

    fileReader.readAsDataURL(e.target.files?.[0] as File);
  };

  const handleClick = async () => {
    try {
      setIsLoading(true);

      const data = await uploadUserImage(
        image as string,
        user?.email as string
      );

      if (!data.success) {
        throw new Error(data.message);
      }

      setUser(data?.user);
      setImage(data?.user?.image?.url);

      toast.success("Success!", {
        description: "Profile image updated successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className={`w-32 h-32 border border-solid border-primary rounded-full p-4 mx-auto relative mb-6 flex items-center justify-center ${className}`}
    >
      {image ? (
        <Image
          width={100}
          height={100}
          src={image as string}
          alt="image"
          className="rounded-full object-cover aspect-square"
        />
      ) : (
        <p className="w-full h-full bg-zinc-100 rounded-full grid place-items-center uppercase text-lg font-medium">
          {user && user?.firstName?.[0] + user?.lastName?.[0]}
        </p>
      )}
      <input
        type="file"
        id="userImage"
        className="absolute hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
      <label
        htmlFor="userImage"
        className="absolute bg-primary p-1 cursor-pointer rounded-full text-white top-0 right-0"
      >
        <GoPencil className="text-base md:text-[20px]" />
      </label>
      {user?.image?.url !== image && (
        <button
          className="absolute bg-primary disabled:bg-disabled p-1 cursor-pointer rounded-full text-white bottom-0 right-0"
          onClick={handleClick}
          disabled={isLoading}
        >
          {!isLoading ? (
            <FaCheck className="text-base md:text-[20px]" />
          ) : (
            <SpinnerButton />
          )}
        </button>
      )}
    </div>
  );
};

export default UserImage;
