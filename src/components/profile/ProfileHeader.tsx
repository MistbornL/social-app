import {
  faCamera,
  faClockRotateLeft,
  faEllipsisH,
  faFlag,
  faHandshakeSlash,
  faShare,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProfileHeader = () => {
  return (
    <div className="py-6 px-4 relative ">
      <div className="flex md:gap-16 gap-4 max-md:flex-col mt-10">
        <div className="relative md:p-1 rounded-full h-full max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 shadow-md hover:scale-110 duration-500 uk-animation-scale-up">
          <div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] border-gray-100 shrink-0 dark:border-slate-900">
            <img
              src="assets/images/avatars/avatar-6.jpg"
              alt=""
              className="w-full h-full absolute object-cover"
            />
          </div>
          <button
            type="button"
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-white shadow p-1.5 rounded-full sm:flex hidden"
          >
            <FontAwesomeIcon
              icon={faCamera}
              className="text-2xl md hydrated"
              role="img"
              aria-label="camera"
            />
          </button>
        </div>
        <div className="max-w-2x flex-1 ">
          <h3 className="md:text-xl text-base font-semibold text-black dark:text-white">
            Monroe Parker
          </h3>

          <p className="sm:text-sm text-blue-600 mt-1 font-normal text-xs">
            @Monroepak
          </p>

          <p className="text-white text-md mt-2 md:font-normal font-light max-w-3xl md:w-[730px]">
            I love beauty and emotion. 🥰 I’m passionate about photography and
            learning. 📚 I explore genres and styles. 🌈 I think photography is
            storytelling. 📖 I hope you like and feel my photos. 😊
          </p>

          <p className="mt-2 space-x-2 text-gray-500 text-sm hidden">
            <a href="#" className="inline-block">
              Travel
            </a>{" "}
            .{" "}
            <a href="#" className="inline-block">
              Business
            </a>{" "}
            .{" "}
            <a href="#" className="inline-block">
              Technology
            </a>{" "}
          </p>

          <div className="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
            <div className="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-20 max-sm:left-36 ">
              <div>
                <p className="text-sm font-bold text-white">Posts</p>
                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                  162
                </h3>
              </div>
              <div>
                <p className="text-sm font-bold text-white">Following</p>
                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                  14,260
                </h3>
              </div>
              <div>
                <p className="textsm font-bold text-white">Followers</p>
                <h3 className="sm:text-xl sm:font-bold mt-1 text-black dark:text-white text-base font-normal">
                  8,542
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-3 text-sm ">
              <button
                type="submit"
                className="rounded-md px-4 py-2 button bg-pink-100 text-pink-600 border border-pink-200"
              >
                Unfollow
              </button>
              <button
                type="button"
                className="rounded-md px-4 py-2 button bg-pink-600 text-white"
              >
                Message
              </button>
              <div>
                <button
                  type="submit"
                  className="rounded-lg bg-slate-800 flex px-2 py-2 dark:bg-dark2"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon
                    icon={faEllipsisH}
                    color="white"
                    className="text-xl md hydrated"
                    name="ellipsis-horizontal"
                    role="img"
                    aria-label="ellipsis horizontal"
                  />
                </button>
                <div
                  className="uk-dropdown"
                  uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click;offset:10"
                >
                  {/* <nav>
                    <a href="#">
                      <FontAwesomeIcon icon={faTag} color="white" />
                      Unfollow
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faClockRotateLeft} color="white" />
                      Mute story
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faFlag} color="white" />
                      Report
                    </a>
                    <a href="#">
                      <FontAwesomeIcon icon={faShare} color="white" />
                      Share profile
                    </a>
                    <hr />
                    <a
                      href="#"
                      className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
                    >
                      <FontAwesomeIcon icon={faHandshakeSlash} color="red" />
                      Block
                    </a>
                  </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
