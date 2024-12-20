"use client";

import React, { useEffect } from "react";
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
import { popUp } from "@/lib/firebase";

const LoginForm = () => {
  const { setUser, setIsLoggedIn, setToken, isLoggedIn } = useCtx();

  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues:{
      email:'test@gmail.com(admin)/test2@gmail.com',
      password:'test1234'
    }
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
      router.push("/");
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

  const googleSignIn = async () => {
    try {
      const data = await popUp();

      const email = data.user.email;

      const token = await data.user.getIdToken();

      const displayName = data.user.displayName?.split(" ");

      const firstName = displayName?.at(0);
      const lastName = displayName?.at(-1);

      const res = await fetch("/api/google", {
        method: "POST",
        body: JSON.stringify({
          email,
          token,
          firstName,
          lastName,
        }),
      });

      const resData = await res.json();

      if (!resData.success) {
        throw new Error("Something Went Wrong! Please try again later!");
      }

      setUser(resData?.user);
      setToken(resData?.token);
      setIsLoggedIn(true);
      localStorage.setItem("userToken", JSON.stringify(resData?.token));
      router.push("/");
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, []);

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
                  disabled={isSubmitting}
                  type="email"
                  {...field}
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
                  disabled={isSubmitting}
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
          onClick={googleSignIn}
        >
          {" "}
          <FaGoogle /> Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
