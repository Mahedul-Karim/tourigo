import React from 'react'
import Grid from "../../common/table/Grid";
import Image from "next/image";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import { formatCurrency } from "@/lib/utils";

const BookingsBody = () => {
  return (
    <Grid
        columns="90px 0.9fr 0.3fr 0.3fr 0.2fr 0.3fr 0.3fr"
        className="text-dark-1 text-[13px] items-center"
      >
        <div className="whitespace-nowrap overflow-clip text-ellipsis">
          728ed52f
        </div>
        <div className="flex items-center gap-2">
          <div className="shrink-0">
            <Image
              src="https://viatour-nextjs.vercel.app/_next/image?url=%2Fimg%2FtourCards%2F1%2F1.png&w=640&q=75"
              width={50}
              height={50}
              alt=""
              className="rounded-lg aspect-square"
            />
          </div>
          <p className="line-clamp-2">
            Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine
            Tour
          </p>
        </div>
        <p>25 Aug, 2025</p>
        <p>25 Aug, 2025</p>
        <div>{formatCurrency(2020)}</div>
        <p>10 People</p>
        <div>
          <Badge
            backgroundColor={STATUS["pending"]?.bg}
            textColor={STATUS["pending"]?.text}
          >
            Pending
          </Badge>
        </div>
      </Grid>
  )
}

export default BookingsBody