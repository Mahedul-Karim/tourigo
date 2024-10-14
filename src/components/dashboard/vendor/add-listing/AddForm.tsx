"use client";

import ContentForm from "@/components/forms/tour/ContentForm";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z, ZodFormattedError } from "zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import ImageAndItinerary from "@/components/forms/tour/ImageAndItinerary";
import Itinerarys from "@/components/forms/tour/Itinerarys";
import Includes from "@/components/forms/tour/Includes";
import { createTourSchema } from "@/components/forms/formSchema";

const AddForm = () => {
  const form = useForm();

  const {
    reset,
    getValues,
    control,
    formState: { errors, isSubmitting },
    setValue,
  } = form;

  const onSubmit = async (values: any) => {
    const validateValues = createTourSchema.safeParse(values);

    if (!validateValues.success) {
      const formattedError = validateValues.error.format();

      const error = Object.values(formattedError)[1];

      //@ts-ignore
      console.log(error._errors);

      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    reset();
  };

  return (
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
          />
        </div>
        <div className="bg-white border border-solid border-border rounded-xl p-4 flex flex-col gap-3 mt-8">
          <h3 className="text-lg text-dark-1 font-medium">Includes</h3>
          <Includes setValue={setValue} isSubmitting={isSubmitting} />
        </div>
      </form>
    </Form>
  );
};

export default AddForm;
