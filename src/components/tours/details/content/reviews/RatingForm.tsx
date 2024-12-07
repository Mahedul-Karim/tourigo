"use client";
import React, { useState } from "react";
import Title from "../Title";
import { TiStarFullOutline } from "react-icons/ti";
import StarRating from "./form/StarRating";
import CommentForm from "./form/CommentForm";

interface Props {
  tourId: string;
  creatorId: string;
  onClose:(val:boolean)=>void;
  bookingId:string;
  bookings:BookedTours[];
  setData:(val:BookedTours[])=>void;
}

const RatingForm: React.FC<Props> = ({ tourId, creatorId,onClose,bookingId,bookings,
  setData
 }) => {
  const [location, setLocation] = useState(1);
  const [amenities, setAmenities] = useState(1);
  const [food, setFood] = useState(1);
  const [room, setRoom] = useState(1);
  const [price, setPrice] = useState(1);
  const [tourOperator, setTourOperator] = useState(1);

  return (
    <div>
      <Title>Leave a Comment</Title>
      <div className="mt-6">
        <div className="grid grid-cols-2 gap-y-6">
          <StarRating
            label="Location"
            value={location}
            setValue={setLocation}
          />
          <StarRating
            label="Amenities"
            value={amenities}
            setValue={setAmenities}
          />
          <StarRating label="Food" value={food} setValue={setFood} />
          <StarRating label="Room" value={room} setValue={setRoom} />
          <StarRating label="Price" value={price} setValue={setPrice} />
          <StarRating
            label="Tour Operator"
            value={tourOperator}
            setValue={setTourOperator}
          />
        </div>
        <CommentForm
          location={location}
          amenities={amenities}
          food={food}
          room={room}
          price={price}
          tourOperator={tourOperator}
          tourId={tourId}
          creatorId={creatorId}
          onClose={onClose}
          bookingId={bookingId}
          bookings={bookings}
          setData={setData}
        />
      </div>
    </div>
  );
};

export default RatingForm;
