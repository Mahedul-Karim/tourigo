import React from "react";
import Title from "../Title";
import Ratings from "./Ratings";
import { MdOutlineStars, MdOutlineLocationOn } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import { LiaUtensilsSolid } from "react-icons/lia";
import { IoPricetagOutline, IoBedOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import UserReviews from "./UserReviews";

const Reviews = () => {
  return (
    <div>
      <Title>Reviews</Title>
      <div className="mt-4 flex flex-col gap-2 overflow-clip rounded-lg">
        <Ratings
          isOverall
          icon={
            <MdOutlineStars className="text-primary text-xl xs:text-3xl" />
          }
          label="Overall Rating"
          rating={5}
        />
        <div className="grid grid-cols-2 gap-2">
          <Ratings
            icon={
              <MdOutlineLocationOn className="text-primary text-xl xs:text-3xl" />
            }
            label="Location"
            rating={5}
          />
          <Ratings
            icon={<RiAppsLine className="text-primary text-xl xs:text-3xl" />}
            label="Amenities"
            rating={5}
          />
          <Ratings
            icon={
              <LiaUtensilsSolid className="text-primary text-xl xs:text-3xl" />
            }
            label="Food"
            rating={5}
          />
          <Ratings
            icon={
              <IoPricetagOutline className="text-primary text-xl xs:text-3xl" />
            }
            label="Price"
            rating={5}
          />
          <Ratings
            icon={<IoBedOutline className="text-primary text-xl xs:text-3xl" />}
            label="Rooms"
            rating={5}
          />
          <Ratings
            icon={<BiSupport className="text-primary text-xl xs:text-3xl" />}
            label="Tour Support"
            rating={1.5}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        <UserReviews />
        <UserReviews />
        <UserReviews />
        <UserReviews />
      </div>
    </div>
  );
};

export default Reviews;
