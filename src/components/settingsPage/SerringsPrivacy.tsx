import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { generalSchema } from "../../schema/generalSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialSchema } from "../../schema/socialSchema";

export const SettingsPrivacy = () => {
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <form
        encType="multipart/form-data"
        className="mt-6 space-y-4 md:space-y-6"
      >
        <div className="flex gap-10 justify-between items-center">
          <h4 className="text-white">Who can follow me?</h4>
          <select
            // {...register("social1")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="everyone">Everyone</option>
            <option value="peopleIFollow">The People I Follow</option>
            <option value="nobody">Nobody</option>
          </select>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <h4 className="text-white">Who can message me?</h4>
          <select
            // {...register("social2")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="everyone">Everyone</option>
            <option value="peopleIKnow">The People I Know</option>
            <option value="nobody">Nobody</option>
          </select>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <h4 className="text-white">Show my activities?</h4>
          <select
            // {...register("social3")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="public">Public</option>
            <option value="hide">Hide</option>
          </select>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <h4 className="text-white">Status</h4>
          <select
            // {...register("social4")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <h4 className="text-white">Who can see my tags?</h4>
          <select
            // {...register("social5")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="allow">Allow</option>
            <option value="deny">Deny</option>
          </select>
        </div>
        <div className="flex gap-10 items-center justify-between">
          <h4 className="text-white">Allow search engines</h4>
          <select
            // {...register("social6")}
            className={`w-80 bg-gray-50 border text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>

      <div className="justify-center flex gap-4 mt-14">
        <button className="px-10 py-2 bg-slate-600 rounded-lg">cancel</button>
        <button className="px-10 py-2 bg-pink-600  text-white rounded-lg">
          Save
        </button>
      </div>
    </div>
  );
};
