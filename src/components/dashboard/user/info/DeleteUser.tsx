"use client";

import React, { useState } from "react";
import Section from "../../common/Section";
import Title from "../../common/Title";
import { Button } from "@/components/ui/button";
import ConfirmationModal from "@/components/common/ui/modal/ConfirmationModal";

const DeleteUser = () => {
  const [open, setOpen] = useState(false);

  return (
    <Section className="mt-6">
      <Title>Delete Your Account</Title>
      <p className="text-xs xs:text-sm text-dark-0 mt-3">
        When you delete your account, you lose access to Front account services,
        and we permanently delete your personal data. You can cancel the
        deletion in 14 days.
      </p>
      <Button
        className="text-xs xs:text-sm w-max mt-4 bg-yellow-1 hover:bg-yellow-1 hover:text-dark-1 text-dark-1 rounded-full"
        size={"lg"}
        onClick={setOpen.bind(null, true)}
      >
        Delete
      </Button>
      {open && (
        <ConfirmationModal
          title={"Are you sure?"}
          description={
            "Are your sure want to delete your account? This action cannot be undone"
          }
          onModalClose={setOpen}
          onModalAction={() => console.log("Hello")}
        />
      )}
    </Section>
  );
};

export default DeleteUser;
