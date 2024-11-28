'use client'

import React from 'react'
import Modal from './Modal'
import RatingForm from '@/components/tours/details/content/reviews/RatingForm'
import SpinnerButton from "../SpinnerButton";

interface Props {
   
    onModalClose: (val: boolean) => void;
  
  }

const ReviewModal:React.FC<Props> = ({onModalClose}) => {
  return (
    <Modal onModalClose={onModalClose} width={"600px"}>
        <RatingForm />
    </Modal>
  )
}

export default ReviewModal