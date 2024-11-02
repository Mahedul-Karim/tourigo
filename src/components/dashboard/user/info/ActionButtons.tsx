"use client";

import ConfirmationModal from "@/components/common/ui/modal/ConfirmationModal";
import { useCtx } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoExitOutline } from "react-icons/io5";
import { toast } from "sonner";

const ActionButtons = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { setUser, setIsLoggedIn, setToken } = useCtx();

  const router = useRouter();

  const modalAction = async () => {
    try {
      setIsLoading(true);

      await fetch("/api/logout", {
        method: "POST",
      });

      setUser(null);
      setIsLoggedIn(false);
      setToken("");
      localStorage.removeItem("userToken");
      toast.success("Success!", {
        description: "Logged out successfully!",
      });
      router.push("/");
    } catch (err) {
      toast.error("Error!", {
        description: "Something went wrong!",
      });
    } finally {
      setIsLoading(false);
      setOpen(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button onClick={setOpen.bind(null, true)}>
        <IoExitOutline className="text-xl xs:text-2xl text-dark-1" />
      </button>
      {open && (
        <ConfirmationModal
          title="Are you sure want to logout?"
          onModalClose={setOpen}
          onModalAction={modalAction}
          isLoading={isLoading}
        />
      )}
    </div>
  );
};

export default ActionButtons;
