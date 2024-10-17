import AdminNav from "@/components/dashboard/admin/AdminNav";
import React from "react";
import Header from "@/components/dashboard/common/header/Header";
import Container from "@/components/common/ui/Container";
interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[230px_1fr] lg:grid-cols-[270px_1fr] overflow-clip h-screen">
      <AdminNav className="hidden md:block" />
      <div className="overflow-x-auto overflow-y-clip hideScrollbar">
        <Header isAdmin />
        <div className="showScrollbar overflow-auto h-[calc(100vh_-_72px)]">
          <Container className="py-8">{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
