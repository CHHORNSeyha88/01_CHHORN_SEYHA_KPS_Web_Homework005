import React from "react";

import MainLayout from "../components/MainLayout";
import SearchBar from "../components/SeachBar";
import HeaderInsideContent from "../components/HeaderInside";

const Layout = ({ children }) => {
  return (
    <>
      <MainLayout>
        <HeaderInsideContent children={children}/>
      </MainLayout>
    </>
  );
};

export default Layout;
