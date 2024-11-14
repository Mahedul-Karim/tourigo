import Image from 'next/image'
import React from 'react'

const Empty = () => {
  return (
    <div className="flex items-center justify-center h-full">
        <Image src="/assets/nodata.png" width={400} height={350} alt=""/>
    </div>
  )
}

export default Empty