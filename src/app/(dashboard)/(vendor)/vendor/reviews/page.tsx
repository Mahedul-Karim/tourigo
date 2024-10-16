import React from "react";
import Container from "@/components/common/ui/Container";
import StatsCard from "@/components/dashboard/vendor/home/StatsCard";
import { FaRegStar } from "react-icons/fa";
import { RiMedalLine } from "react-icons/ri";
import ReviewsChart from "@/components/dashboard/vendor/reviews/ReviewsChart";
import Reviews from "@/components/dashboard/vendor/reviews/Reviews";
const Page = () => {
  return (
    <Container className="py-8">
     
      <div className="grid grid-cols-2 gap-4">
        <StatsCard
          Icon={RiMedalLine}
          label="Average Rating"
          value={5}
        />
        <StatsCard
          Icon={FaRegStar}
          label="Total Reviews"
          value={100}
        />
        
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <ReviewsChart />
      </div>
      <div className="bg-white rounded-md border border-solid border-border p-4 mt-6">
        <Reviews />
      </div>
    </Container>
  );
};

export default Page;
