"use client";

import DotMenu from "@/components/common/DotMenu";
import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { updateTourStatus } from "@/lib/actions/tours";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Status } from "@prisma/client";
import LinearProgress from "@/components/common/ui/LinearProgress";

type Props = {
  id: string;
  listings: {
    id: string;
    tourName: string;
    price: number;
    status: string;
    gallery: {
      url: string;
    }[];
    creatorId: string;
    createdAt: Date;
    creator?: {
      firstName: string;
      lastName: string;
    };
  }[];
  setListings: (val: any) => void;
};

const TableAction: React.FC<Props> = ({ id, listings, setListings }) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();

  const handleStatusUpdate = async (status: Status) => {
    try {
      setIsLoading(true);
      const res = await updateTourStatus(status, id, pathname);

      if (!res.success) {
        throw new Error(res.message);
      }
      toast.success("Success!", {
        description: res.message,
      });

      const copyListings = [...listings];

      const updatedListing = copyListings.find((list) => list.id === id);
      const updatedListingIndex = copyListings.findIndex(
        (list) => list.id === id
      );
      //@ts-ignore
      updatedListing.status = status;
      //@ts-ignore
      copyListings[updatedListingIndex] = updatedListing;

      setOpen(false);
      setListings(copyListings);
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
      <div className="relative">
        <button onClick={() => setOpen((prev) => !prev)}>
          <BsThreeDotsVertical className="text-lg" />
        </button>
        {open && (
          <DotMenu>
            <button
              disabled={isLoading}
              className="hover:bg-background cursor-pointer flex items-center gap-2 disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleStatusUpdate.bind(null, "approved")}
            >
              <IoMdCheckmarkCircleOutline className="text-base" /> Approve
            </button>
            <button
              disabled={isLoading}
              className="hover:bg-background cursor-pointer flex items-center gap-2 disabled:hover:bg-transparent disabled:cursor-not-allowed disabled:opacity-50"
              onClick={handleStatusUpdate.bind(null, "rejected")}
            >
              <RxCross2 className="text-base" />
              Decline
            </button>
          </DotMenu>
        )}
      </div>
    </>
  );
};

export default TableAction;
