import React from 'react'
import Section from "@/components/dashboard/common/Section";
import Title from "@/components/dashboard/common/Title";
import Card from '@/components/dashboard/user/bookings/Card';

const Page = () => {
  return (
    <>
    <Section>
        <Title>My Bookings</Title>
        <div className='mt-4 border border-solid border-border rounded-md overflow-clip bookingsCard'>
            <Card />
            <Card />
            <Card />
        </div>
    </Section>
    </>
  )
}

export default Page