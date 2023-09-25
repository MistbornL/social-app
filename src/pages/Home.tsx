import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSignIn } from "react-auth-kit";
import SimpleSlider from "../components/Carousel";
import { Post } from "../components/Post";
import { StatusInput } from "../components/StatusInput";
import { SuggestedPeople, UserData } from "../components/SuggestedPeople";
import { Premium } from "../components/Premium";

export const Home = () => {
  const suggestedUsers: UserData[] = [
    {
      name: "Johnson Smith",
      profileUrl: "profile.html",
      avatarUrl: "assets/images/avatars/avatar-7.jpg",
      description: "Suggested For You",
    },

    {
      name: "Johnson Smith",
      profileUrl: "profile.html",
      avatarUrl: "assets/images/avatars/avatar-7.jpg",
      description: "Suggested For You",
    },
    {
      name: "Johnson Smith",
      profileUrl: "profile.html",
      avatarUrl: "assets/images/avatars/avatar-7.jpg",
      description: "Suggested For You",
    },
    // Add more user data objects here
  ];
  return (
    <div>
      <div className="flex">
        <Sidebar />
        <div className="mt-10 mx-auto  my-auto max-w-[935px]  flex-col items-center">
          {/* stories */}
          <div className="mb-14">
            <h1 className="text-3xl font-bold text-white mb-5">Stories</h1>
            <SimpleSlider />
          </div>
          {/* users option to post */}
          <div></div>
          {/* all posts */}
          <div className="mt-14 flex justify-between">
            <div className="flex flex-col w-[460px]">
              <StatusInput />
              <div className="flex gap-6 flex-col">
                <Post />
                <Post />
              </div>
            </div>
            <div>
              <SuggestedPeople people={suggestedUsers} />
              <Premium />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
