import Container from "@/components/common/ui/Container";
import Heading from "@/components/common/ui/Heading";
import FaqAccordion from "@/components/tours/details/content/faq/FaqAccordion";
import React from "react";

const Page = () => {
  return (
    <Container className="py-32 xs:py-40 flex flex-col gap-6">
      <Heading>Frequently Asked Questions</Heading>
      <div className="flex flex-col gap-4">
        <FaqAccordion title={"Can I get the refund?"} />
        <FaqAccordion title={"Can I change the travel date?"} />
        <FaqAccordion title={"When and where does the tour end?"} />
        <FaqAccordion title={"Do you arrange airport transfers?"} />
      </div>
    </Container>
  );
};

export default Page;
