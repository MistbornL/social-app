import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </div>
  );
};
