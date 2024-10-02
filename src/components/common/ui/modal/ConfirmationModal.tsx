import React from "react";
import { Button } from "@/components/ui/button";
import Modal from "@/components/common/ui/modal/Modal";

interface Props {
  title: string;
  description?: string;
  onModalClose: (val: boolean) => void;
  onModalAction: () => void;
}

const ConfirmationModal: React.FC<Props> = ({
  title,
  description,
  onModalClose,
  onModalAction,
}) => {
  return (
    <Modal width="450px" onModalClose={onModalClose}>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg text-dark-3 font-semibold">{title}</h3>
        {description && <p className="text-sm text-dark-0">{description}</p>}
        <div className="flex items-center gap-2 justify-end mt-4">
          <Button
            variant={"outline"}
            className="hover:bg-transparent bg-transparent"
            onClick={onModalClose.bind(null, false)}
          >
            Cancel
          </Button>
          <Button onClick={onModalAction} >Continue</Button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
