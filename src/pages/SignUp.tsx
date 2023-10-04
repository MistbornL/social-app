import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { registerSchema } from "../schema/registerSchema";
import { createUser } from "../api/handleRegister";
import { useNavigate } from "react-router-dom";
import { handleSignIn } from "../api/handleLogin";
import { useSignIn } from "react-auth-kit";

interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  terms: boolean | undefined;
  profilePicture: FileList;
}

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const signIn = useSignIn();

  const navigate = useNavigate();
  const onSubmit = (data: FormData) => {
    setLoading(true);

    createUser(
      { ...data, profilePicture: data.profilePicture[0] },
      navigate,
      setLoading,
      signIn
    );
    console.log(complete);
  };

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
            <form
              encType="multipart/form-data"
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label
                  htmlFor="email"
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
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
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
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="••••••••"
                  className={`bg-gray-50 border ${
                    errors.password
                      ? "border-red-500 ring-red-300"
                      : "border-gray-300 ring-gray-300"
                  } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  required
                />
                {errors.password && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  {...register("confirmPassword")}
                  placeholder="••••••••"
                  className={`bg-gray-50 border ${
                    errors.confirmPassword
                      ? "border-red-500 ring-red-300"
                      : "border-gray-300 ring-gray-300"
                  } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  required
                />
                {errors.confirmPassword && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="profilePicture"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profile Picture
                </label>
                <input
                  type="file" // Use type "file" for file uploads
                  id="profilePicture"
                  {...register("profilePicture")}
                  className={`bg-gray-50 border ${
                    errors.profilePicture
                      ? "border-red-500 ring-red-300"
                      : "border-gray-300 ring-gray-300"
                  } text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                  accept="image/*" // Limit to image files
                  required
                />
                {errors.profilePicture && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.profilePicture.message}
                  </p>
                )}
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    {...register("terms")}
                    className={`w-4 h-4 border ${
                      errors.terms
                        ? "border-red-500 ring-red-300"
                        : "border-gray-300 ring-gray-300"
                    } rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800`}
                    required
                  />
                </div>

                <div className="ml-3 text-sm">
                  <label
                    htmlFor="terms"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Create an account
              </button>
              <p className="text-sm font-light text-white ">
                Already have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-blue-700 underline hover:underline "
                >
                  Login here
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
