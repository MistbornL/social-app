import {
  faArrowRight,
  faArrowRightArrowLeft,
  faCommentDots,
  faHeartCircleBolt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { PostPreview } from "./ViewPostModal";

export const PostsTab = () => {
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
          return <Post key={index} imageSrc={url} />;
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

const Post = ({ imageSrc }) => {
  const [hover, setHover] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(hover);
  return (
    <a href="#preview_modal" uk-toggle="" aria-expanded="false">
      {isOpen && (
        <>
          <div
            className="fixed inset-0 backdrop-blur-md z-10 "
            // Close the modal when clicking the backdrop
          />
          <PostPreview setOpen={setIsOpen} />
        </>
      )}
      <div
        onClick={() => setIsOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="lg:hover:scale-105 hover:shadow-lg hover:z-10 duration-500 delay-100"
      >
        <div className="relative overflow-hidden rounded-lg uk-transition-toggle">
          <div className="relative w-full lg:h-60 h-full aspect-[3/3]">
            <img src={imageSrc} alt="" className="object-cover w-full h-full" />
          </div>
          {hover && (
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm uk-transition-fade">
              <div className="flex items-center justify-center gap-4 text-white w-full h-full">
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faHeartCircleBolt}
                    className="text-2xl md hydrated"
                    name="heart-circle"
                    role="img"
                    aria-label="heart circle"
                  />{" "}
                  152
                </div>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="text-2xl md hydrated"
                    name="chatbubble-ellipses"
                    role="img"
                    aria-label="chatbubble ellipses"
                  />{" "}
                  290
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
