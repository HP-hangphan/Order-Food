import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Address from './Address'
import Events from './Events'
import Favourites from './Favourites'
import Orders from './Orders'
import Payments from './Payments'
import ProfileNavigation from './ProfileNavigation'
import UserProfile from './UserProfile'


const Profile = () => {
  return (
    <div className='lg:flex justify-between'>
        <div className='sticky h-[80vh] lg:w-[20%]'>
            <ProfileNavigation/>
        
        </div>
        <div className='lg:w-[80%]'>
        <Routes>
            <Route path= "/" element={<UserProfile/>}></Route>
            <Route path= "/Orders" element={<Orders/>}></Route>
            <Route path= "/Account" element={<UserProfile/>}></Route>
            <Route path= "/address" element={<Address/>}></Route>
            <Route path= "/payments" element={<Payments/>}></Route>
            <Route path= "/favorites" element={<Favourites/>}></Route>
            <Route path= "/events" element={<Events/>}></Route>
        </Routes>
        </div>
    
    </div>
  )
}

export default Profile