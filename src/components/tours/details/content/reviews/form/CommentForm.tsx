import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { ratingSchema } from "@/components/forms/formSchema";
import AnimatedTextArea from "@/components/forms/inputs/AnimatedTextArea";
import SpinnerButton from "@/components/common/ui/SpinnerButton";
import { useCtx } from "@/context/ContextProvider";

import { writeReview } from "@/lib/actions/review";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface Props {
  location: number;
  amenities: number;
  food: number;
  room: number;
  price: number;
  tourOperator: number;
  tourId: string;
  creatorId: string;
  onClose: (val: boolean) => void;
  bookingId:string;
  bookings:BookedTours[];
  setData:(val:BookedTours[])=>void;
}

const CommentForm: React.FC<Props> = ({
  location,
  amenities,
  food,
  room,
  price,
  tourOperator,
  tourId,
  creatorId,
  onClose,
  bookingId,
  bookings,
  setData
}) => {
  const { user } = useCtx();

  const form = useForm<z.infer<typeof ratingSchema>>({
    resolver: zodResolver(ratingSchema),
  });

  const {
    formState: { errors, isSubmitting },
    getValues,
    reset,
  } = form;

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof ratingSchema>) => {


    const copiedBookings = [...bookings];

    const indexOf = copiedBookings.findIndex(book=>book.id === bookingId)

    try {
      const res = await writeReview({
        location,
        amenities,
        food,
        room,
        price,
        tourOperator,
        tourId,
        creatorId,
        comment: values.reviews,
        userId: user?.id as string,
        bookingId
      });

      if (!res.success) {
        throw new Error("Something went wrong! Please try again later");
      }

      //@ts-ignore
      copiedBookings[indexOf] = res.booking;

      setData(copiedBookings)

      router.refresh();

      toast.success("Success!", {
        description: "Review submitted successfully!",
      });
      reset({
        reviews: "",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      onClose(false);
    }
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
                  labelBg="bg-white"
                  {...field}
                />

                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="text-xs xs:text-sm bg-primary disabled:bg-disabled hover:bg-primary flex items-center gap-2"
            disabled={isSubmitting}
            size={"lg"}
          >
            {isSubmitting && <SpinnerButton />} Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
