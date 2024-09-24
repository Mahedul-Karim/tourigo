import { z } from "zod";

const ratingSchema = z.object({
  reviews: z
    .string({
      required_error: "Review field can not be empty",
    })
    .min(1, "Review field can not be empty"),
});

export { ratingSchema };
