import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSignIn } from "react-auth-kit";
import SimpleSlider from "../components/Carousel";
import { Post } from "../components/Post";
import { StatusInput } from "../components/StatusInput";

export const Home = () => {
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className=" mx-auto mr-72 my-auto max-w-[935px]  flex-col items-center">
          {/* stories */}
          <div className="mb-14">
            <h1 className="text-3xl font-bold text-white mb-5">Stories</h1>
            <SimpleSlider />
          </div>
          {/* users option to post */}
          <div></div>
          {/* all posts */}
          <div className="mt-14 flex flex-col justify-between">
            <div className="flex flex-col ">
              <StatusInput />
              <Post />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
