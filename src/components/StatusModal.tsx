import {
  faClockRotateLeft,
  faClose,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type CreateStatusModalProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const CreateStatusModal: React.FC<CreateStatusModalProps> = ({
  setOpen,
}) => {
  return (
    <div className="fixed inset-0  flex items-center justify-center z-10 p-4">
      <div className="lg:p-10 uk-modal uk-open bg-secondary p-7 shadow-xl rounded-lg md:w-[520px] w-full dark:bg-dark2">
        <div className="text-center py-3 border-b -m-7 mb-0 dark:border-slate-700">
          <h2 className="text-sm font-medium text-white">Create Status</h2>
          <button
            type="button"
            className="button__ico absolute top-0 right-0 m-2.5 uk-modal-close"
          >
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon={faClose}
              color="white"
              size="2xl"
            />
          </button>
        </div>
        <div className="space-y-5 mt-7">
          <div>
            <label htmlFor="" className="text-base text-white">
              What do you have in mind?
            </label>
            <input
              type="text"
              className="focus:ring-1  w-full rounded-md mt-4 bg-slate-600 py-2 px-2 text-white"
            />
          </div>
          <div>
            <div className="border border-slate-700 w-full h-72 relative border1 rounded-lg overflow-hidden bg-[url('../images/ad_pattern.png')] bg-repeat">
              <label
                htmlFor="createStatusUrl"
                className="flex flex-col justify-center items-center absolute -translate-x-1/2 left-1/2 bottom-0 z-10 w-full pb-6 pt-10 cursor-pointer bg-gradient-to-t from-gray-700/60"
              >
                <input id="createStatusUrl" type="file" className="hidden" />
                <FontAwesomeIcon icon={faUpload} color="white" size="xl" />
                <span className="text-white mt-2">Browse to Upload image </span>
              </label>
              <img
                id="createStatusImage"
                src="#"
                alt="Uploaded Image"
                style={{ display: "none" }}
                className="w-full h-full absolute object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 ">
              <FontAwesomeIcon
                icon={faClockRotateLeft}
                color="white"
                size="lg"
              />
              <p className="text-sm text-gray-500 font-medium">
                Your Status will be available <br />
                for <span className="text-gray-800">24 Hours</span>
              </p>
            </div>
            <button
              type="button"
              className="button bg-blue-500 text-white px-8 py-2 rounded-xl"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
