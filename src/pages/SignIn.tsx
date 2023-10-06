import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormData } from "../models/signInModel";
import { loginSchema } from "../schema/loginSchema";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { useIsAuthenticated } from "react-auth-kit";
import { useSignIn } from "react-auth-kit";

type ApiError = {
  email?: string;
  password?: string;
};
export const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema),
  });
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = useSignIn();
  //   setLoading(true);

  //   try {
  //     const response = await axios.post("/login", data, {
  //       headers: {
  //         "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  //       },
  //     });

  //     const decoded: any = jwtDecode(response.data.token);
  //     // console.log(data);
  //     // const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);

  //     SignIn({
  //       token: response.data.token,
  //       tokenType: "Bearer",
  //       authState: {
  //         userName: decoded.username,
  //       },
  //       // expiresIn: expiresIn,
  //     });
  //   } catch (error: any) {
  //     setLoading(false);

  //     console.log(error);
  //   }
  // };

  const handleSignIn = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post("/auth/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      });

      const decoded: any = jwtDecode(response.data.token);
      // const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
      console.log(decoded);
      signIn({
        token: response.data.token,
        tokenType: "bearer",
        authState: {
          username: decoded.username,
          profileImg: decoded.profileImg,
        },
        expiresIn: 30,
      });
    } catch (error: any) {
      setLoading(false);
      alert(error);
    }
  };

  return (
    <div className=" flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="text-white mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="text-white block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div
              className={`mt-2 ${
                errors.email
                  ? "border-red-500 ring-red-300"
                  : "border-gray-300 ring-gray-300"
              }`}
            >
              <input
                id="email"
                {...register("email")}
                name="email"
                type="email"
                autoComplete="email"
                required
                className={`px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.email ? "ring-1 ring-red-300" : "ring-1 ring-gray-300"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-white block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div
              className={`mt-2 ${
                errors.password
                  ? "border-red-500 ring-red-300"
                  : "border-gray-300 ring-gray-300"
              }`}
            >
              <input
                id="password"
                type="password"
                {...register("password")}
                autoComplete="current-password"
                required
                className={`px-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                  errors.password
                    ? "ring-1 ring-red-300"
                    : "ring-1 ring-gray-300"
                }`}
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-red-500 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {loading ? (
                <div role="status text-center">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-white animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </div>
        </form>

        <p className="text-white mt-10 text-center text-sm ">
          Not a member?
          <Link
            to="/register"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            click here to sign up
          </Link>
        </p>
      </div>
    </div>
  );
};
