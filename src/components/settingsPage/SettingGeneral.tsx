import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { generalSchema } from "../../schema/generalSchema";

interface FormData {
  username: string;
  email: string;
  password: string;
  bio: string;
  gender: "male" | "female" | "other";
  relationship: "single" | "married" | "complicated" | "other";
}

export const SettingGeneral = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(generalSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form
      encType="multipart/form-data"
      className=" flex-col items-center space-y-4 md:space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          {...register("username")}
          className={`bg-gray-50 border ${
            errors.username
              ? "border-red-500 ring-red-300"
              : "border-gray-300 ring-gray-300"
          } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="https://social.com/user"
          required
        />
        {errors.username && (
          <p className="mt-1 text-red-500 text-sm">{errors.username.message}</p>
        )}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className={`bg-gray-50 border ${
            errors.email
              ? "border-red-500 ring-red-300"
              : "border-gray-300 ring-gray-300"
          } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="https://social.com/user"
          required
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
        <label
          htmlFor="bio"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Bio
        </label>
        <textarea
          id="bio"
          {...register("bio")}
          className={`bg-gray-50 border ${
            errors.bio
              ? "border-red-500 ring-red-300"
              : "border-gray-300 ring-gray-300"
          } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder="Enter Your Bio"
          required
        />
        {errors.bio && (
          <p className="mt-1 text-red-500 text-sm">{errors.bio.message}</p>
        )}
      </div>
      {/* Gender Select */}
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center ">
        <label
          htmlFor="gender"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Gender
        </label>
        <select
          id="gender"
          {...register("gender")}
          className={`bg-gray-50 border ${
            errors.gender
              ? "border-red-500 ring-red-300"
              : "border-gray-300 ring-gray-300"
          } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && (
          <p className="mt-1 text-red-500 text-sm">{errors.gender.message}</p>
        )}
      </div>

      {/* Relationship Status Select */}
      <div className="grid grid-cols-2 items-center  ">
        <label
          htmlFor="relationship"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Relationship Status
        </label>
        <select
          id="relationship"
          {...register("relationship")}
          className={`bg-gray-50 border ${
            errors.relationship
              ? "border-red-500 ring-red-300"
              : "border-gray-300 ring-gray-300"
          } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          required
        >
          <option value="">Select Relationship Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="complicated">Complicated</option>
          <option value="other">Other</option>
        </select>
        {errors.relationship && (
          <p className="mt-1 text-red-500 text-sm">
            {errors.relationship.message}
          </p>
        )}
      </div>
      <div className="justify-center flex gap-4 mt-10">
        <button className="px-10 py-2 bg-slate-600 rounded-lg">cancel</button>
        <button className="px-10 py-2 bg-pink-600  text-white rounded-lg">
          Save
        </button>
      </div>
    </form>
  );
};
