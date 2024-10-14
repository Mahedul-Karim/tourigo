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

const createTourSchema = z.object({
  tourName: z.string({
    required_error: "Tour Name is required!",
  }),
  category: z.string({
    required_error: "Category is required!",
  }),
  location: z.string({
    required_error: "Location is required!",
  }),
  highlight: z
    .string({
      required_error: "Highlights is required",
    })
    .array()
    .min(1, "Atleast 1 highlight is required"),
  duration: z.string({
    required_error: "Duration is required!",
  }),
  price: z.string({
    required_error: "Price is required!",
  }),
  groupSize: z.string({
    required_error: "Group Size is required!",
  }),
  overview: z.string({
    required_error: "Overview is required!",
  }),
  gallery: z
    .string({
      required_error: "Gallery is required",
    })
    .array()
    .length(4, "4 images are required!"),

  itinerarys: z
    .object(
      {
        title: z.string({
          required_error: "Itinerary title is required!",
        }),
        description: z.string({
          required_error: "Itinerary description is required!",
        }),
      },
      {
        required_error: "Itinerarys are required!",
      }
    )
    .array(),
  includes: z
    .string({
      required_error: "Includes is required!",
    })
    .array()
    .min(1, "At least 1 includes is required!"),
});

export { ratingSchema, loginSchema, signUpSchema, createTourSchema };
