import React from "react";

import UserAvatar from "@/components/common/ui/UserAvatar";
import Ratings from "@/components/common/ui/Ratings";

interface Props {
  review?: {
    comment: string;
    total: number;
    user: {
      firstName: string;
      lastName: string;
      image: {
        public_id: string;
        url: string;
      };
    };
  };
}

const UserReviews: React.FC<Props> = ({ review }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <UserAvatar
          src={review?.user?.image?.url}
          fallback={`${
            //@ts-ignore
            review?.user?.firstName?.at(0)?.toUpperCase() +
            //@ts-ignore
            review?.user?.lastName?.at(0)?.toUpperCase()
          }`}
        />
        <div className="flex flex-col">
          <p className="text-sm text-dark-1">
            {review?.user?.firstName + " " + review?.user?.lastName}
          </p>
          <Ratings rating={review?.total as number} styles="text-xs" />
        </div>
      </div>
      <p className="text-xs text-dark-1 !leading-[1.9]">{review?.comment}</p>
    </div>
  );
};

export default UserReviews;
