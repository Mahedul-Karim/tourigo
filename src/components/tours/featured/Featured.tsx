import React from "react";
import Card from "../Card";

const Featured = ({ tours }: { tours: AllToursType[] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 lg:gap-10 mt-6">
      {tours?.map((tour) => (
        <Card
          key={tour?.id}
          id={tour?.id}
          tourName={tour?.tourName}
          location={tour?.location}
          totalRatings={tour?.totalRatings}
          duration={tour?.duration}
          price={tour?.price}
          gallery={tour?.gallery}
          totalReviews={tour?.reviews?.length}
        />
      ))}
    </div>
  );
};

export default Featured;
