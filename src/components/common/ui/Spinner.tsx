import React from 'react'

interface Props{
    size?:string;
}

const Spinner:React.FC<Props> = ({size="size-[112px]"}) => {
  return (
   
<div className={`${size}`}>
  <div className="box1"></div>
  <div className="box2"></div>
  <div className="box3"></div>
</div>
  )
}

export default Spinner