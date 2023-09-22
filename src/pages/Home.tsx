import React from "react";
import Sidebar from "../components/Sidebar";
import { useSignIn } from "react-auth-kit";
import SimpleSlider from "../components/Carousel";

export const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="flex my-10 mx-auto max-w-6xl  flex-col">
          <h1 className="text-3xl font-bold text-white mb-5">Stories</h1>
          <SimpleSlider />
        </div>
      </div>
    </div>
  );
};
