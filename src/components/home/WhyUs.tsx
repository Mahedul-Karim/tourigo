import React from "react";
import Container from "../common/ui/Container";
import Image from "next/image";

import H3 from "./section/H3";
import H2 from "./section/H2";
import CheckItems from "./section/CheckItems";
import { TbJacket } from "react-icons/tb";
import ListItems from "./section/ListItems";
import { CiBadgeDollar } from "react-icons/ci";
import { CiPlane } from "react-icons/ci";

const WhyUs = () => {
  return (
    <div>
      <Container className="py-10 grid md:grid-cols-[1fr_25%_1fr]">
        <div className="flex flex-col gap-3 justify-center">
          <H3>Why Choose Us</H3>
          <H2>Your Ultimate Tour Agency</H2>

          <p className="sm:text-base text-xs xs:text-sm text-dark-0">
            Choose us for an unparalleled travel experience tailored to your
            desires. With our commitment to excellence, extensive destination
            knowledge, and personalized service.
          </p>
          <div className="flex flex-col gap-4">
            <CheckItems>Personalized Service</CheckItems>
            <CheckItems>Destination Knowledge</CheckItems>
            <CheckItems>Hassle-Free Planning</CheckItems>
            <CheckItems>Customer Satisfaction Guaranteed</CheckItems>
          </div>
        </div>
        <div className="">
          <Image
            alt=""
            src="/assets/why.png"
            width={815}
            height={2063}
            className="w-full h-auto object-contain max-h-[250px] xs:max-h-[450px] md::max-h-[500px]"
          />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <ListItems
            Icon={
              <TbJacket className="text-[30px] xs:text-[42px] stroke-1 stroke-secondary" />
            }
            text="Share the core values and principles that drive your tourigo
                company. Emphasize a commitment to customer."
            heading="Excellent Security"
          />
          <ListItems
            Icon={
              <CiBadgeDollar className="text-[30px] xs:text-[42px] text-secondary" />
            }
            text="Share the core values and principles that drive your tourigo
                company. Emphasize a commitment to customer."
            heading="Cost Efficiency"
          />
          <ListItems
            Icon={
              <CiPlane className="text-[30px] xs:text-[42px] text-secondary" />
            }
            text="Share the core values and principles that drive your tourigo
                company. Emphasize a commitment to customer."
            heading="World Wide Route"
          />
        </div>
      </Container>
    </div>
  );
};

export default WhyUs;
