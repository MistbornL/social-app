import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormData } from "../models/signInModel";
import { loginSchema } from "../schema/loginSchema";
import axios from "axios";
import jwtDecode from "jwt-decode";

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
  const [apiErrors, setApiErrors] = useState<ApiError>({
    email: "",
    password: "",
  });

  const handleSignIn = async (data: FormData) => {
    setLoading(true);

    try {
      const response = await axios.post("/login", data, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
      });

      const decoded: any = jwtDecode(response.data.access_token);
      console.log(data);
      const expiresIn = decoded.exp - Math.floor(Date.now() / 1000);
      SignIn({
        token: response.data.access_token,
        tokenType: response.data.token_type,
        authState: {
          email: data.email,
        },
        expiresIn: expiresIn,
      });
    } catch (error: any) {
      setLoading(false);
      if (error.response) {
        if (error.response.status == 403) {
          setApiErrors(error.response.data.detail);
        }
      } else if (error.request) {
        alert("Request failed. Please try again later.");
      } else {
        alert("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
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
                className="block text-sm font-medium leading-6 text-gray-900"
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
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            click here to sign up
          </a>
        </p>
      </div>
    </div>
  );
};
