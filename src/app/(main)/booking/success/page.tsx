"use client";

import React, { useEffect, useRef } from "react";
import Container from "@/components/common/ui/Container";
import lottie from "lottie-web";
import { toast } from "sonner";

const Page = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    toast.success("Success!", {
      description: "Tour booked successfully!",
    });

    const animation = lottie.loadAnimation({
      container: containerRef.current as any,
      renderer: "svg",
    //   loop: true,
      autoplay: true,
      path: "/success.json",
    });

    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <Container className="py-32 flex items-center justify-center">
      <div ref={containerRef} className="size-[300px]"></div>
    </Container>
  );
};

export default Page;
