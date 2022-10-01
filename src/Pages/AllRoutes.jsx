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
