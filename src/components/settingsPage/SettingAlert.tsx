import { faMailBulk, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { alertItems } from "../../const";

export const SettingAlert = () => {
  return (
    <div className="flex px-10  py-4 flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-xl">Alerts preferences</h1>
        <p className="text-gray-400 max-w-lg">
          We may still send you important notifications about your account and
          content outside of you preferred notivications settings
        </p>
      </div>
      {alertItems.map((item, index) => {
        return (
          <div className="flex gap-4 items-center mt-10  justify-between ">
            <div className="flex gap-5 items-center">
              <div
                className={`rounded-full px-3 py-2 bg-${item.color}-200 bg-emerald-100`}
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  color={item.color}
                  className={`rotate-${item.rotate}`}
                />
              </div>
              <div className="flex  flex-col gap-1 justify-between">
                <h2 className="text-white text-md font-bold">{item.header}</h2>
                <p className="max-w-lg text-gray-400">{item.paragraph}</p>
              </div>
            </div>
            <div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        );
      })}
      <div className="justify-center flex gap-4 mt-10">
        <button className="px-10 py-2 bg-slate-600 rounded-lg">cancel</button>
        <button className="px-10 py-2 bg-pink-600  text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};
