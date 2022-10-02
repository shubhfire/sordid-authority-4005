import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Donate from './Donate'
import SingleDonate from '../Components/Donate/SingleDonate'
import SuccessPayment from './SuccessPayment'
import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/registerPage/Register"
import OTPPage from '../Pages/registerPage/OTPPage';
import Login from "../Pages/loginPage/Login"
// import LendPage from "./LendPage/LendPage"


const AllRoutes = () => {
  return (
    <div>

    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:id" element={<SingleDonate />} />
        <Route path='/contactUs' element={<ContactUs/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/OTPPage' element={<OTPPage/>}/> 
        <Route path="/pricing" element={<Price />} />
        {/* <Route path="/fund" element={<LendPage />} /> */}
        <Route path='/SuccessPayment' element={<SuccessPayment />}/>
    </Routes>
    </div>
  );
};

export default AllRoutes;
