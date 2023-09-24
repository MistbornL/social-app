import {
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Post = () => {
  return (
    <div className="p-4 bg-secondary max-w-xl rounded-lg ">
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">
            <img
              className="object-cover w-10 h-10 rounded-full"
              src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-3.jpg"
              alt="avatar"
            />
          </div>
          <div className="flex flex-col ">
            <h3 className="text-white font-bold">Monroe Parker</h3>
            <span className="text-gray-400 text-sm ">2 Hours Ago</span>
          </div>
        </div>
        <button>
          <div className="flex gap-2">
            <div className="rounded-full bg-white w-2 h-2"></div>
            <div className="rounded-full bg-white w-2 h-2"></div>
            <div className="rounded-full bg-white w-2 h-2"></div>
          </div>
        </button>
      </div>

      {/* post img */}
      <div className="mt-6 relative w-full lg:h-72 h-full sm:px-4">
        <img
          className="rounded-lg sm:rounded-lg w-full h-full  object-cover  "
          src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-4.jpg"
          alt="ho yeah"
        />
      </div>

      {/* post icons */}
      <div className="sm:p-4 p-2.5 flex items-center gap-4 text-xs font-semibold mt-2 ">
        <div className="flex items-center gap-2.5">
          <button type="button" className="button__ico text-red-500 ">
            <FontAwesomeIcon icon={faHeart} size="xl" />
          </button>
          <span className="text-white">1380</span>
        </div>
        <div className="flex items-center gap-3">
          <button type="button" className="button__ico ">
            <FontAwesomeIcon icon={faComment} color="white" size="xl" />
          </button>
          <span className="text-white">260</span>
        </div>
        <button type="button" className="button__ico ml-auto">
          {" "}
          <FontAwesomeIcon icon={faPaperPlane} color={"white"} size="xl" />
        </button>
        <button type="button" className="button__ico">
          <FontAwesomeIcon icon={faBookmark} color={"white"} size="xl" />
        </button>
      </div>
    </div>
  );
};
