import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MdHome } from "react-icons/md";
import Gallery from "./Gallery";
import Heading from "./Heading";
import Content from "./Content";
import { Tour } from "@prisma/client";

interface Props {
  tourId: string;
  tour: any;
}

const TourDetails: React.FC<Props> = ({ tourId, tour }) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList className="text-dark-1 text-xs">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <MdHome className="text-base" />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/tours">Tours</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="capitalize line-clamp-1">
              {tourId}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading
      id={tour?.id}
        name={tour?.tourName}
        totalRatings={tour?.totalRatings}
        location={tour?.location}
        totalReviews={tour?.reviews?.length}
      />
      <Gallery gallery={tour?.gallery} />
      <Content
        id={tour?.id}
        duration={tour?.duration}
        groupSize={tour?.groupSize}
        overview={tour?.overview}
        highlight={tour?.highlight}
        includes={tour?.includes}
        itinerarys={tour?.itinerarys}
        price={tour?.price}
        reviews={tour?.reviews}
        creatorId={tour?.creatorId}
      />
    </>
  );
};

export default TourDetails;
