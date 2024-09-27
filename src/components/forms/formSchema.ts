import { z } from "zod";

const ratingSchema = z.object({
  reviews: z
    .string({
      required_error: "Review field can not be empty",
    })
    .min(1, "Review field can not be empty"),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email field can not be empty",
    })
    .email({
      message: "Please provide a valid email",
    }),
  password: z.string().min(8, {
    message: "Password must be of 8 characters",
  }),
});

const signUpSchema = z
  .object({
    firstName: z.string({
      required_error: "First Name field can not be empty",
    }),
    lastName: z.string({
      required_error: "Last Name field can not be empty",
    }),
    email: z
    .string({
      required_error: "Email field can not be empty",
    })
    .email({
      message: "Please provide a valid email",
    }),
    password: z.string().min(8, {
      message: "Password must be of 8 characters",
    }),
    confirmPassword: z.string().min(8, {
      message: "Confirm Password must be of 8 characters",
    }),
  })
  .refine((value) => value.password === value.confirmPassword, {
    message: "Password and Confirm Passwords need to be same",
    path: ["confirmPassword"],
  });

export { ratingSchema, loginSchema, signUpSchema };
