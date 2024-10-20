import React from "react";
import Grid from "../../common/table/Grid";
import UserAction from "./UserAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
const UserBody = () => {
  return (
    <Grid
      className="items-center text-[14px] text-dark-1 font-medium py-3 px-2"
      columns="0.2fr 0.3fr 0.3fr 0.2fr 0.2fr 0.1fr"
    >
      <div>John Doe</div>
      <div>test@gmail.com</div>
      <p className="text-[13px]">20 Aug, 2025</p>
      <p className="text-sm">user</p>
      <div>
        <Badge
          backgroundColor={STATUS["blocked"].bg}
          textColor={STATUS["blocked"].text}
        >
          blocked
        </Badge>
      </div>
      <UserAction />
    </Grid>
  );
};

export default UserBody;
