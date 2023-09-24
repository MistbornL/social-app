import React from "react";

export const StatusInput = () => {
  return (
    <div className="bg-secondary rounded-xl shadow-sm p-4 space-y-4 text-sm font-medium border1 dark:bg-dark2 mb-5">
      <div className="flex items-center gap-3">
        <div
          className="flex-1 bg-[#334155] hover:bg-opacity-80 transition-all rounded-lg cursor-pointer dark:bg-dark3"
          uk-toggle="target: #create-status"
          tabIndex={0}
          aria-expanded="false"
        >
          <div className="py-2.5 text-center dark:text-white">
            What do you have in mind?
          </div>
        </div>
        <div
          className="p-2 bg-sky-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer"
          uk-toggle="target: #create-status"
          tabIndex={0}
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 fill-sky-600"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div
          className="p-2 bg-pink-100 hover:bg-opacity-80 transition-all rounded-lg cursor-pointer"
          uk-toggle="target: #create-status"
          tabIndex={0}
          aria-expanded="false"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5 fill-pink-600"
          >
            <path d="M3.25 4A2.25 2.25 0 001 6.25v7.5A2.25 2.25 0 003.25 16h7.5A2.25 2.25 0 0013 13.75v-7.5A2.25 2.25 0 0010.75 4h-7.5zM19 4.75a.75.75 0 00-1.28-.53l-3 3a.75.75 0 00-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 001.28-.53V4.75z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
