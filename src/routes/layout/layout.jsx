import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/footer-comp";
import Navigation from "../../components/navigation/navigation-comp";

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
