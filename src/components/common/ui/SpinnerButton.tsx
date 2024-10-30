import React from 'react'

interface Props{
    size?:string;
}


const SpinnerButton:React.FC<Props> = ({size="size-5"}) => {
  return (
    <div className={`${size} rounded-full border-[4px] border-solid border-white border-b-transparent animate-spin`}></div>
  )
}

export default SpinnerButton