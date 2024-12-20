"use client";

import React, { useEffect, useState } from "react";
import Container from "../common/ui/Container";
import Heading from "../common/ui/Heading";
import Featured from "../tours/featured/Featured";
import CardSkeleton from "@/components/common/ui/skeleton/CardSkeleton";
import { featuredTours } from "@/lib/actions/tours";
import Empty from "../common/ui/Empty";

const FeaturedTours = () => {
  const [tours, setTours] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=>{
    ;(async()=>{
      try{
        setIsLoading(true)
        const { tours } =await featuredTours();
        setTours(tours)
      }catch(err:any){
        console.log('Fetching error!')
      }finally{
      setIsLoading(false)}
    })()
  },[])


  if (isLoading) {
    return (
      <div>
        <Container className="py-10">
          <Heading>Featured Tours</Heading>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 xs:gap-4 sm:gap-6 lg:gap-10 mt-6">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div>
      <Container className="py-10">
        <Heading>Featured Tours</Heading>

        {tours?.length === 0 ? <Empty /> : <Featured tours={tours}/>}
      </Container>
    </div>
  );
};

export default FeaturedTours;
