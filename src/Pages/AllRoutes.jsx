import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../loginPage/Login";
// import Login from '../loginPage/Login'
import Register from "../registerPage/Register";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
// import Price from "./Pricing/Price";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}/>
        {/* <Route path="/donate" element={<Donate/>}/> */}
        {/* <Route path="/donate" element={<SingleDonate/>}/> */}
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pricing" element={<Price />} />

        {/* <Route path='/contactUs' element={<ContactUs/>}/> */}
        {/* <Route path='/SuccessPayment' element={<SuccessPayment/>}/> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
