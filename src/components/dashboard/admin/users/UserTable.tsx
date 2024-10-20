import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import UserBody from "./UserBody";

const UserTable = () => {
  return (
    <div className="mt-6">
      <GridContainer className="overflow-y-auto">
        <THead columns="0.2fr 0.3fr 0.3fr 0.2fr 0.2fr 0.1fr">
          <div>Name</div>
          <div>Email</div>
          <div>Joined At</div>
          <div>Role</div>
          <div>Status</div>

          <div></div>
        </THead>
        <UserBody />
        <UserBody />
        <UserBody />
        <UserBody />
      </GridContainer>
    </div>
  );
};

export default UserTable;
