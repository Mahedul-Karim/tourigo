"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { FaGoogle } from "react-icons/fa6";

import AnimatedInput from "./inputs/AnimatedInput";
import { loginSchema } from "./formSchema";
import { toast } from "sonner";
import { useCtx } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { setUser, setIsLoggedIn, setToken,isLoggedIn } = useCtx();

  const router = useRouter()

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    const { email, password } = values;

    try {
      const res = await fetch("/api/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message);
      }

      setUser(data?.user);
      setToken(data?.token);
      setIsLoggedIn(true);
      localStorage.setItem("userToken", JSON.stringify(data?.token));
      router.push('/')
      reset({
        email: "",
        password: "",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }
  };

  if(isLoggedIn){
    router.push('/')
  }

  return (
    <div className="max-w-[380px] w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedInput
                  labelBg="bg-white"
                  label={"Email Address"}
                  text={getValues("email")}
                  error={errors?.email?.message || ""}
                  {...field}
                  type="email"
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
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary w-full rounded-xl"
            disabled={isSubmitting}
            size={"lg"}
          >
            Submit
          </Button>
        </form>
      </Form>
      <div className="grid grid-cols-[1fr_20px_1fr] my-4 gap-4 place-items-center">
        <div className="border-t border-solid border-border w-full" />
        <p className="flex items-center justify-center uppercase text-xs text-dark-0">
          or
        </p>
        <div className="border-t border-solid border-border w-full" />
      </div>
      <div>
        <Button
          variant={"outline"}
          className="flex items-center justify-center w-full hover:bg-transparent bg-transparent text-sm text-dark-0 hover:text-dark-0 gap-2"
        >
          {" "}
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
