import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../Home/HomePage'
import ProductsPage from '../Products/ProductsPage'
import SingleProductPage from '../SingleProduct/SingleProductPage'
import SignupPage from '../Authentication/SignupPage'
import LoginPage from '../Authentication/LoginPage'
import CartPage from '../Cart/CartPage'
import MyOrderPage from '../MyOrder/MyOrderPage'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/products' element={<ProductsPage/>}></Route>
        <Route path='/products/1' element={<SingleProductPage/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/cart' element={<CartPage/>}></Route>
        <Route path='/myorders' element={<MyOrderPage/>}></Route>
    </Routes>
  )
}

export default Routing