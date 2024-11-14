import React from 'react'

interface Props{
    size?:string;
}

const Spinner:React.FC<Props> = ({size="size-[112px]"}) => {
  return (
   
<div className="typewriter">
    <div className="slide"><i></i></div>
    <div className="paper"></div>
    <div className="keyboard"></div>
</div>
  )
}

export default Spinner