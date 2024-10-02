import React from 'react'
import Section from "@/components/dashboard/common/Section";
import Title from "@/components/dashboard/common/Title";
import PasswordForm from '@/components/dashboard/user/security/PasswordForm';

const Page = () => {
  return (
    <>
    <Section>
        <Title>Password</Title>
        <PasswordForm />
    </Section>
    </>
  )
}

export default Page