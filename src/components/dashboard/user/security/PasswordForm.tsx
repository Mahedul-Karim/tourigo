"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "@/components/forms/inputs/AnimatedInput";
import AnimatedTextArea from "@/components/forms/inputs/AnimatedTextArea";

const PasswordForm = () => {
  const form = useForm();

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values:any) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
    reset();
  };

  return (
    <div className="mt-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <FormField
            control={form.control}
            name="currentPassword"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Current Password"}
                  text={getValues("currentPassword")}
                  {...field}
                  type="password"
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid sm:grid-cols-2 sm:gap-4">
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"New Password"}
                    text={getValues("newPassword")}
                    type="password"
                    {...field}
                    disabled={isSubmitting}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <AnimatedInput
                    labelBg="bg-white"
                    label={"Confirm Password"}
                    text={getValues("confirmPassword")}
                    type="password"
                    {...field}
                    disabled={isSubmitting}
                  />

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary"
              disabled={isSubmitting}
              size={"lg"}
            >
              Update Password
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PasswordForm;
