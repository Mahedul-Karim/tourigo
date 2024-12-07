"use client";

import React from "react";
import Modal from "./Modal";
import RatingForm from "@/components/tours/details/content/reviews/RatingForm";
import SpinnerButton from "../SpinnerButton";

interface Props {
  onModalClose: (val: boolean) => void;
  tourId: string;
  creatorId: string;
  bookingId: string;
  bookings:BookedTours[];
  setData:(val:BookedTours[])=>void;
}

const ReviewModal: React.FC<Props> = ({
  onModalClose,
  tourId,
  creatorId,
  bookingId,
  bookings,
  setData
}) => {
  return (
    <Modal onModalClose={onModalClose} width={"600px"}>
      <RatingForm
        tourId={tourId}
        creatorId={creatorId}
        onClose={onModalClose}
        bookingId={bookingId}
        bookings={bookings}
        setData={setData}
      />
    </Modal>
  );
};

export default ReviewModal;
