import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { BsCake } from "react-icons/bs";
import { IoLanguageOutline } from "react-icons/io5";
import Badges from "./content/Badges";
import Overview from "./content/Overview";
import Includes from "./content/Includes";
import Itinerary from "./content/intinerary/Itinerary";
import FAQ from "./content/FAQ";
import Reviews from "./content/reviews/Reviews";
import RatingForm from "./content/reviews/RatingForm";
import Sidebar from "./content/sidebar/Sidebar";

interface Props {
  id: string;
  duration: string;
  groupSize: number;
  overview: string;
  highlight: string[];
  includes: string[];
  itinerarys: {
    title: string;
    description: string;
  }[];
  price: number;
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
  creatorId: string;
  totalRatings:number;
  overall:{
    location:number | null;
    amenities:number | null;
    food:number | null;
    price:number | null;
    rooms:number | null;
    tourSupport:number | null;
  };
}

//new RegExp('(\\d+)') for splitting the string with number
// string.match(/\d+/)[0] to get the first number from a string

const Content: React.FC<Props> = ({
  id,
  duration,
  groupSize,
  overview,
  highlight,
  includes,
  itinerarys,
  price,
  reviews,
  creatorId,
  totalRatings,
  overall
}) => {
  return (
    <div className="mt-6 grid md:grid-cols-[1fr_0.4fr] gap-8">
      <div>
        <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-4">
          <Badges
            icon={<CiClock2 className="text-xl md:text-2xl" />}
            label={"Duration"}
            details={duration}
          />
          <Badges
            icon={<IoPeopleOutline className="text-xl md:text-2xl" />}
            label={"Group Size"}
            details={`${groupSize} People`}
          />
          <Badges
            icon={<BsCake className="text-xl md:text-2xl" />}
            label={"Age"}
            details={"1-99"}
          />
          <Badges
            icon={<IoLanguageOutline className="text-xl md:text-2xl" />}
            label={"Languages"}
            details={"English"}
          />
        </div>
        <Overview overview={overview} highlight={highlight} />
        <div className="border-t border-solid border-border my-12" />
        <Includes includes={includes} />
        <div className="border-t border-solid border-border my-12" />
        <Itinerary itinerarys={itinerarys} />
        <div className="border-t border-solid border-border my-12" />
        <FAQ />
        <div className="border-t border-solid border-border my-12" />
        <Reviews reviews={reviews} totalRatings={totalRatings} overall={overall} />
        <div className="border-t border-solid border-border my-12" />
        {/* <RatingForm /> */}
      </div>
      <Sidebar
        id={id}
        price={price}
        duration={duration}
        groupSize={groupSize}
        creatorId={creatorId}
      />
    </div>
  );
};

export default Content;
