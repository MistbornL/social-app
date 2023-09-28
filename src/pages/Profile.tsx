import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlay, faTags } from "@fortawesome/free-solid-svg-icons";
import { ProfileHeader } from "../components/userProfile/ProfileHeader";
import { PostsTab } from "../components/userProfile/PostsTab";
import { ReelsTab } from "../components/userProfile/ReelsTab";
import { TaggedTab } from "../components/userProfile/TaggedTab";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState("Posts");

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className="">
      <ProfileHeader />

      <ul className="mt-10 w-full flex gap-2 justify-center border-t dark:border-slate-700">
        <li className={activeTab === "Posts" ? "uk-active" : ""}>
          <a
            href="#"
            className={`text-white flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white ${
              activeTab === "Posts" ? "text-black dark:text-white" : ""
            }`}
            aria-expanded={activeTab === "Posts" ? "true" : "false"}
            onClick={() => handleTabClick("Posts")}
          >
            <FontAwesomeIcon
              icon={faCamera}
              className="mr-2 text-2xl md:text-xl md hydrated"
              name="camera-outline"
              role="img"
              aria-label="camera outline"
            />
            Posts
          </a>
        </li>
        <li className={activeTab === "Reels" ? "uk-active" : ""}>
          <a
            href="#"
            className={`text-white flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white ${
              activeTab === "Reels" ? "text-black dark:text-white" : ""
            }`}
            aria-expanded={activeTab === "Reels" ? "true" : "false"}
            onClick={() => handleTabClick("Reels")}
          >
            <FontAwesomeIcon
              icon={faPlay}
              color="white"
              className="mr-2 text-2xl md:text-xl md hydrated"
              name="play-outline"
              role="img"
              aria-label="play outline"
            />
            <span className={activeTab === "Reels" ? "text-white" : ""}>
              Reels
            </span>
          </a>
        </li>
        <li className={activeTab === "Tagged" ? "uk-active" : ""}>
          <a
            href="#"
            className={`text-white flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white ${
              activeTab === "Tagged" ? "text-black dark:text-white" : ""
            }`}
            aria-expanded={activeTab === "Tagged" ? "true" : "false"}
            onClick={() => handleTabClick("Tagged")}
          >
            <FontAwesomeIcon
              color="white"
              icon={faTags}
              className="mr-2 text-2xl md:text-xl md hydrated"
              name="pricetags-outline"
              role="img"
              aria-label="pricetags outline"
            />
            <span className={activeTab === "Tagged" ? "text-white" : ""}>
              Tagged
            </span>
          </a>
        </li>
      </ul>

      {/* Render tab content based on activeTab */}
      {activeTab === "Posts" && <PostsTab />}
      {activeTab === "Reels" && <ReelsTab />}
      {activeTab === "Tagged" && <TaggedTab />}
    </div>
  );
};
