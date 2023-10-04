import React, { useState } from "react";
import { notifications, settings } from "../const";
import { SettingGeneral } from "../components/settingsPage/SettingGeneral";
import { SettingSocial } from "../components/settingsPage/SettingsSocial";

export const Settings = () => {
  const [selected, setSelected] = useState("General");

  const handleTabClick = (tab: string) => {
    setSelected(tab);
  };

  const renderSelectedTab = () => {
    switch (selected) {
      case "General":
        return <SettingGeneral />;
      case "Social Links":
        return <SettingSocial />;
      case "Notifications":
        return (
          <div className="grid grid-cols-2">
            <div>
              <h1 className="text-md text-gray-300">Notify me when</h1>
            </div>

            <div>
              {notifications.map((item) => {
                return (
                  <div className=" flex items-center mb-4">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="mt-10 flex">
        <h1 className="text-white text-3xl font-bold">Settings</h1>
      </div>

      <div className="bg-secondary rounded-lg mt-6">
        <div className="flex gap-10 p-10 items-center">
          <img
            className="rounded-full w-20 h-20"
            src="https://demo.foxthemes.net/instello/assets/images/avatars/avatar-3.jpg"
            alt=""
          />

          <div className="flex flex-col gap-1">
            <h1 className="text-white">Monroe Parker</h1>
            <span className="text-sm text-blue-600">@Monroe</span>
          </div>
        </div>
        <div className="px-10 py-3 border-t flex gap-6 border-gray-600">
          {settings.map((item, index) => (
            <h3
              key={index}
              className={`text-white cursor-pointer ${
                selected === item ? "border-b" : ""
              }`}
              onClick={() => handleTabClick(item)}
            >
              {item}
            </h3>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10 mt-4 bg-secondary rounded-lg">
        {renderSelectedTab()}
      </div>
    </div>
  );
};
