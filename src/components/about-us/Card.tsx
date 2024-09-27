import Image from "next/image";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  title: string;
  desc: string;
  itemsClass?:string;
}

const Card: React.FC<Props> = ({ src, title, desc,className,itemsClass }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <div>
        <Image
          alt=""
          src={src}
          width={0}
          height={0}
          className="size-[40px] xs:size-[50px]"
        />
      </div>
      <div className={`flex flex-col gap-3 max-w-[230px] ${itemsClass}`}>
        <h4 className="text-dark-1 text-sm xs:text-base">{title}</h4>
        <p className="text-xs xs:text-sm text-dark-1 !leading-[1.8]">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
