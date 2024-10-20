import React from "react";
import ReviewsChart from "@/components/dashboard/vendor/reviews/ReviewsChart";
import Reviews from "@/components/dashboard/vendor/reviews/Reviews";

const Page = () => {
  return (
    <>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <ReviewsChart />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <Reviews />
      </div>
    </>
  );
};

export default Page;
