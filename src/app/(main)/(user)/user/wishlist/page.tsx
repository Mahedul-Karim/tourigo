import React from 'react'
import Section from "@/components/dashboard/common/Section";
import Title from "@/components/dashboard/common/Title";
import Wishlist from '@/components/dashboard/user/wishlist/Wishlist';


const Page = () => {
  return (
    <>
    <Section>
        <Title>My Wishlist</Title>
        <Wishlist />
    </Section>
    </>
  )
}

export default Page