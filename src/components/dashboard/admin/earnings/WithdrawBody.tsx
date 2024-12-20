import React, { useState } from "react";
import Grid from "../../common/table/Grid";
import { formatCurrency, formatDate } from "@/lib/utils";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";
import TableAction from "./TableAction";
import { Prisma } from "@prisma/client";
import { toast } from "sonner";
import { updateWithdrawStatus } from "@/lib/actions/admin";
import LinearProgress from "@/components/common/ui/LinearProgress";

interface Props {
  withdraws: Prisma.WithdrawGetPayload<{
    include: {
      user: {
        select: {
          firstName: true;
          lastName: true;
        };
      };
    };
  }>[];
  accountNumber: string;
  fullName: string;
  amount: number;
  createdAt: Date;
  status: string;
  setWithdrawData: (val: any) => void;
  id: string;
}

const WithdrawBody: React.FC<Props> = ({
  withdraws,
  accountNumber,
  fullName,
  amount,
  createdAt,
  status,
  id,
  setWithdrawData,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleWithdrawUpdate = async () => {
    try {
      setIsLoading(true);

      const res = await updateWithdrawStatus(id);

      if (!res.success) {
        throw new Error(res.message);
      }

      const copiedData = [...withdraws];

      const indexOfCurrentData = copiedData.findIndex((dat) => dat.id === id);

      //@ts-ignore
      copiedData[indexOfCurrentData] = res.data;

      setWithdrawData(copiedData);

      toast.success("Success!", {
        description: "Withdraw data updated successfully!",
      });
    } catch (err: any) {
      toast.error("Error!", {
        description: err.message,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      <Grid
        className="items-center text-[14px] text-dark-1 font-medium py-3 px-2"
        columns="0.4fr 0.3fr 0.3fr 0.3fr 0.2fr 0.1fr"
      >
        <div>{accountNumber}</div>
        <div>{fullName}</div>
        <div>
          <p className="text-[13px] text-dark-1 font-medium">
            {formatCurrency(amount)}
          </p>
        </div>

        <div className="text-[13px] text-dark-1 font-medium">
          {formatDate(new Date(createdAt))}
        </div>

        <div>
          <Badge
            backgroundColor={STATUS[status].bg}
            textColor={STATUS[status].text}
          >
            {status}
          </Badge>
        </div>
        {status !== "approved" && (
          <TableAction onClick={handleWithdrawUpdate} isLoading={isLoading} />
        )}
      </Grid>
    </>
  );
};

export default WithdrawBody;
