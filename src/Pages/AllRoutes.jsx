import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../loginPage/Login'


const AllRoutes = () => {
  return (
    <div>
    <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        {/* <Route path="/donate" element={<Donate/>}/> */}
        {/* <Route path="/donate" element={<SingleDonate/>}/> */}
        {/* <Route path='/contactUs' element={<ContactUs/>}/>

        <Route path='/register' element={<Register/>}/>
        <Route path='/OTPPage' element={<OTPPage/>}/> */}
        <Route path='/login' element={<Login/>}/>

        {/* <Route path='/pricing' element={<Pricing/>}/> */}

        {/* <Route path='/contactUs' element={<ContactUs/>}/> */}
        {/* <Route path='/SuccessPayment' element={<SuccessPayment/>}/> */}
    </Routes>

    </div>
  )
}

export default AllRoutes