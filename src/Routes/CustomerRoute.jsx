import React from 'react'
import { Navbar } from '../component/navbar/Navbar';
import { Routes, Route } from 'react-router-dom'
import RestaurantDetail from '../component/Restaurant/RestaurantDetail';
import Cart from '../component/Cart/Cart';
import Home from '../component/Home/Home';
import Profile from '../component/profile/Profile';
import RegisterForm from '../component/Auth/RegisterForm';
import Auth from '../component/Auth/Auth';

const CustomerRoute = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
            <Route path="/" element ={<Home/>}></Route>
            <Route path="/account/:register" element ={<Home/>}></Route>
            <Route path="/restaurant/:city/:title/:id" element ={<RestaurantDetail/>}></Route>
            <Route path="/cart" element ={<Cart/>}></Route>
            <Route path="/my-profile/*" element ={<Profile/>}></Route>
        </Routes>
        <Auth/>
     
    </div>
  )
}

export default CustomerRoute
