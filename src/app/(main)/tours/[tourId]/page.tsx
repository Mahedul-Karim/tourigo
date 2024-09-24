import Container from "@/components/common/ui/Container";
import TourDetails from "@/components/tours/details/TourDetails";
import React from "react";

interface Props {
  params: {
    tourId: string;
  };
  searchParams?: {
    [key: string]: string;
  };
}

const Page: React.FC<Props> = ({ params }) => {
  const tourId = params.tourId;

  return (
    <div className="pt-[70px]">
      <Container className="py-10">
        <TourDetails tourId={tourId} />
      </Container>{" "}
    </div>
  );
};

export default Page;
