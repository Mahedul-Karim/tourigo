import React from "react";
import Container from "@/components/common/ui/Container";
import Image from "next/image";
import Card from "@/components/about-us/Card";
import { Button } from "@/components/ui/button";
import ButtonLink from "@/components/common/ui/ButtonLink";

const Page = () => {
  return (
    <main className="py-[80px]">
      <Container>
        <header className="relative h-[60vh] grid place-items-center z-[1]">
          <div className="absolute rounded-lg overflow-clip w-full h-full z-[-1]">
            <Image
              src="/assets/aboutbg1.webp"
              alt=""
              className="object-cover w-full h-full"
              width={1800}
              height={500}
            />
            <Image
              src="/assets/aboutbd2.svg"
              alt=""
              className="object-cover w-full absolute left-0 bottom-0"
              width={1800}
              height={50}
            />
          </div>
          <h3 className="text-3xl text-white font-semibold">About Us</h3>
        </header>
        <section className="py-10 grid md:grid-cols-2 gap-3">
          <p className="text-xl sm:text-2xl text-dark-1 font-semibold !leading-[1.4]">
            Our agency has been present for over 29 years in the market. We make
            the most of all our customers
          </p>
          <p className="text-xs xs:text-sm text-dark-0 !leading-[1.9]">
            Lorem ipsum dolor sit amet, consectetur adipiicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </section>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mt-8">
          <Card
            src="/assets/ticket.svg"
            title="Ultimate flexibility"
            desc="You're in control, with free cancellation and payment options to satisfy any plan or budget."
          />
          <Card
            src="/assets/hot-air-balloon.svg"
            title="Memorable experiences"
            desc="Browse and book tours and activities so incredible, you'll want to tell your friends."
          />
          <Card
            src="/assets/diamond.svg"
            title="Quality at our core"
            desc="High-quality standards. Millions of reviews. A tourz company."
          />
          <Card
            src="/assets/medal.svg"
            title="Award-winning support"
            desc="New price? New plan? No problem. We're here to help, 24/7."
          />
        </section>
        <section className="py-20 bg-[url('/assets/aboutbg.webp')] bg-no-repeat bg-cover rounded-lg mt-8 px-2 xs:px-5 sm:px-20">
          <div className="grid md:grid-cols-2 gap-4 place-items-center">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl xs:text-3xl text-dark-1 font-semibold max-w-[230px] !leading-[1.4]">
                We Make World Travel Easy
              </h3>
              <p className="text-xs xs:text-sm text-dark-1 !leading-[1.8] max-w-[370px]">
                Traveling under your own power and at your own pace, you&apos;ll
                connect more meaningfully with your destination and have more
                fun!
              </p>
              <div className="w-max">
                <ButtonLink href="/tours" invert>
                  Explore Tours
                </ButtonLink>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex sm:flex-col gap-4">
                <Card
                  src="/assets/1.svg"
                  title="240"
                  desc="Total Destinations"
                  className="bg-white items-center p-[20px] xs:p-[40px] rounded-lg"
                  itemsClass="items-center max-w-auto !gap-1 [&_>_h4]:text-primary"
                />
                <Card
                  src="/assets/2.svg"
                  title="92,842"
                  desc="Happy Customer"
                  className="bg-white items-center p-[20px] xs:p-[40px] rounded-lg"
                  itemsClass="items-center max-w-auto !gap-1 [&_>_h4]:text-primary"
                />
              </div>
              <div className="self-center mx-auto sm:mx-0">
                <Card
                  src="/assets/3.svg"
                  title="3672"
                  desc="Amazing Tours"
                  className="bg-white items-center p-[20px] xs:p-[40px] rounded-lg max-w-max sm:max-w-auto"
                  itemsClass="items-center max-w-auto !gap-1 [&_>_h4]:text-primary"
                />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
};

export default Page;
