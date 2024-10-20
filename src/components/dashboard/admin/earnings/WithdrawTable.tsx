import React from 'react'
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import WithdrawBody from './WithdrawBody'

const WithdrawTable = () => {
  return (
    <GridContainer className="overflow-y-auto">
      <THead columns="0.4fr 0.3fr 0.3fr 0.2fr 0.1fr">
        <div>Vendor Name</div>
        <div>Amount</div>
        <div>Requested At</div>
        <div>Status</div>
        <div></div>
        
      </THead>
      <WithdrawBody />
      <WithdrawBody />
      <WithdrawBody />
      <WithdrawBody />
    </GridContainer>
  )
}

export default WithdrawTable