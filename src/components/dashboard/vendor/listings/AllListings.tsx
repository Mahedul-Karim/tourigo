import React from "react";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import Image from "next/image";
import GridContainer from "../../common/table/GridContainer";
import Grid from "../../common/table/Grid";
import THead from "../../common/table/THead";
import { formatCurrency } from "@/lib/utils";
import TableAction from "../../common/table/TableAction";

const AllListings = () => {
  return (
    <GridContainer>
      <THead>
        <div></div>
        <div>Name</div>
        <div>Price</div>
        <div>Created At</div>
        <div></div>
      </THead>
      <Grid className="items-center">
        <div>
          <Image
            src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
            alt=""
            width={890}
            height={750}
            className="w-[100px] h-[70px] object-cover rounded-md"
          />
        </div>
        <div>
          <p className="text-[15px] text-dark-1 font-semibold">Centipede Tour - Guided Arizona Desert Tour by ATV</p>
        </div>
        <div>
          <p className="text-sm text-dark-1 font-semibold">{formatCurrency(1999)}</p>
        </div>
        <div className="text-sm text-dark-1 font-medium">21 Aug, 2020</div>
        <div>
          <TableAction />
          
        </div>
      </Grid>
    </GridContainer>
  );
};

export default AllListings;
