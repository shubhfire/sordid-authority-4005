import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login";
import OTPPage from "./registerPage/OTPPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
// import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";
import Register from "./registerPage/Register";
import LendPage from "./LendPage/LendPage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/register" element={<Register />} />
        <Route path="/OTPPage" element={<OTPPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pricing" element={<Price />} />
        <Route path="/fund" element={<LendPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
