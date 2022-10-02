import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./loginPage/Login";
import OTPPage from "./registerPage/OTPPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";
import Register from "./registerPage/Register";
import LendPage from "./LendPage/LendPage";
import Donate from "./Donate";
import SingleDonate from "../Components/Donate/SingleDonate";
import SuccessPayment from "./SuccessPayment";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:id" element={<SingleDonate />} />

        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SuccessPayment" element={<SuccessPayment />} />
        <Route path="/OTPPage" element={<OTPPage />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/fund" element={<LendPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
