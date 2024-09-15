import React from "react";
import Container from "../common/ui/Container";
import Heading from "../common/ui/Heading";
import { ACTIVITY_IMAGES } from "@/lib/data";
import Image from "next/image";

const Activity = () => {
  return (
    <section>
      <Container className="py-10 sm:py-20">
        <Heading>Popular things to do</Heading>
        <div className="grid grid-cols-2 xs:grid-cols-3 mt-8 md:grid-cols-6 gap-6">
          {ACTIVITY_IMAGES.map((activity) => (
            <div
              key={activity.id}
              className="rounded-lg relative overflow-clip group"
            >
              <div className="relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#05073c]/[0.3] after:z-[1]">
                <Image
                  alt=""
                  src={activity.url}
                  width={284}
                  height={327}
                  className="object-cover transition-all duration-500 group-hover:scale-[1.15]"
                />
              </div>
              <div className="absolute top-0 left-0 w-full h-full flex flex-col-reverse z-[2] items-center">
                <div className="pb-2 xs:pb-4 text-white flex flex-col items-center">
                  <p className="text-xs sm:text-base">{activity.title}</p>
                  <p className="text-[10px] sm:text-xs">{activity.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Activity;
