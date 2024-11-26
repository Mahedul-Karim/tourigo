import React from "react";
import Image from "next/image";

interface Props {
  gallery: {
    public_id: string;
    url: string;
  }[];
}

const Gallery: React.FC<Props> = ({ gallery }) => {
  return (
    <div className="grid md:grid-cols-[0.6fr_0.4fr] gap-4 mt-6">
      <div className="rounded-lg overflow-clip h-[200px] xs:h-[250px] sm:h-[300px]  md:h-[350px] lg:h-[458px]">
        <Image
          src={gallery?.[0]?.url}
          alt=""
          width={710}
          height={200}
          className="rounded-lg h-full object-cover"
        />
      </div>
      <div className="rounded-lg overflow-clip grid md:grid-rows-[200px_1fr] lg:grid-rows-[250px_1fr] gap-4">
        <div className="h-[200px] xs:h-[250px] sm:h-[300px] md:h-auto">
          <Image
            src={gallery?.[1]?.url}
            alt=""
            width={710}
            height={200}
            className="rounded-lg h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 h-[150px] sm:h-auto">
          <div>
            <Image
              src={gallery?.[2]?.url}
              alt=""
              width={710}
              height={200}
              className="rounded-lg h-full object-cover"
            />
          </div>
          <div>
            <Image
              src={gallery?.[3]?.url}
              alt=""
              width={710}
              height={200}
              className="rounded-lg h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
