import React from 'react'
import Container from "@/components/common/ui/Container";
import Title from '@/components/dashboard/common/Title';
import NewListing from '@/components/dashboard/vendor/listings/NewListing';
import AllListings from '@/components/dashboard/vendor/listings/AllListings';

const Page = () => {
  return (
    <Container className='py-8'>
        <div className="p-4 bg-white border-border border border-solid rounded-md">
            <div className='flex items-center justify-between'>
            <Title>Listings</Title>
            <NewListing />
            </div>
            
                <AllListings />
     
        </div>
    </Container>
  )
}

export default Page