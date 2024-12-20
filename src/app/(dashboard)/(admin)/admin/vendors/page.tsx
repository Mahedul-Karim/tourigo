import React from "react";
import Title from "@/components/dashboard/common/Title";
import UserTable from "@/components/dashboard/admin/users/UserTable";
import Empty from "@/components/common/ui/Empty";
import { allUsers } from "@/lib/actions/admin";

const Page = async () => {
  const { users } = await allUsers("vendor");

  return (
    <>
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Vendors</Title>
        {!users || users.length === 0 ? <Empty /> : <UserTable isUserTable users={users}/>}
      </div>
    </>
  );
};

export default Page;
