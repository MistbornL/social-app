import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { generalSchema } from "../../schema/generalSchema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialSchema } from "../../schema/socialSchema";

interface FormData {
  social1: string;
  social2: string;
  social3: string;
  social4: string;
}

export const SettingSocial = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(socialSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-col gap-4">
        {" "}
        <h1 className="text-white text-xl font-bold">Social Links</h1>
        <p className="text-white text-md max-w-lg">
          We may still send you important notifications about your account and
          content outside of you preferred notivications settings
        </p>
      </div>

      <form
        encType="multipart/form-data"
        className="mt-14 flex-col items-center space-y-4 md:space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex items-center gap-10">
          <img
            className="rounded-full w-10 h-10"
            src="https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg"
            alt=""
          />

          <input
            type="text"
            id="username"
            {...register("social1")}
            className={`bg-gray-50 border ${
              errors.social1
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="https://social.com/user"
            required
          />
          {errors.social1 && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.social1.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-10">
          <img
            className="rounded-full w-10 h-10"
            src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
            alt=""
          />

          <input
            type="text"
            {...register("social2")}
            className={`bg-gray-50 border ${
              errors.social2
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="https://social.com/user"
            required
          />
          {errors.social2 && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.social2.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-10">
          <img
            className="rounded-full w-10 h-10"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0U2DMVkMIXm0eXE9PbaYow-0leO7kyx91tkRoo7G9Dw&s"
            alt=""
          />

          <input
            type="text"
            id="username"
            {...register("social3")}
            className={`bg-gray-50 border ${
              errors.social3
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="https://social.com/user"
            required
          />
          {errors.social3 && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.social3.message}
            </p>
          )}
        </div>
        <div className="flex items-center gap-10">
          <img
            className="rounded-full w-10 h-10"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt=""
          />

          <input
            type="text"
            id="username"
            {...register("social4")}
            className={`bg-gray-50 border ${
              errors.social4
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="https://social.com/user"
            required
          />
          {errors.social4 && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.social4.message}
            </p>
          )}
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
