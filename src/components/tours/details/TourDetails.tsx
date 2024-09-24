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

interface Props {
  tourId: string;
}

const TourDetails: React.FC<Props> = ({ tourId }) => {
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
            <BreadcrumbPage>{tourId}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <Heading />
      <Gallery />
      <Content />
      
    </>
  );
};

export default TourDetails;
