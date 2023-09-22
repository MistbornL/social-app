import { useIsAuthenticated } from "react-auth-kit";
import Cookies from "js-cookie";
import { Fragment, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { ForgotPass } from "./pages/ForgotPass";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";

export const App = () => {
  const isAuthenticated = useIsAuthenticated();
  const token = Cookies.get("_auth");
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
          <Route path="/register" element={<SignUp />} />
          <Route path="/recover" element={<ForgotPass />} />
        </>
      ) : (
        <Route path="/" element={<Home />} />
      )}

      {isLoading ? (
        <Fragment>Loading...</Fragment>
      ) : (
        <Route path="*" element={<NotFound />} />
      )}
    </Routes>
  );
};