import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const CardSkeleton = () => {
  return (
    <div>
        <div>
            <Skeleton className="h-[100px] xs:h-[150px] lg:h-[180px]"/>
        </div>
        <div className="flex flex-col py-[10px]">
            
            <Skeleton className='h-[40px] mt-1'/>
        </div>
    </div>
  )
}

export default CardSkeleton