import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Props {
  title: string;
}

const FaqAccordion: React.FC<Props> = ({ title }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="border border-solid border-border bg-white px-4 rounded-lg"
    >
      <AccordionItem value={title} className="border-0">
        <AccordionTrigger className="text-dark-1 hover:no-underline text-sm">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-xs text-dark-1 !leading-[1.9]">
          Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet Lunch by
          Big Boat cancellation policy: For a full refund, cancel at least 24
          hours in advance of the start date of the experience. Discover and
          book Phang Nga Bay Sea Cave Canoeing & James Bond Island w/ Buffet
          Lunch by Big Boat
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
