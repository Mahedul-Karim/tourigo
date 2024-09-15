import React from "react";
import { IoMdStar, IoMdStarHalf } from "react-icons/io";

interface Props {
  rating: number;
  styles?: string;
}

const Ratings: React.FC<Props> = ({ rating, styles="" }) => {
  const stars: any[] = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IoMdStar className="text-yellow-500" />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<IoMdStarHalf className="text-yellow-500" />);
    } else {
      stars.push(<IoMdStar className="text-gray-400" />);
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
