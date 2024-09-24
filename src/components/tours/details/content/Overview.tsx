import React from "react";
import Title from "./Title";

const Overview = () => {
  return (
    <div className="mt-12">
      <Title>Tour Overview</Title>
      <p className="text-dark-1 text-[11px] xs:text-[13px] !leading-[1.9] mt-4">
        The Phi Phi archipelago is a must-visit while in Phuket, and this
        speedboat trip whisks you around the islands in one day. Swim over the
        coral reefs of Pileh Lagoon, have lunch at Phi Phi Leh, snorkel at
        Bamboo Island, and visit Monkey Beach and Maya Bay, immortalized in
        &quot;The Beach.&quot; Boat transfers, snacks, buffet lunch, snorkeling
        equipment, and Phuket hotel pickup and drop-off all included.
      </p>
      <div className="mt-4">
        <h4 className="text-dark-1 font-medium text-base xs:text-lg">Tour Highlights</h4>
        <ul className="text-dark-1 text-[11px] xs:text-[13px] mt-4 list-disc flex flex-col gap-2 list-inside">
          <li>
            Experience the thrill of a speedboat to the stunning Phi Phi Islands
          </li>
          <li>Be amazed by the variety of marine life in the archepelago</li>
          <li>
            Enjoy relaxing in paradise with white sand beaches and azure
            turquoise water
          </li>
          <li>Feel the comfort of a tour limited to 35 passengers</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
