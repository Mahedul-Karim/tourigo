"use client";

import React from "react";

import { ColumnDef } from "@tanstack/react-table";

import DataTable from "@/components/common/table/DataTable";
import Badge from "@/components/common/ui/Badge";
import { STATUS } from "@/lib/data";

type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "completed";
  email: string;
  gender: string;
};

export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
    gender: "male",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "completed",
    email: "example@gmail.com",
    gender: "female",
  },
  // ...
];

const columns: ColumnDef<Payment | any>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ cell, row }) => {
      return (
        <Badge
          backgroundColor={STATUS[row.original.status].bg}
          textColor={STATUS[row.original.status].text}
        >
          {row.original.status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

const RecentBookings = () => {
  return (
    <div className="mt-6">
      <DataTable columns={columns} data={payments} />
    </div>
  );
};

export default RecentBookings;
