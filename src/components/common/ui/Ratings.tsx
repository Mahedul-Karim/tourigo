import React from "react";
import { TiStarFullOutline,TiStarHalfOutline } from "react-icons/ti";

interface Props {
  rating: number;
  styles?: string;
}
const Ratings: React.FC<Props> = ({ rating, styles="" }) => {
  const stars: React.ReactElement[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<TiStarFullOutline className="text-yellow-500" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<TiStarHalfOutline className="text-yellow-500" />);
    } else {
      stars.push(<TiStarFullOutline className="text-gray-400" />);
    }
  }

  return (
    <div className={`flex items-center ${styles}`}>
      {stars.map((star, i) => (
        <span key={i}>{star}</span>
      ))}
    </div>
  );
};

export default Ratings;
