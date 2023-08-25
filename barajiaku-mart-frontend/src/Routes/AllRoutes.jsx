import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import SignIn from '../Pages/Authentication/Login'
import SignUp from '../Pages/Authentication/Signup'
import AboutUsPage from '../Pages/About/About'
import ContactFormWithSocialButtons from '../Pages/Contact/Contack'
import ErrorPage from '../ErrorHandeling/ErrorHandeling'
import Products from '../Pages/Products/Products'
import ProductForm from '../Pages/Products/AddProducts'
import SellerHome from '../Pages/Seller/SellerHome'
import MyProduct from '../Pages/Seller/MyProduct'
import SellerLogin from '../Pages/SellerAuthentication/Login'
import SellerSignUp from '../Pages/SellerAuthentication/Signup'
import { SellerPrivateRoute } from './SellerPrivateRoute'
import SingleProductPage from '../Pages/Products/SingleProductPage'
import Multistep from '../Pages/Payment/Payment'
import Checkout from '../Pages/Cart/Checkout'
//import Checkout from '../Pages/Cart/Checkout'
//import Checkout from '../Pages/Checkout/Checkout'
//import PaymentForm from '../Pages/Payment/Payment'
//import SignUp as Seller from '../Pages/SellerAuthentication/Signup'
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
      <Route path='/product' element={<Products/>}/>
      <Route path='/product/:id' element = {<SingleProductPage/>}/>
      <Route path='/adddata' element={<SellerPrivateRoute><ProductForm/></SellerPrivateRoute>}/>
      <Route path='/seller' element={<SellerHome/>}/>
      <Route path='/myproducts' element={<SellerPrivateRoute><MyProduct/></SellerPrivateRoute>}/>
      <Route path='/seller/login' element={<SellerLogin/>}/>
      <Route path='/seller/signup' element={<SellerSignUp/>}/>
      <Route path='/payment' element={<Multistep/>}/>
      <Route path='/cart' element={<Checkout/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
