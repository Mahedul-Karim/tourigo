import React from "react";
import Grid from "../../common/table/Grid";
import UserAction from "./UserAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import { formatDate } from "@/lib/utils";


interface Props{
  isUserTable:boolean;
  name:string;
  email:string;
  joinedAt:Date;
  role:string;
  status:string;
}

const UserBody:React.FC<Props> = ({isUserTable,name,email,joinedAt,role,status}) => {
  return (
    <Grid
      className="items-center text-[14px] text-dark-1 font-medium py-3 px-2"
      columns="0.2fr 0.3fr 0.3fr 0.2fr 0.2fr 0.1fr"
    >
      <div>{name}</div>
      <div>{email}</div>
      <p className="text-[13px]">{formatDate(new Date(joinedAt))}</p>
      <p className="text-sm">{role}</p>
      <div>
        <Badge
          backgroundColor={STATUS[status].bg}
          textColor={STATUS[status].text}
        >
          {status}
        </Badge>
      </div>
      {/* <UserAction isUserTable={isUserTable}/> */}
    </Grid>
  );
};

export default UserBody;
