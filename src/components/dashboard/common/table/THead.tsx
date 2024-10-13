import React from 'react'
import Grid from './Grid'


interface Props extends React.HTMLAttributes<HTMLDivElement>{
    children:React.ReactNode;
    columns?: string;
}

const THead:React.FC<Props> = ({children,className,columns}) => {
  return (
    <Grid columns={columns} className={`${className} bg-background text-dark-1 capitalize text-sm font-semibold`}>
        {children}
    </Grid>
  )
}

export default THead