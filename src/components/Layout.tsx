import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { Pricing } from "./Pricing";

export const Layout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {" "}
      {isOpen && (
        <div className="flex justify-center">
          <div
            className="fixed inset-0 w-screen  backdrop-blur-md z-10"
            // Close the modal when clicking the backdrop
          ></div>
          <Pricing setIsOpen={setIsOpen} />
        </div>
      )}{" "}
      <div className="flex lg:space-x-96">
        <div className="lg:w-72 ">
          <Sidebar setIsOpen={setIsOpen} />
        </div>

        <Outlet></Outlet>
      </div>
    </>
  );
};
