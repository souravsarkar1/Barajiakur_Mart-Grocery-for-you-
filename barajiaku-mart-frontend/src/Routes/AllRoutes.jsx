import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignIn from '../Pages/Authentication/Login'
import SignUp from '../Pages/Authentication/Signup'
import AboutUsPage from '../Pages/About/About'
import ContactFormWithSocialButtons from '../Pages/Contact/Contack'
import ErrorPage from '../ErrorHandeling/ErrorHandeling'
//import Checkout from '../Pages/Checkout/Checkout'
//import PaymentForm from '../Pages/Payment/Payment'

const AllRoutes = () => {
  return (
    <div>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/about' element={<AboutUsPage/>}/>
      <Route path='/contact' element={<ContactFormWithSocialButtons/>}/>
      <Route path='/error' element={<ErrorPage/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
