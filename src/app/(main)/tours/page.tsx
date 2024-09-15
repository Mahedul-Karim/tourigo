import Container from "@/components/common/ui/Container";
import Sidebar from "@/components/tours/all-tours/Sidebar";
import React from "react";

const Page = () => {
  return (
    <main>
      <Container className="py-40 grid grid-cols-[0.4fr_1fr] gap-6">
        <Sidebar />
        <div className="p-4 bg-white rounded-xl border border-solid border-border"></div>
      </Container>
    </main>
  );
};

export default Page;
