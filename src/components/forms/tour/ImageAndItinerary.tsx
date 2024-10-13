"use client";

import React, { useState } from "react";
import { FormField, FormItem, FormMessage } from "@/components/ui/form";

import { LuImagePlus } from "react-icons/lu";
import { FiTrash2 } from "react-icons/fi";

import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import Image from "next/image";

interface Props {
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, any>;
}

const Gallery: React.FC<Props> = ({
  errors,
  isSubmitting,
  getValues,
  setValue,
  control,
}) => {
  const [images, setImages] = useState<Array<string>>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const existingImages: Array<any> = [...images];

    const fileReader = new FileReader();

    fileReader.onload = () => {
      existingImages.push(fileReader.result);
      setImages(existingImages);

      setValue("gallery", existingImages);
    };

    fileReader.readAsDataURL(e.target.files?.[0] as File);
  };

  const deleteImage = (index: number) => {
    const exisitngArray = [...images];

    const newArray = exisitngArray.filter((_, i) => i !== index);
    setImages(newArray);
    setValue("gallery", newArray);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <div className="border border-dashed border-primary rounded-xl bg-primary-2 h-[140px] xs:h-[160px] overflow-clip text-primary">
          <input
            type="file"
            id="gallery"
            className="absolute hidden"
            onChange={handleImageChange}
          />
          <label
            htmlFor="gallery"
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer gap-1"
          >
            <span>
              <LuImagePlus className="text-2xl" />{" "}
            </span>
            <span className="text-xs xs:text-sm font-medium text-center">
              Upload Image
              <br />
              (4 image)
            </span>
          </label>
        </div>
        {images.length > 0 &&
          images.map((img: string, i: number) => (
            <div
              className="rounded-xl h-[140px] xs:h-[160px] overflow-clip relative"
              key={i}
            >
              <button
                className="bg-white p-1 absolute top-2 right-2 rounded-lg transition-all duration-300 hover:bg-zinc-900"
                onClick={deleteImage.bind(null, i)}
              >
                <FiTrash2 className="transition-all duration-300 hover:text-white" />
              </button>
              <Image
                alt=""
                src={img}
                width={850}
                height={0}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
