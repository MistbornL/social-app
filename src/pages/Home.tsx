import React from "react";
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
        <div className=" my-10 mx-auto max-w-lg  flex-col items-center">
          {/* stories */}
          <div className="mb-32">
            <h1 className="text-3xl font-bold text-white mb-5">Stories</h1>
            <SimpleSlider />
          </div>
          {/* users option to post */}
          <div></div>
          {/* all posts */}
          <div className="mt-14 ">
            <StatusInput />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};
