"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import AnimatedInput from "./inputs/AnimatedInput";
import { signUpSchema } from "./formSchema";
import { register } from "@/lib/actions/auth";

import { toast } from "sonner";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values: z.infer<typeof signUpSchema>) => {
    const { firstName, lastName, email, password, confirmPassword } = values;
    try {
      const data = await register({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      });

      if (!data?.success) {
        throw new Error(data?.message);
      }

      reset({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      toast.success("Success!", {
        description: "User created successfully!",
      });

      router.push("/login");
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }
  };

  return (
    <div className="max-w-[380px] w-full">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-1"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"First Name"}
                  text={getValues("firstName")}
                  error={errors?.firstName?.message || ""}
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
                  error={errors?.lastName?.message || ""}
                  type="text"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Email"}
                  text={getValues("email")}
                  error={errors?.email?.message || ""}
                  type="email"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Password"}
                  text={getValues("password")}
                  error={errors?.password?.message || ""}
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
                  error={errors?.confirmPassword?.message || ""}
                  type="password"
                  {...field}
                  disabled={isSubmitting}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary w-full rounded-xl mt-[20px]"
            disabled={isSubmitting}
            size={"lg"}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RegisterForm;
