"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { createPortal } from "react-dom";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  width?: string;
  onModalClose: (val: boolean) => void;
}

const Modal: React.FC<Props> = ({
  className,
  children,
  width="450px",
  onModalClose,
}) => {
  const modal = (
    <div className="fixed inset-0 flex items-center justify-center z-[99999]">
      <div
        className="inset-0 bg-black/[0.2] backdrop-blur-[10px] absolute z-[-1]"
        onClick={onModalClose.bind(null, false)}
      />
      <div
        className={`w-full p-6 bg-white rounded-md border border-solid border-border ${className}`}
        style={{ maxWidth: width }}
      >
        {children}
      </div>
    </div>
  );

  return createPortal(modal, document?.body);
};

export default Modal;
