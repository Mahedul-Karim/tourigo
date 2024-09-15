import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default layout;
