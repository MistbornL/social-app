import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useSignIn } from "react-auth-kit";
import SimpleSlider from "../components/Carousel";
import { Post } from "../components/home/Post";
import { StatusInput } from "../components/home/StatusInput";
import { SuggestedPeople, UserData } from "../components/home/SuggestedPeople";
import { Premium } from "../components/home/Premium";
import OnlineFriends from "../components/home/Online";
import Trends from "../components/home/Trends";

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

  const friendsList = [
    {
      id: 0,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
    {
      id: 1,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
    {
      id: 2,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
    {
      id: 3,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
    {
      id: 4,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
    {
      id: 5,
      imageUrl:
        "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-2.jpg",
    },
  ];

  const trendsData = [
    { title: "Artificial Intelligence", posts: "1,245,62 Post" },
    { title: "Artificial Intelligence", posts: "1,245,62 Post" },
    { title: "Artificial Intelligence", posts: "1,245,62 Post" },
    { title: "Artificial Intelligence", posts: "1,245,62 Post" },
    { title: "Artificial Intelligence", posts: "1,245,62 Post" },
  ];
  return (
    <div>
      <div className="flex">
        <div className="mt-10 flex-col items-center p-2">
          {/* stories */}
          <div className="mb-14">
            <h1 className="text-3xl font-bold text-white mb-5">Stories</h1>
            <SimpleSlider />
          </div>
          {/* users option to post */}
          <div></div>
          {/* all posts */}
          <div className="mt-14 flex md:flex-row flex-col justify-between">
            <div className="flex flex-col w-[360px]  md:w-[460px]">
              <StatusInput />
              <div className="flex gap-6 flex-col">
                <Post />
                <Post />
              </div>
            </div>
            <div className=" ">
              <SuggestedPeople people={suggestedUsers} />
              <Premium />
              <OnlineFriends friendData={friendsList} />
              <Trends trendsData={trendsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
