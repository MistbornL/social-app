import {
  faArrowRight,
  faArrowRightArrowLeft,
  faBookBookmark,
  faCommentDots,
  faEllipsisH,
  faHeart,
  faHeartCircleBolt,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

export const TaggedTab = () => {
  const imiges = [
    "https://demo.foxthemes.net/instello/assets/images/post/post-1.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-5.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-3.jpg",
    "https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-2.jpg",
  ];
  return (
    <div>
      {/* header */}
      <div className="flex justify-between">
        <h2 className="text-lg text-white  font-bold">Posts</h2>

        <div className="flex gap-3">
          <h2 className="text-lg text-white  font-bold ">Show acheived</h2>
          <FontAwesomeIcon icon={faArrowRight} color="white" />
        </div>
      </div>
      {/* posts */}
      <div
        className="max-w-5xl grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 mt-6"
        uk-scrollspy="target: > div; cls: uk-animation-scale-up; delay: 100"
      >
        {imiges.map((url, index) => {
          return <Taged imageSrc={url} />;
        })}

        {/* Placeholder posts */}
        {/* <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div>
        <div className="w-full lg:h-60 h-full aspect-[3/3] bg-slate-200/60 rounded-lg dark:bg-dark2 animate-pulse uk-scrollspy-inview"></div> */}
      </div>
    </div>
  );
};

const Taged = ({ imageSrc }) => {
  return (
    <div className=" bg-secondary relative lg:rounded-xl rounded-md overflow-hidden shadow  dark:bg-dark2 uk-scrollspy-inview">
      {/* heading */}
      <div className="flex items-center gap-3 sm:px-4 py-3 p-2 text-sm font-normal">
        <a href="profile.html" className="max-md:hidden">
          <img
            src="assets/images/avatars/avatar-5.jpg"
            alt=""
            className="w-6 h-6 rounded-full"
          />
        </a>
        <div className="flex-1">
          <a href="profile.html">
            <h4 className="text-black dark:text-white">Monroe Parker</h4>
          </a>
        </div>

        {/* dropdown options */}
        <div className="absolute top-0.5 right-0 md:m-2.5 m-1">
          <button
            type="button"
            className="button__ico w-8 h-8"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faEllipsisH} color="white" />{" "}
          </button>
          <div
            className="w-[232px] uk-dropdown uk-transform-origin-top-right"
            uk-dropdown="pos: bottom-right; animation: uk-animation-scale-up uk-transform-origin-top-right; animate-out: true; mode: click"
            style={{ maxWidth: "288px", top: "32px", left: "-200px" }}
          >
            {/* <nav>
              <a href="#">
              <FontAwesomeIcon icon={fa} color="white" />{" "}

                Add favorites
              </a>
              <a href="#">
                <ion-icon
                  className="text-xl shrink-0 md hydrated"
                  name="flag-outline"
                  role="img"
                  aria-label="flag outline"
                ></ion-icon>{" "}
                Report
              </a>
              <a href="#">
                <ion-icon
                  className="text-xl shrink-0 md hydrated"
                  name="share-outline"
                  role="img"
                  aria-label="share outline"
                ></ion-icon>{" "}
                Share
              </a>
              <hr />
              <a
                href="#"
                className="text-red-400 hover:!bg-red-50 dark:hover:!bg-red-500/50"
              >
                <ion-icon
                  className="text-xl shrink-0 md hydrated"
                  name="stop-circle-outline"
                  role="img"
                  aria-label="stop circle outline"
                ></ion-icon>{" "}
                Remove
              </a>
            </nav> */}
          </div>
        </div>
      </div>

      {/* post image */}
      <a href="#preview_modal" uk-toggle="" aria-expanded="false">
        <div className="relative w-full h-48">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover inset-0"
          />
        </div>
      </a>

      {/* post icons */}
      <div className="flex items-center md:gap-3 gap-1 md:py-2.5 md:px-3 p-1.5">
        <button type="button" className="button__ico">
          <FontAwesomeIcon icon={faHeart} color="white" />{" "}
        </button>
        <button type="button" className="button__ico">
          <FontAwesomeIcon icon={faCommentDots} color="white" />{" "}
        </button>
        <button type="button" className="button__ico ml-auto">
          <FontAwesomeIcon icon={faBookBookmark} color="white" />{" "}
        </button>
      </div>
    </div>
  );
};
