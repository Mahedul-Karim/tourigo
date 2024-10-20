import React from "react";
import Title from "@/components/dashboard/common/Title";
import UserTable from "@/components/dashboard/admin/users/UserTable";

const Page = () => {
  return (
    <>
      <div className="p-4 bg-white border-border border border-solid rounded-md">
        <Title>All Vendors</Title>
        <UserTable />
      </div>
    </>
  );
};

export default Page;
