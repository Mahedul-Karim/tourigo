import React from 'react'
import SectionHeading from "../../common/SectionHeading";
import WithdrawTable from './WithdrawTable';


const AllWithdraws = () => {
  return (
    <div className="p-4 bg-white border-border border border-solid rounded-md mt-6">
        <SectionHeading>Withdraw Request&apos;s</SectionHeading>
        <div className="mt-6">
          <WithdrawTable />
        </div>
    </div>
  )
}

export default AllWithdraws