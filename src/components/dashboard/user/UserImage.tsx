"use client";

import React from "react";
import Image from "next/image";
import { GoPencil } from "react-icons/go";

type Props = React.HTMLAttributes<HTMLDivElement>;

const UserImage: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={`w-32 h-32 border border-solid border-primary rounded-full p-4 mx-auto relative mb-6 flex items-center justify-center ${className}`}
    >
      <Image
        width={100}
        height={100}
        src={"https://github.com/shadcn.png"}
        alt="image"
        className="rounded-full object-cover"
      />
      <input
        type="file"
        id="userImage"
        className="absolute hidden"
        accept="image/*"
        onChange={(e) => console.log(e.target.files?.[0])}
      />
      <label
        htmlFor="userImage"
        className="absolute bg-primary p-1 cursor-pointer rounded-full text-white top-0 right-0"
      >
        <GoPencil className="text-base md:text-[20px]" />
      </label>
    </div>
  );
};

export default UserImage;
