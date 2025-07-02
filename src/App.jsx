import React from 'react'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AllRooms from './pages/Allrooms';
import { Routes,Route } from 'react-router-dom';
import RoomDetails from './pages/RoomDetails';
import Footer from './components/Footer';
import MyBooking from './pages/MyBooking';
import HotelReg from './components/HotelReg';

const App=()=>{
  const isOwnerPath =  useLocation().pathname.includes("owner");
  return(
    <div className='flex flex-col min-h-screen'>
      <HotelReg />
      {!isOwnerPath && <Navbar />}
      <div className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          <Route path='/rooms/:id' element={<RoomDetails/>} />    
          <Route path='/my-bookings' element={<MyBooking/>} />    
           

          
        </Routes>
        {!isOwnerPath && <Footer />}

      </div>
    </div>
  )
  
}

export default App;