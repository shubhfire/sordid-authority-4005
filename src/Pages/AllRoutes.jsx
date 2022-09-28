import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './ContactUs'
import Donate from './Donate'
import HomePage from './HomePage'
import LendPage from './LendPage'
import Login from './Login'
import Pricing from './Pricing'
import SignUp from './SignUp'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/donate" element={<Donate/>}/>
        {/* <Route path="/donate" element={<SingleDonate/>}/> */}
        <Route path='/fund' element={<LendPage/>}/>

        <Route path='/register' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>

        <Route path='/pricing' element={<Pricing/>}/>

        <Route path='/contactUs' element={<ContactUs/>}/>
        {/* <Route path='/SuccessPayment' element={<SuccessPayment/>}/> */}
    </Routes>

    </div>
  )
}

export default AllRoutes