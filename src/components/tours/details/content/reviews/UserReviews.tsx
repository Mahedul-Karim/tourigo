import React from 'react'

import UserAvatar from "@/components/common/ui/UserAvatar";
import Ratings from "@/components/common/ui/Ratings";
const UserReviews = () => {
  return (
    <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <UserAvatar />
            <div className="flex flex-col">
              <p className="text-sm text-dark-1">John Doe</p>
              <Ratings rating={4.5} styles="text-xs"/>
            </div>
          </div>
          <p className="text-xs text-dark-1 !leading-[1.9]">Great for 4-5 hours to explore. Really a lot to see and tons of photo spots. Even have a passport for you to collect all the stamps as a souvenir. Must see for a Harry Potter fan.</p>
        </div>
  )
}

export default UserReviews