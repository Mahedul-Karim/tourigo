import Container from "@/components/common/ui/Container";
import Main from "@/components/tours/all-tours/Main";
import Sidebar from "@/components/tours/all-tours/Sidebar";
import React from "react";

const Page = () => {
  return (
    <main>
      <Container className="py-32 xs:py-40 grid md:grid-cols-[0.4fr_1fr] gap-6">
        <Sidebar />
        <main className="order-1 md:order-2 bg-white rounded-lg border border-solid border-border p-2 xs:p-4 min-h-[300px] md:min-h-[630px]">
          <Main />
        </main>
      </Container>
    </main>
  );
};

export default Page;
