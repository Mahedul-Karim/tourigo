import React from "react";
import Image from "next/image";
import Grid from "../../common/table/Grid";
import { formatCurrency, formatDate } from "@/lib/utils";
import TableAction from "./TableAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import Link from "next/link";

type Props = {
  id: string;
  image: string;
  tourName: string;
  price: number;
  status: string;
  createdAt: Date;
  creator: {
    firstName: string;
    lastName: string;
  };
  listings: {
    id: string;
    tourName: string;
    price: number;
    status: string;
    gallery: {
      url: string;
    }[];
    creatorId: string;
    createdAt: Date;
    creator: {
      firstName: string;
      lastName: string;
    };
  }[];
  setListings: (val: any) => void;
};

const ListingsBody: React.FC<Props> = ({
  id,
  image,
  tourName,
  price,
  status,
  createdAt,
  creator,
  listings,
  setListings,
}) => {
  return (
    <Grid
      className="items-center group"
      columns="70px 0.4fr 0.1fr 0.2fr 0.1fr 0.2fr 40px"
    >
      <div>
        <Image
          src={image}
          alt=""
          width={890}
          height={750}
          className="w-[80px] h-[50px] object-cover rounded-md"
        />
      </div>
      <div>
        <Link
          href={`/tours/${tourName?.toLowerCase()}`}
          className="text-[14px] text-dark-1 font-medium"
        >
          <span className="bg-gradient-to-r from-[#000] from-0% to-[#000] bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-500 group-hover:bg-[length:100%_1px] py-[2px]">
            {tourName?.length >= 58
              ? tourName?.substring(0, 58) + "..."
              : tourName}
          </span>
        </Link>
      </div>
      <div>
        <p className="text-[13px] text-dark-1 font-medium">
          {formatCurrency(price)}
        </p>
      </div>
      <div className="text-[13px] text-dark-1 font-medium">
        {createdAt && formatDate(new Date(createdAt))}
      </div>
      <div>
        <p className="text-[13px] text-dark-1 font-semibold">
          {creator?.firstName + " " + creator?.lastName?.at(0) + "."}
        </p>
      </div>
      <div>
        <Badge
          backgroundColor={STATUS[status?.toLowerCase()].bg}
          textColor={STATUS[status?.toLowerCase()].text}
        >
          {status?.toLowerCase()}
        </Badge>
      </div>

      <TableAction id={id} listings={listings} setListings={setListings} />
    </Grid>
  );
};

export default ListingsBody;
