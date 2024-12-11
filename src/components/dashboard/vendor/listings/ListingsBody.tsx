import React from "react";
import Image from "next/image";
import Grid from "../../common/table/Grid";
import { formatCurrency, formatDate } from "@/lib/utils";
import TableAction from "../../common/table/TableAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import { Tour } from "@prisma/client";

interface Props{
  gallery:{
    public_id:string;
    url:string;
  }[];
  tourName:string;
  price:number;
  createdAt:Date;
  status:string;
  tour:Tour;
}

const ListingsBody:React.FC<Props> = ({gallery,tourName,price,createdAt,status,tour}) => {
  return (
    <Grid className="items-center">
      <div>
        <Image
          src={gallery?.[0]?.url}
          alt=""
          width={890}
          height={750}
          className="w-[80px] h-[50px] object-cover rounded-md"
        />
      </div>
      <div>
        <p className="text-[14px] text-dark-1 font-semibold">
          {tourName}
        </p>
      </div>
      <div>
        <p className="text-[13px] text-dark-1 font-semibold">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="text-[13px] text-dark-1 font-medium">{formatDate(new Date(createdAt))}</div>
      <div>
        <Badge
          backgroundColor={STATUS[status].bg}
          textColor={STATUS[status].text}
        >
          {status}
        </Badge>
      </div>
      <div>
        <TableAction tour={tour}/>
      </div>
    </Grid>
  );
};

export default ListingsBody;
