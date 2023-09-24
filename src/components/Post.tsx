import {
  faArrowDown,
  faBookmark,
  faComment,
  faHeart,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Post = () => {
  return (
    <div className="p-4 bg-secondary w-[510px]  rounded-lg ">
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
          <div className="flex gap-1">
            <div className="rounded-full bg-white w-1 h-1"></div>
            <div className="rounded-full bg-white w-1 h-1"></div>
            <div className="rounded-full bg-white w-1 h-1"></div>
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

      {/* comment */}
      <div className="sm:p-4 p-2.5 border-t border-gray-100 font-normal space-y-3 relative dark:border-slate-700/40">
        <div className="flex items-start gap-3 relative">
          <a href="profile.html">
            <img
              src="assets/images/avatars/avatar-2.jpg"
              alt=""
              className="w-6 h-6 mt-1 rounded-full"
            />
          </a>
          <div className="flex-1">
            <a
              href="profile.html"
              className="text-black font-medium inline-block dark:text-white"
            >
              Steeve
            </a>
            <p className="mt-0.5">What a beautiful photo! I love it. 😍</p>
          </div>
        </div>
        <div className="flex items-start gap-3 relative">
          <a href="profile.html">
            <img
              src="assets/images/avatars/avatar-3.jpg"
              alt=""
              className="w-6 h-6 mt-1 rounded-full"
            />
          </a>
          <div className="flex-1">
            <a
              href="profile.html"
              className="text-black font-medium inline-block dark:text-white"
            >
              Monroe
            </a>
            <p className="mt-0.5">You captured the moment. 😎</p>
          </div>
        </div>

        <button
          type="button"
          className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 mt-2"
        >
          <FontAwesomeIcon icon={faArrowDown} />
          More Comment
        </button>
      </div>

      {/* write comment */}
      <div className="sm:px-4 sm:py-3 p-2.5 border-t border-gray-100 flex items-center gap-1 dark:border-slate-700/40">
        <img
          src="assets/images/avatars/avatar-7.jpg"
          alt=""
          className="w-6 h-6 rounded-full"
        />
        <div className="flex-1 relative overflow-hidden h-10">
          <textarea
            placeholder="Add Comment...."
            rows="1"
            className=" w-full resize-none !bg-transparent px-4 py-2 focus:!border-transparent focus:!ring-transparent"
            aria-haspopup="true"
            aria-expanded="false"
          ></textarea>

          <div
            className="!top-2 pr-2 uk-drop"
            uk-drop="pos: bottom-right; mode: click"
            style={{ maxWidth: "346px", top: "38px", left: "285px" }}
          >
            <div
              className="flex items-center gap-2"
              uk-scrollspy="target: > svg; cls: uk-animation-slide-right-small; delay: 100 ;repeat: true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 fill-sky-600 "
                style={{ opacity: 0 }}
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 fill-pink-600"
                style={{ opacity: 0 }}
              >
                <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
              </svg>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="text-sm rounded-full py-1.5 px-3.5 bg-gray-700 text-white "
        >
          Replay
        </button>
      </div>
    </div>
  );
};
