import React from "react";
import Image from "next/image";
import Grid from "../../common/table/Grid";
import { formatCurrency } from "@/lib/utils";
import TableAction from "../../common/table/TableAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";

const ListingsBody = () => {
  return (
    <Grid className="items-center">
      <div>
        <Image
          src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
          alt=""
          width={890}
          height={750}
          className="w-[80px] h-[50px] object-cover rounded-md"
        />
      </div>
      <div>
        <p className="text-[14px] text-dark-1 font-semibold">
          Centipede Tour - Guided Arizona Desert Tour by ATV
        </p>
      </div>
      <div>
        <p className="text-[13px] text-dark-1 font-semibold">
          {formatCurrency(1999)}
        </p>
      </div>
      <div className="text-[13px] text-dark-1 font-medium">21 Aug, 2020</div>
      <div>
        <Badge
          backgroundColor={STATUS["approved"].bg}
          textColor={STATUS["approved"].text}
        >
          approved
        </Badge>
      </div>
      <div>
        <TableAction />
      </div>
    </Grid>
  );
};

export default ListingsBody;
