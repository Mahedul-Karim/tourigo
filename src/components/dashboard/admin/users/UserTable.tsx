import React from "react";
import GridContainer from "../../common/table/GridContainer";
import THead from "../../common/table/THead";
import UserBody from "./UserBody";
import { User } from "@prisma/client";

interface Props {
  isUserTable?: boolean;
  users: User[];
}

const UserTable: React.FC<Props> = ({ isUserTable = false, users }) => {
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
        {users.map((user) => (
          <UserBody
            isUserTable={isUserTable}
            key={user.id}
            name={user?.firstName + " " + user?.lastName}
            email={user?.email}
            joinedAt={user?.joinedAt}
            role={user?.role}
            status={user?.status}
          />
        ))}
      </GridContainer>
    </div>
  );
};

export default UserTable;
