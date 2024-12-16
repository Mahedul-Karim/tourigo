import React from "react";
import Grid from "../../common/table/Grid";
import { formatCurrency } from "@/lib/utils";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import TableAction from "./TableAction";

const WithdrawBody = () => {
  return (
    <Grid
      className="items-center text-[14px] text-dark-1 font-medium py-3 px-2"
      columns="0.4fr 0.3fr 0.3fr 0.3fr 0.2fr 0.1fr"
    >
      <div>12345678</div>
      <div>John Doe</div>
      <div>
        <p className="text-[13px] text-dark-1 font-medium">
          {formatCurrency(1999)}
        </p>
      </div>

      <div className="text-[13px] text-dark-1 font-medium">21 Aug, 2020</div>

      <div>
        <Badge
          backgroundColor={STATUS["rejected"].bg}
          textColor={STATUS["rejected"].text}
        >
          rejected
        </Badge>
      </div>
      <TableAction />
    </Grid>
  );
};

export default WithdrawBody;
