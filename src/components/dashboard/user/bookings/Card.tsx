import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <article className="grid sm:grid-cols-[0.5fr_1fr_0.7fr] gap-3 py-4 px-3">
      <div className="">
        <Image
          src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
          alt=""
          width={821}
          height={0}
          className="object-cover aspect-video sm:aspect-auto sm:h-full rounded-md"
        />
      </div>
      <div className="flex flex-col gap-1 justify-center">
        <Link href="/" className="text-sm xs:text-base lg:text-lg font-semibold text-dark-1">
          Enchanted Island Escapades: Mystical
        </Link>
        <p className="text-xs xs:text-sm text-dark-0">3 Adults and 1 infant</p>
        <p className="text-xs xs:text-sm text-dark-0">Tour Starts At: 21 Aug, 2026</p>
      </div>
      <div className="flex flex-col gap-1 justify-center text-dark-1 text-xs xs:text-sm lg:text-base">
        <p className="font-medium flex items-center justify-between sm:justify-normal">
          Trip Id:<span className="font-semibold"> TG-3564-BD00</span>
        </p>
        <p className="font-medium flex items-center justify-between sm:justify-normal">
          Booked At:<span className="font-semibold"> 20 Aug, 2029</span>
        </p>
        <p className="font-medium flex items-center justify-between sm:justify-normal">
          Total Price: <span className="font-semibold md:text-lg">$1873</span>
        </p>
      </div>
    </article>
  );
};

export default Card;
