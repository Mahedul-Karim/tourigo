import React from "react";
import Image from "next/image";
import Grid from "../../common/table/Grid";
import { formatCurrency } from "@/lib/utils";
import TableAction from "./TableAction";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import Link from "next/link";

const ListingsBody = () => {
  return (
    <Grid
      className="items-center group"
      columns="70px 0.4fr 0.1fr 0.2fr 0.1fr 0.2fr 40px"
    >
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
        <Link
          href="/tours/efrtvsr"
          className="text-[14px] text-dark-1 font-medium"
        >
          <span className="bg-gradient-to-r from-[#000] from-0% to-[#000] bg-no-repeat bg-[0_100%] bg-[length:0_1px] transition-all duration-500 group-hover:bg-[length:100%_1px] py-[2px]">
            Centipede Tour - Guided Arizona Desert Tour by ATV
          </span>
        </Link>
      </div>
      <div>
        <p className="text-[13px] text-dark-1 font-medium">
          {formatCurrency(1999)}
        </p>
      </div>
      <div className="text-[13px] text-dark-1 font-medium">21 Aug, 2020</div>
      <div>
        <p className="text-[13px] text-dark-1 font-semibold">John D.</p>
      </div>
      <div>
        <Badge
          backgroundColor={STATUS["approved"].bg}
          textColor={STATUS["approved"].text}
        >
          approved
        </Badge>
      </div>

      <TableAction />
    </Grid>
  );
};

export default ListingsBody;
