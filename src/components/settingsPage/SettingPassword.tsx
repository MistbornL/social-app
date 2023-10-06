import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { passwordRecoverySchema } from "../../schema/passwordRecoverySchema";

interface FormData {
  currentPassword: string;
  newPassword: string;
  repeatPassword: string;
}

const SettingPasswordRecover = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordRecoverySchema),
  });

  const onSubmit = (data: FormData) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="space-y-10">
        <div className="grid lg:grid-cols-2 gird-cols-1 items-center">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Current Password
          </label>
          <input
            type="password"
            id="username"
            {...register("currentPassword")}
            className={`bg-gray-50 border  ${
              errors.currentPassword
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="*****"
            required
          />
          {errors.currentPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.currentPassword.message}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gird-cols-1 items-center">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            New Password
          </label>
          <input
            type="password"
            id="username"
            {...register("newPassword")}
            className={`bg-gray-50 border ${
              errors.newPassword
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="*****"
            required
          />
          {errors.newPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.newPassword.message}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gird-cols-1 items-center">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Repeat Password
          </label>
          <input
            type="password"
            id="username"
            {...register("repeatPassword")}
            className={`bg-gray-50 border ${
              errors.repeatPassword
                ? "border-red-500 ring-red-300"
                : "border-gray-300 ring-gray-300"
            } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            placeholder="*****"
            required
          />
          {errors.repeatPassword && (
            <p className="mt-1 text-red-500 text-sm">
              {errors.repeatPassword.message}
            </p>
          )}
        </div>
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

export default SettingPasswordRecover;
