import React from "react";
import Container from "../common/ui/Container";
import Image from "next/image";
import ButtonLink from "../common/ui/ButtonLink";
import CheckItems from "./section/CheckItems";

const AboutCompany = () => {
  return (
    <div className="bg-[#FEF7F4]">
      <Container className="py-10 sm:py-20 grid md:grid-cols-2 gap-6">
        <div className="relative">
          <div className="h-[250px] xs:h-[300px] sm:h-[400px] md:h-auto md:max-w-[476px] overflow-clip rounded-lg">
            <Image
              alt=""
              src="/assets/about1.png"
              width={690}
              height={790}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="hidden lg:block absolute overflow-clip top-[275px] right-[20px]">
            <Image
              alt=""
              src="/assets/about2.png"
              width={690}
              height={790}
              className="max-h-[333px] w-auto object-cover border-[8px] border-solid border-white rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-center">
          <h3 className="text-sm xs:text-lg sm:text-xl text-secondary font-medium">
            About Our Company
          </h3>
          <p className="text-lg xs:text-2xl sm:text-4xl font-bold text-dark-1">
            Mapping Adventures, Making Moments
          </p>
          <p className="sm:text-base text-xs xs:text-sm text-dark-0">
            Share the core values and principles that drive your company.
            Emphasize a commitment to customer satisfaction, responsible
            tourism, or any unique approach you have towards travel.
          </p>
          <div className="flex flex-col gap-4">
            <CheckItems>Find Trips That Fit Your Flexible Lifestyle</CheckItems>
            <CheckItems>Expert-Guided Travel with Tourigo</CheckItems>
            <CheckItems>Discover the True Cost of Your Trip</CheckItems>
          </div>
          <div className="self-start">
            <ButtonLink href="/about-us">Know More</ButtonLink>
          </div>
        </div>
      </Container>{" "}
    </div>
  );
};

export default AboutCompany;
