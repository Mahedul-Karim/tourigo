import React from "react";
import Container from "@/components/common/ui/Container";
import Sidebar from "@/components/tours/all-tours/Sidebar";
import LayoutToggle from "@/components/tours/all-tours/main/LayoutToggle";
import Search from "@/components/tours/all-tours/main/Search";
import Spinner from "@/components/common/ui/Spinner";

const Loading = () => {
  return (
    <main>
      <Container className="py-32 xs:py-40 grid md:grid-cols-[0.4fr_1fr] gap-6">
        <Sidebar />
        <main className="order-1 md:order-2 bg-white rounded-lg border border-solid border-border p-2 xs:p-4 min-h-[300px] md:min-h-[630px]">
          <div className="flex sm:flex-row-reverse items-center">
            <div className="flex items-center gap-2 xs:gap-4 w-full sm:w-auto">
              <LayoutToggle type={"grid"} />
              <Search />
            </div>
          </div>
          <div className="flex items-center justify-center h-full">
            <Spinner />
          </div>
        </main>
      </Container>
    </main>
  );
};

export default Loading;
