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

      <div className="mt-6">
        <img
          className="rounded-lg"
          src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-lg-4.jpg"
          alt="ho yeah"
        />
      </div>
    </div>
  );
};
