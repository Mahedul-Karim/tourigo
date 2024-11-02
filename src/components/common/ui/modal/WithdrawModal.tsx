import React from "react";
import Modal from './Modal'
import { Button } from "@/components/ui/button";
import { RxCross1 } from "react-icons/rx";
import { FiTrash } from "react-icons/fi";

interface Props {
  onModalClose: (val: boolean) => void;
  onModalAction: () => void;
}

const WithdrawModal: React.FC<Props> = ({ onModalClose, onModalAction }) => {
  return (
    <Modal className="min-h-[45vh]" onModalClose={onModalClose}>
      <div className="flex items-center justify-end">
        <button onClick={onModalClose.bind(null, false)}>
          <RxCross1 className="text-lg" />
        </button>
      </div>
      <div className="flex flex-col gap-2 mt-2">
        <h3 className="text-xl sm:text-2xl font-medium text-dark-1">
          Available Withdraw Method
        </h3>
        {/* <p>No withdraw method is available</p> */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1 text-sm text-dark-1 sm:text-base">
            <p>
              Account Number: <span>1234566789</span>
            </p>
            <p>
              Bank Name: <span>dsfgsfdsd</span>
            </p>
          </div>
          <button>
            <FiTrash className="text-lg" />
          </button>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <input
            type="number"
            className="border border-solid border-border rounded-md focus:outline-none px-2 py-1 w-[100px]"
          />
          <Button className="bg-primary hover:bg-primary">Withdraw</Button>
        </div>
      </div>
    </Modal>
  );
};

export default WithdrawModal;
