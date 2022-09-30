import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
// import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/registerPage/Register"
import OTPPage from '../Pages/registerPage/OTPPage';
import Login from "../Pages/loginPage/Login"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />


        <Route path='/register' element={<Register/>}/>
        <Route path='/OTPPage' element={<OTPPage/>}/> 
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Price />} />

      </Routes>
    </div>
  );
};

export default AllRoutes;
