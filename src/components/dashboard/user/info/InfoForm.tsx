"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "@/components/forms/inputs/AnimatedInput";
import AnimatedTextArea from "@/components/forms/inputs/AnimatedTextArea";
import VendorButton from "../VendorButton";
import { useCtx } from "@/context/ContextProvider";

import SpinnerButton from "@/components/common/ui/SpinnerButton";
import { toast } from "sonner";
import { updateUserDetails } from "@/lib/actions/user";

interface UserInfo {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  bio?: string;
}

const InfoForm = () => {
  const { user, setUser } = useCtx();

  const form = useForm({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      phoneNumber: user?.phoneNumber || "",
      bio: user?.bio || "",
    },
  });

  const {
    formState: { isSubmitting, isDirty },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values: UserInfo) => {
    if (!isDirty) {
      return toast.warning("Warning", {
        description: "Details must be edited before submitting the form!",
      });
    }
    try {
      const data = await updateUserDetails(values);

      if (!data.success) {
        throw new Error(data.message);
      }
      //@ts-ignore
      setUser(data.user);

      toast.success("Success!", {
        description: "Profile updated successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }
  };

  return (
    <div className="mt-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <div className="grid sm:grid-cols-2 sm:gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"First Name"}
                    text={getValues("firstName")}
                    {...field}
                    type="text"
                    disabled={isSubmitting}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"Last Name"}
                    text={getValues("lastName")}
                    type="text"
                    {...field}
                    disabled={isSubmitting}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"Email"}
                    text={getValues("email")}
                    type="email"
                    {...field}
                    disabled
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"Phone Number"}
                    text={getValues("phoneNumber")}
                    type="number"
                    {...field}
                    disabled={isSubmitting}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="bio"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedTextArea
                  label={"Bio"}
                  text={getValues("bio")}
                  labelBg="bg-white"
                  {...field}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-center gap-4 mt-8">
            <Button
              type="submit"
              className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary flex items-center gap-2"
              disabled={isSubmitting}
              size={"lg"}
            >
              {isSubmitting && <SpinnerButton />} Submit
            </Button>
            <VendorButton className="block md:hidden" />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InfoForm;
