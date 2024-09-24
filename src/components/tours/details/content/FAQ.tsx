import React from "react";
import Title from "./Title";

import FaqAccordion from "./faq/FaqAccordion";

const FAQ = () => {
  return (
    <div>
      <Title>FAQ</Title>
      <div className="mt-4 flex flex-col gap-6">
        <FaqAccordion title={"Can I get the refund?"}/>
        <FaqAccordion title={"Can I change the travel date?"}/>
        <FaqAccordion title={"When and where does the tour end?"}/>
        <FaqAccordion title={"Do you arrange airport transfers?"}/>
      </div>
    </div>
  );
};

export default FAQ;
