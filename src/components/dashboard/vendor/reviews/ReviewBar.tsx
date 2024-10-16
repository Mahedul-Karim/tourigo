import React from 'react'
import { FaRegStar } from 'react-icons/fa'

const ReviewBar = () => {
  return (
    <div className="flex items-center gap-2 text-dark-1 xs:text-base text-sm">
            <p className="flex items-center gap-1">
              <span>5</span> <FaRegStar />
            </p>
            <div className="h-2.5 xs:h-3 w-full xs:w-[60%] md:w-[40%] rounded-md bg-gray-200 relative overflow-clip">
              <div className="absolute left-0 top-0 h-full w-[60%] bg-yellow-1" />
            </div>
            <p className="font-medium">250</p>
          </div>
  )
}

export default ReviewBar