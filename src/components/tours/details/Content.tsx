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

const BADGES_DETAILS = [
  {
    icon: <CiClock2 className="text-xl md:text-2xl" />,
    label: "Duration",
    details: "3 days",
  },
  {
    icon: <IoPeopleOutline className="text-xl md:text-2xl" />,
    label: "Group Size",
    details: "10 people",
  },
  {
    icon: <BsCake className="text-xl md:text-2xl" />,
    label: "Ages",
    details: "18+",
  },
  {
    icon: <IoLanguageOutline className="text-xl md:text-2xl" />,
    label: "Languages",
    details: "English",
  },
];

const Content = () => {
  return (
    <div className="mt-6 grid md:grid-cols-[1fr_0.4fr] gap-8">
      <div>
        <div className="grid grid-cols-2 gap-8 sm:gap-0 sm:grid-cols-4">
          {BADGES_DETAILS.map((badge, i) => (
            <Badges
              key={i}
              icon={badge.icon}
              label={badge.label}
              details={badge.details}
            />
          ))}
        </div>
        <Overview />
        <div className="border-t border-solid border-border my-12" />
        <Includes />
        <div className="border-t border-solid border-border my-12" />
        <Itinerary />
        <div className="border-t border-solid border-border my-12" />
        <FAQ />
        <div className="border-t border-solid border-border my-12" />
        <Reviews />
        <div className="border-t border-solid border-border my-12" />
        <RatingForm />
      </div>
      <Sidebar />
    </div>
  );
};

export default Content;
