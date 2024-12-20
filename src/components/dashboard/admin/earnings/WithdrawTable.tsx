"use client";
import React, { useState } from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import WithdrawBody from "./WithdrawBody";
import { Prisma } from "@prisma/client";

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
}

const WithdrawTable: React.FC<Props> = ({ withdraws }) => {
  const [withdrawData, setWithdrawData] = useState(withdraws);

  return (
    <GridContainer className="overflow-y-auto">
      <THead columns="0.4fr 0.3fr 0.3fr 0.3fr 0.2fr 0.1fr">
        <div>Account</div>
        <div>Name</div>
        <div>Amount</div>
        <div>Requested At</div>
        <div>Status</div>
        <div></div>
      </THead>
      {withdrawData?.map((withdraw) => (
        <WithdrawBody
          key={withdraw.id}
          withdraws={withdrawData}
          accountNumber={withdraw.accountNumber}
          amount={withdraw.amount}
          fullName={withdraw.user.firstName + " " + withdraw.user.lastName}
          createdAt={withdraw.createdAt}
          status={withdraw.status}
          setWithdrawData={setWithdrawData}
          id={withdraw.id}
        />
      ))}
    </GridContainer>
  );
};

export default WithdrawTable;
