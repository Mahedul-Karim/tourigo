import React from 'react'
import SectionHeading from "../../common/SectionHeading";
import WithdrawTable from './WithdrawTable';
import { Prisma } from '@prisma/client';
import Empty from '@/components/common/ui/Empty';

interface Props{
  withdraws:Prisma.WithdrawGetPayload<{
    include:{
      user:{
        select:{
          firstName:true,
          lastName:true
        }
      }
    }
  }>[]
}

const AllWithdraws:React.FC<Props> = ({withdraws}) => {
  return (
    <div className="p-4 bg-white border-border border border-solid rounded-md mt-6">
        <SectionHeading>Withdraw Request&apos;s</SectionHeading>
        <div className="mt-6">
          {withdraws.length === 0 ? <Empty /> : <WithdrawTable withdraws={withdraws} />}
        </div>
    </div>
  )
}

export default AllWithdraws