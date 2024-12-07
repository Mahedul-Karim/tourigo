import React from "react";
import Title from "../Title";
import Ratings from "./Ratings";
import { MdOutlineStars, MdOutlineLocationOn } from "react-icons/md";
import { RiAppsLine } from "react-icons/ri";
import { LiaUtensilsSolid } from "react-icons/lia";
import { IoPricetagOutline, IoBedOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import UserReviews from "./UserReviews";

interface Props {
  reviews: {
    total: number;
    comment: string;
    user: {
      firstName: string;
      lastName: string;
      image: {
        public_id: string;
        url: string;
      };
    };
  }[];
  totalRatings: number;
  overall: {
    location: number | null;
    amenities: number | null;
    food: number | null;
    price: number | null;
    rooms: number | null;
    tourSupport: number | null;
  };
}

const Reviews: React.FC<Props> = ({ reviews, totalRatings, overall }) => {
  const { location, amenities, food, price, rooms, tourSupport } = overall;

  const reviewLength = reviews?.length;


  return (
    <div>
      <Title>Reviews</Title>
      <div className="mt-4 flex flex-col gap-2 overflow-clip rounded-lg">
        <Ratings
          isOverall
          icon={
            <MdOutlineStars className="text-primary text-2xl xs:text-3xl" />
          }
          label="Overall Rating"
          rating={totalRatings}
          length={reviewLength}
        />
        <div className="grid grid-cols-2 gap-2">
          <Ratings
            icon={
              <MdOutlineLocationOn className="text-primary text-2xl xs:text-3xl" />
            }
            label="Location"
            rating={location || 0}
            length={reviewLength}
          />
          <Ratings
            icon={<RiAppsLine className="text-primary text-2xl xs:text-3xl" />}
            label="Amenities"
            rating={amenities || 0}
            length={reviewLength}
          />
          <Ratings
            icon={
              <LiaUtensilsSolid className="text-primary text-2xl xs:text-3xl" />
            }
            label="Food"
            rating={food || 0}
            length={reviewLength}
          />
          <Ratings
            icon={
              <IoPricetagOutline className="text-primary text-2xl xs:text-3xl" />
            }
            label="Price"
            rating={price || 0}
            length={reviewLength}
          />
          <Ratings
            icon={
              <IoBedOutline className="text-primary text-2xl xs:text-3xl" />
            }
            label="Rooms"
            rating={rooms || 0}
            length={reviewLength}
          />
          <Ratings
            icon={<BiSupport className="text-primary text-2xl xs:text-3xl" />}
            label="Tour Support"
            rating={tourSupport || 0}
            length={reviewLength}
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-6">
        {reviews?.length > 0 &&
          reviews?.map((rev, i) => <UserReviews key={i} review={rev}/>)}
      </div>
    </div>
  );
};

export default Reviews;
