import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props{
  src?:string | null | undefined;
  fallback?:string | null;
}

const UserAvatar:React.FC<Props> = ({src,fallback="TG"}) => {
  return (
    <div className="flex items-center gap-2">
      <Avatar>
        {src && <AvatarImage src={src as string} />}
        <AvatarFallback>{fallback}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
