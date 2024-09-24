import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { ratingSchema } from "@/components/forms/formSchema";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AnimatedTextArea from "@/components/forms/inputs/AnimatedTextArea";

interface Props {
  location: number;
  amenities: number;
  food: number;
  room: number;
  price: number;
  tourOperator: number;
}

const CommentForm: React.FC<Props> = ({
  location,
  amenities,
  food,
  room,
  price,
  tourOperator,
}) => {
  const form = useForm<z.infer<typeof ratingSchema>>({
    resolver: zodResolver(ratingSchema),
  });

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset
  } = form;

  const onSubmit = async (values: z.infer<typeof ratingSchema>) => {
    await new Promise(resolve=>setTimeout(resolve,1000));
    reset({
        reviews:""
    })
  };
  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="reviews"
            render={({ field }) => (
              <FormItem className="mt-6">
                <AnimatedTextArea
                  label={"Review"}
                  text={getValues("reviews")}
                  error={errors?.reviews?.message || ""}
                  {...field}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-xs xs:text-sm bg-primary disabled:bg-primary-0 hover:bg-primary"
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

export default CommentForm;
