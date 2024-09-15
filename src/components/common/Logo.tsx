import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center">
    <Image
      src="/assets/logo_white.svg"
      alt="logo"
      width={44}
      height={42}
      priority
    />
    <p className="text-base text-primary font-semibold font-playwrite">Tourigo</p>
    </Link>
  );
};

export default Logo;
