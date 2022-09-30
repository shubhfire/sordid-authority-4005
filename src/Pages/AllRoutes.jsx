import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../loginPage/Login'
// import Login from '../loginPage/Login'
import Register from '../registerPage/Register'
<<<<<<< HEAD
import Donate from './Donate/Donate'

import LendPage from './LendPage'

=======
import ContactUs from '../Pages/ContactUs/ContactUs'
>>>>>>> 80a1ef4f45db3681b0982ef09d53458e22b07031

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        {/* <Route path="/" element={<HomePage/>}/> */}
        <Route path="/donate" element={<Donate />}/>
        {/* <Route path="/donate" element={<SingleDonate/>}/> */}
        <Route path='/contactUs' element={<ContactUs/>}/>

        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>

        {/* <Route path='/pricing' element={<Pricing/>}/> */}

        {/* <Route path='/contactUs' element={<ContactUs/>}/> */}
        {/* <Route path='/SuccessPayment' element={<SuccessPayment/>}/> */}
    </Routes>

    </div>
  )
}

export default AllRoutes