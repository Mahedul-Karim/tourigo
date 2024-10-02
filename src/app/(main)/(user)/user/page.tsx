import Section from "@/components/dashboard/common/Section";
import Title from "@/components/dashboard/common/Title";
import ActionButtons from "@/components/dashboard/user/info/ActionButtons";
import DeleteUser from "@/components/dashboard/user/info/DeleteUser";
import InfoForm from "@/components/dashboard/user/info/InfoForm";
import UserImage from "@/components/dashboard/user/UserImage";
import React from "react";

const Page = () => {
  return (
    <>
      <Section>
        <div className="flex items-center justify-between">
          <Title>Basic Info</Title>
          <ActionButtons />
        </div>
        <div className="mt-4">
          <UserImage className="flex md:hidden w-28 h-28" />
          <InfoForm />
        </div>
      </Section>
      <DeleteUser />
    </>
  );
};

export default Page;
