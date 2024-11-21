import Spinner from '@/components/common/ui/Spinner'
import React from 'react'

const Loading = () => {
  return (
    <div className="pt-[70px]">
        <div className='h-[80vh] flex items-center justify-center'>
            <Spinner />
        </div>
    </div>
  )
}

export default Loading