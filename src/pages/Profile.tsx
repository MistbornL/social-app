import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faClockRotateLeft,
  faEllipsisH,
  faFlag,
  faHandshakeSlash,
  faPlay,
  faShare,
  faTag,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { ProfileHeader } from "../components/profile/ProfileHeader";

export const Profile = () => {
  return (
    <div className="">
      <ProfileHeader />

      <ul className="mt-10 w-full flex gap-2 justify-center border-t dark:border-slate-700">
        <li className="uk-active">
          <a
            href="#"
            className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
            aria-expanded="true"
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
        <li className="">
          <a
            href="#"
            className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              icon={faPlay}
              color="white"
              className="mr-2 text-2xl md:text-xl md hydrated"
              name="play-outline"
              role="img"
              aria-label="play outline"
            />
            <span className="text-white">Reels</span>
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="flex items-center p-4 py-2.5 -mb-px border-t-2 border-transparent aria-expanded:text-black aria-expanded:border-black aria-expanded:dark:text-white aria-expanded:dark:border-white"
            aria-expanded="false"
          >
            <FontAwesomeIcon
              color="white"
              icon={faTags}
              className="mr-2 text-2xl md:text-xl md hydrated"
              name="pricetags-outline"
              role="img"
              aria-label="pricetags outline"
            />
            <span className="text-white">Tagged</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
