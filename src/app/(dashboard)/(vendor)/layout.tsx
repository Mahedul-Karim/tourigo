import React from "react";

import Header from "@/components/dashboard/common/header/Header";
import VendorNav from "@/components/dashboard/vendor/VendorNav";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] overflow-clip h-screen">
      <VendorNav className="hidden md:block" />
      <div className="overflow-x-auto overflow-y-clip hideScrollbar">
        <Header />
        <div className="showScrollbar overflow-auto h-[calc(100vh_-_72px)]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
