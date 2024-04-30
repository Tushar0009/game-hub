import React, { Fragment } from "react";
import NavBar from "../components/nav_bar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <NavBar />
      <Outlet />
    </Fragment>
  );
};

export default Layout;
