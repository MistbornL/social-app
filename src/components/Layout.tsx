import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex lg:space-x-96">
      <div className="lg:w-72 ">
        <Sidebar />
      </div>

      <Outlet></Outlet>
    </div>
  );
};
