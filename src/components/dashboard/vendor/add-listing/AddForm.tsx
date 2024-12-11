//@ts-nocheck

"use client";

import ContentForm from "@/components/forms/tour/ContentForm";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ImageAndItinerary from "@/components/forms/tour/ImageAndItinerary";
import Itinerarys from "@/components/forms/tour/Itinerarys";
import Includes from "@/components/forms/tour/Includes";
import { createTourSchema } from "@/components/forms/formSchema";
import LinearProgress from "@/components/common/ui/LinearProgress";
import { useCtx } from "@/context/ContextProvider";
import { toast } from "sonner";

interface Props {
  isEditing?: boolean;
}

const AddForm: React.FC<Props> = ({ isEditing = false }) => {
  const { user, tourToEdit } = useCtx();
  const form = useForm({
    defaultValues: {
      tourName: isEditing ? tourToEdit?.tourName : "",
      category: isEditing ? tourToEdit?.category : "Select a category",
      location: isEditing ? tourToEdit?.location : "",
      duration: isEditing ? tourToEdit?.duration : "",
      price: isEditing ? tourToEdit?.price?.toString() : "",
      groupSize: isEditing ? tourToEdit?.groupSize?.toString() : "",
      overview: isEditing ? tourToEdit?.overview : "",
      highlight: isEditing ? tourToEdit?.highlight : [],
      gallery: isEditing ? tourToEdit?.gallery?.map((tour) => tour.url) : [],
      itinerarys: isEditing ? tourToEdit?.itinerarys : [],
      includes: isEditing ? tourToEdit?.includes : [],
    },
  });

  const {
    reset,
    getValues,
    control,
    formState: { errors, isSubmitting, isSubmitSuccessful, isDirty },
    setValue,
  } = form;

  const onSubmit = async (values: FieldValues) => {
    if (isEditing && !isDirty) {
      toast.error("Error!", {
        description: "Edit a form field in order to save changes",
      });
      return;
    }

    const validateValues = createTourSchema.safeParse(values);

    if (!validateValues.success) {
      const formattedError = validateValues.error.format();

      const error = Object.values(formattedError)[1];

      toast.error("Error!", {
        description: error._errors,
      });

      return;
    }

    try {
      const formData = {
        ...values,
        price: +values.price,
        groupSize: +values.groupSize,
      };

      if (isEditing) {



        const res = await fetch("/api/tour", {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({id:tourToEdit?.id,...formData,gallery:[]}),
        });

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        toast.success("Success!", {
          description: "Tour updated successfully!",
        });

        return;
      }

      formData.creatorId = user?.id;

      const res = await fetch("/api/tour", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      toast.success("Success!", {
        description: "Tour created successfully!",
      });

      reset({
        tourName: "",
        category: "Select a category",
        location: "",
        duration: "",
        price: "",
        groupSize: "",
        overview: "",
      });
      setValue("highlight", []);
      setValue("gallery", []);
      setValue("itinerarys", []);
      setValue("includes", []);
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }
  };

  return (
    <>
      {isSubmitting && <LinearProgress />}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="bg-white border border-solid border-border rounded-xl p-4 flex flex-col gap-3">
            <h3 className="text-lg text-dark-1 font-medium">Content</h3>
            <ContentForm
              control={control}
              isSubmitting={isSubmitting}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              isSubmitSuccessful={isEditing ? false : isSubmitSuccessful}
              {...(isEditing && { highlight: tourToEdit?.highlight })}
            />
          </div>
          <div className="bg-white border border-solid border-border rounded-xl p-4 flex flex-col gap-3 mt-8">
            <h3 className="text-lg text-dark-1 font-medium">Gallery</h3>
            <ImageAndItinerary
              control={control}
              isSubmitting={isSubmitting}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              isSubmitSuccessful={isEditing ? false : isSubmitSuccessful}
              {...(isEditing && {
                gallery: tourToEdit?.gallery?.map((tour) => tour.url),
              })}
              isEditing={isEditing}
            />
          </div>
          <div className="bg-white border border-solid border-border rounded-xl p-4 flex flex-col gap-3 mt-8">
            <h3 className="text-lg text-dark-1 font-medium">Itinerary</h3>
            <Itinerarys
              control={control}
              isSubmitting={isSubmitting}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              isSubmitSuccessful={isEditing ? false : isSubmitSuccessful}
              {...(isEditing && {
                itinerarys: tourToEdit?.itinerarys,
              })}
            />
          </div>
          <div className="bg-white border border-solid border-border rounded-xl p-4 flex flex-col gap-3 mt-8">
            <h3 className="text-lg text-dark-1 font-medium">Includes</h3>
            <Includes
              getValues={getValues}
              setValue={setValue}
              isSubmitting={isSubmitting}
              isSubmitSuccessful={isEditing ? false : isSubmitSuccessful}
              isEditing={isEditing}
              {...(isEditing && {
                includesArrayPrev: tourToEdit?.includes,
              })}
            />
          </div>
        </form>
      </Form>
    </>
  );
};

export default AddForm;
