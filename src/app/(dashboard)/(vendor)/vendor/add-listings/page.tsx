import React from "react";
import Container from "@/components/common/ui/Container";
import Title from "@/components/dashboard/common/Title";
import AddForm from "@/components/dashboard/vendor/add-listing/AddForm";

const Page = () => {
  return (
    <Container className="py-8">
      <Title>Add Tour</Title>
      <div className="max-w-[600px] w-full mt-6">
        <AddForm />
      </div>
    </Container>
  );
};

export default Page;
