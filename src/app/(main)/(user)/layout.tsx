import Sidebar from "@/components/dashboard/user/Sidebar";
import React from "react";
import Container from "@/components/common/ui/Container";
import ProtectedRoutes from "@/lib/util/ProtectedRoutes";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    // <ProtectedRoutes>
      <div>
        <div className="py-[70px] bg-dark-1"></div>
        <div className="relative z-[1]">
          <div className="absolute h-[130px] w-full bg-dark-1 top-0 end-0 start-0 -z-[1]" />
          <Container className="grid grid-cols-1 pb-32 xs:pb-40 md:grid-cols-[0.4fr_1fr] gap-4">
            <Sidebar />
            <div>{children}</div>
          </Container>
        </div>
      </div>
    // </ProtectedRoutes>
  );
};

export default Layout;
