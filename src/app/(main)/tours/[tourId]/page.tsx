import Container from "@/components/common/ui/Container";
import TourDetails from "@/components/tours/details/TourDetails";
import { getSingleTour } from "@/lib/actions/tours";
import { Tour } from "@prisma/client";
import React from "react";

interface Props {
  params: {
    tourId: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}

const Page: React.FC<Props> = async ({ params }) => {
  const tourId = decodeURIComponent(params.tourId).replace(/-/g, " ");

  const data = await getSingleTour(tourId);

  

  return (
    <div className="pt-[70px]">
      <Container className="py-10">
        <TourDetails tourId={tourId} tour={data?.tour as Tour}/>
      </Container>{" "}
    </div>
  );
};

export default Page;
