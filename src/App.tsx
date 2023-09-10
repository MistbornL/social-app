import { useIsAuthenticated } from "react-auth-kit";
import Cookies from "js-cookie";
import { Fragment, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { ForgotPass } from "./pages/ForgotPass";
import Layout from "./components/Layout";
import axios from "axios";

export const App = () => {
  const instance = axios.create({
    baseURL: "https://api.example.com", // Replace with your base URL
    // You can add other default configurations here
  });

  const isAuthenticated = useIsAuthenticated();
  const token = Cookies.get("auth");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      setIsLoading(true);

      // Perform any authentication-related tasks here if needed

      setIsLoading(false);
    }
  }, [isAuthenticated]);

  return (
    <Routes>
      {!isAuthenticated() ? (
        <>
          <Route path="/" element={<SignIn />} />
          <Route path="/recover" element={<ForgotPass />} />
        </>
      ) : (
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      )}

      {isLoading ? (
        <Fragment>Loading...</Fragment>
      ) : (
        <Route path="*" element={<Navigate to={"/"} />} />
      )}
    </Routes>
  );
};
