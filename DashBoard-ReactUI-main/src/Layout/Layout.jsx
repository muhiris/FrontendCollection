import React from "react";
import SideBar from "./SideBar";
import "./layout.css";
function Layout({ children }) {
  return (
    <>
      <SideBar />
      <main>{children}</main>
    </>
  );
}

export default Layout;
