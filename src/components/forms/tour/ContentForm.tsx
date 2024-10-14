"use client";

import React from "react";

import { FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "../inputs/AnimatedInput";
import AnimatedTextArea from "../inputs/AnimatedTextArea";
import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";
import { TOUR_TYPE } from "@/lib/data";
import ManualInputField from "./ManualInputField";

interface Props {
  errors: FieldErrors<FieldValues>;
  isSubmitting: boolean;
  getValues: UseFormGetValues<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  control: Control<FieldValues, any>;
}

const ContentForm: React.FC<Props> = ({
  errors,
  isSubmitting,
  getValues,
  setValue,
  control,
}) => {
  return (
    <div>
      <FormField
        control={control}
        name="tourName"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedInput
              labelBg="bg-white"
              label={"Name"}
              text={getValues("tourName")}
              {...field}
              type="text"
              disabled={isSubmitting}
            />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="category"
        render={({ field }) => (
          <FormItem className="mt-6">
            <select
              {...field}
              className="h-[45px] w-full border border-solid border-border rounded-xl px-3 py-1 text-sm"
            >
              <option>Select a category</option>
              {TOUR_TYPE.map((cat, i) => (
                <option key={i} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="location"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedInput
              labelBg="bg-white"
              label={"Location"}
              text={getValues("location")}
              {...field}
              type="text"
              disabled={isSubmitting}
            />
          </FormItem>
        )}
      />
      
      <ManualInputField getValues={getValues} setValue={setValue} />
      <FormField
        control={control}
        name="duration"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedInput
              labelBg="bg-white"
              label={"Duration"}
              text={getValues("duration")}
              {...field}
              type="text"
              disabled={isSubmitting}
            />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="price"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedInput
              labelBg="bg-white"
              label={"Price"}
              text={getValues("price")}
              {...field}
              type="number"
              disabled={isSubmitting}
            />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="groupSize"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedInput
              labelBg="bg-white"
              label={"Group Size"}
              text={getValues("groupSize")}
              {...field}
              type="number"
              disabled={isSubmitting}
            />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="overview"
        render={({ field }) => (
          <FormItem className="mt-6">
            <AnimatedTextArea
              labelBg="bg-white"
              label={"Overview"}
              text={getValues("overview")}
              {...field}
            />
          </FormItem>
        )}
      />
    </div>
  );
};

export default ContentForm;
