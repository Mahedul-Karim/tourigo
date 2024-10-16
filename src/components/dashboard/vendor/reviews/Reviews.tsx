import React from "react";
import SectionHeading from "../../common/SectionHeading";
import ReviewBar from "./ReviewBar";
import UserReviews from "@/components/tours/details/content/reviews/UserReviews";

const Reviews = () => {
  return (
    <div>
      <SectionHeading>Review Matrics</SectionHeading>
      <div className="mt-6">
        <div className="py-4 border-t border-b border-dashed border-border flex flex-col gap-3">
          <ReviewBar />
          <ReviewBar />
          <ReviewBar />
          <ReviewBar />
          <ReviewBar />
        </div>
        <div className="mt-6 flex flex-col gap-6">
          <UserReviews />
          <UserReviews />
          <UserReviews />
          <UserReviews />
          <UserReviews />
          <UserReviews />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
