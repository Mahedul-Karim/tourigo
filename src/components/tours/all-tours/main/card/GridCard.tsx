import React from "react";
import Card from "../../../Card";
import CardList from "../../../CardList";

type Props = {
  type: string;
  tours: AllToursType[];
};

const GridCard: React.FC<Props> = ({ type, tours }) => {
  return (
    <>
      {type === "grid" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-4 sm:gap-6 mt-6">
          {tours?.map((tour) => (
            <Card
              key={tour?.id}
              tourName={tour?.tourName}
              location={tour?.location}
              totalRatings={tour?.totalRatings}
              duration={tour?.duration}
              price={tour?.price}
              gallery={tour?.gallery}
            />
          ))}
        </div>
      )}
      {type === "list" && (
        <div className="flex flex-col mt-6 gap-4">
          {tours?.map((tour) => (
            <CardList
              key={tour?.id}
              tourName={tour?.tourName}
              location={tour?.location}
              totalRatings={tour?.totalRatings}
              duration={tour?.duration}
              price={tour?.price}
              gallery={tour?.gallery}
              overview={tour?.overview}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default GridCard;
