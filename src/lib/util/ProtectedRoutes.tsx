"use client";

import { useCtx } from "@/context/ContextProvider";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  onlyFor?: string[];
}

function ProtectedRoutes({
  children,
  onlyFor = ["admin", "vendor", "user","pending"],
}: Props) {
  const { isLoggedIn, user } = useCtx();

  if (!isLoggedIn || !onlyFor.includes(user?.role as string)) {
    redirect("/login");
  }

  return children;
}

export default ProtectedRoutes;
