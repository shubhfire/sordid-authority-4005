<<<<<<< HEAD
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
=======
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// import Login from '../loginPage/Login'
// import Login from '../loginPage/Login'
// import Register from '../registerPage/Register'


// import LendPage from './LendPage'


import ContactUs from '../Pages/ContactUs/ContactUs'



// import HomePage from '../Pages/HomePage'
import Donate from './Donate'
import SingleDonate from '../Components/Donate/SingleDonate'
import SuccessPayment from './SuccessPayment'




// import ContactUs from "../Pages/ContactUs/ContactUs";
import Price from "./Pricing/Price";
// import Price from "./Pricing/Price";
import HomePage from "../Pages/HomePage";
import Register from "../Pages/registerPage/Register"
import OTPPage from '../Pages/registerPage/OTPPage';
import Login from "../Pages/loginPage/Login"

>>>>>>> eddef9c7a21efb7b912900c7910c5d37271db6d3

const AllRoutes = () => {
  return (
    <div>

    <Routes>

        {/* <Route path="/" element={<HomePage/>}/> */}


        <Route path="/" element={<HomePage/>}/>
        <Route path="/donate" element={<Donate />} />
        <Route path="/donate/:id" element={<SingleDonate />} />

        <Route path='/contactUs' element={<ContactUs/>}/>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* <Route path='/pricing' element={<Pricing/>}/> */}

        {/* <Route path='/contactUs' element={<ContactUs/>}/> */}
        <Route path='/SuccessPayment' element={<SuccessPayment />}/>
    </Routes>

      <Routes>
        <Route path="/" element={<HomePage />} />

<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
        <Route path="/OTPPage" element={<OTPPage />} />
        <Route path="/login" element={<Login />} />
=======

        <Route path='/register' element={<Register/>}/>
        <Route path='/OTPPage' element={<OTPPage/>}/> 
>>>>>>> eddef9c7a21efb7b912900c7910c5d37271db6d3
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricing" element={<Price />} />
<<<<<<< HEAD
        <Route path="/fund" element={<LendPage />} />
=======


>>>>>>> eddef9c7a21efb7b912900c7910c5d37271db6d3
      </Routes>
    </div>
  );
};

export default AllRoutes;
