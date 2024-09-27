import Container from "@/components/common/ui/Container";
import Heading from "@/components/common/ui/Heading";
import FaqAccordion from "@/components/tours/details/content/faq/FaqAccordion";
import React from "react";

const Page = () => {
  return (
    <Container className="py-32 xs:py-40 flex flex-col gap-6">
      <Heading>Frequently Asked Questions</Heading>
      <div className="flex flex-col gap-4">
        <FaqAccordion title={"What does Tourigo offer?"} />
        <FaqAccordion title={"How can I book a tour with Tourigo?"} />
        <FaqAccordion title={"Are Tourigo tours guided?"} />
        <FaqAccordion title={"What safety measures does Tourigo have in place?"} />
        <FaqAccordion title={"What if I need to cancel or modify my reservation?"} />
      </div>
    </Container>
  );
};

export default Page;
