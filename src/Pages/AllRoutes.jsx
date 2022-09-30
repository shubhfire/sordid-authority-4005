import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../loginPage/Login'
import Register from "../registerPage/Register"
import OTPPage from "../registerPage/OTPPage"
// import Login from '../loginPage/Login'
import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
// import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path='/register' element={<Register/>}/>
        <Route path='/OTPPage' element={<OTPPage/>}/> 
        <Route path='/login' element={<Login/>}/>
        <Route path="/contactUs" element={<ContactUs />} />

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/pricing" element={<Price />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
