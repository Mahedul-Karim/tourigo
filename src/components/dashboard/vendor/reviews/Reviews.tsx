"use client";

import React, { useEffect, useState } from "react";
import SectionHeading from "../../common/SectionHeading";
import ReviewBar from "./ReviewBar";
import UserReviews from "@/components/tours/details/content/reviews/UserReviews";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import { FaRegStar } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";
import ReviewsChart from "@/components/dashboard/vendor/reviews/ReviewsChart";
import { vendorReviews } from "@/lib/actions/vendor";
import { useCtx } from "@/context/ContextProvider";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

const Reviews = () => {
  const { user } = useCtx();

  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState<any>([]);
  const [reviewMatrics, setReviewMatrics] = useState<any>([]);
  const [avgRatings, setAvgRatings] = useState<any>(0);

  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      try {
        const res = await vendorReviews(user?.id as string);

        if (!res.success) {
          throw new Error(res.message);
        }

        setReviews(res.allReviews);
        setReviewMatrics(res.data);
        setAvgRatings(res.averageRatings);
      } catch (err: any) {
        toast.error("Error!", {
          description: err.message,
        });
      } finally {
        setIsLoading(false);
      }
    })();
  }, [user?.id]);

  if (isLoading) {
    return (
      <>
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-[80px]" />
          <Skeleton className="h-[80px]" />
        </div>
        <div className="mt-6">
          <Skeleton className="h-[250px]" />
        </div>
        <div className="mt-6">
          <Skeleton className="h-[80px]" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          Icon={RiMedalLine}
          label="Average Rating"
          value={avgRatings}
        />
        <StatsCard
          Icon={FaRegStar}
          label="Total Reviews"
          value={reviews?.length}
        />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <ReviewsChart />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <SectionHeading>Review Matrics</SectionHeading>
        <div className="mt-6">
          <div className="py-4 border-t border-b border-dashed border-border flex flex-col gap-3">
            {reviewMatrics?.map((rev: any, i: number) => (
              <ReviewBar
                key={i}
                totalReviews={reviews?.length}
                label={rev?.label}
                value={rev?.value}
              />
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-6">
            {reviews?.length > 0 && reviews.map((rev:any,i:any)=>(<UserReviews key={i} review={rev}/>)) }
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
