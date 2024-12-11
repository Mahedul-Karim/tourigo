"use client";

import React, { useState } from "react";
import { GoPencil } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import ConfirmationModal from "@/components/common/ui/modal/ConfirmationModal";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useCtx } from "@/context/ContextProvider";
import { Tour } from "@prisma/client";

interface Props{
  tour:Tour
}

const TableAction:React.FC<Props> = ({tour}) => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { setTourToEdit } = useCtx()

  const handleEditTour=()=>{
    setTourToEdit(()=>tour);
    router.push('/vendor/edit-listings')
  }

  const modalAction = async () => {
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    setOpen(false);
    toast.error("Error!", {
      description: "Something went wrong! Please try again later",
    });
  };

  return (
    <div className="flex items-center justify-center gap-4 relative">
      <button onClick={handleEditTour}>
        <GoPencil className="text-xl" />
      </button>
      <button onClick={setOpen.bind(null, true)}>
        <FiTrash className="text-xl" />
      </button>
      {open && (
        <ConfirmationModal
          title="Are you sure want to delete this tour? This action cannot be undone."
          onModalClose={setOpen}
          onModalAction={modalAction}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default TableAction;
