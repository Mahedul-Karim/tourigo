import React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement>{
  src:string;
  review:string;
  user:string;
  profession:string;
}

const Card: React.FC<Props> = ({ className, onClick,src,review,user,profession }) => {
  return (
    <div
      className={`transition-all duration-500 absolute px-9 py-7 bg-white rounded-lg w-full sm:max-w-[90%] ${className}`}
      onClick={onClick}
    >
      <div className="absolute -top-5 -left-5 border-3 border-solid border-white rounded-full overflow-clip">
        <img src={src} alt="" className="size-12" />
      </div>
      <p className="text-dark-3 text-sm leading-[1.6]">
       {review}
      </p>
      <div className="mt-3">
        <h4 className="font-bold">{user}</h4>
        <p className="text-dark-3 text-sm">{profession}</p>
      </div>
    </div>
  );
};

export default Card;
