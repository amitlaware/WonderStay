import React from 'react'
import Navbar from './components/Navbar';
import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import AllRooms from './pages/Allrooms';
import { Routes,Route } from 'react-router-dom';

const App=()=>{
  const isOwnerPath =  useLocation().pathname.includes("owner");
  return(
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/rooms' element={<AllRooms/>} />
          
          
        </Routes>

      </div>
    </div>
  )
  
}

export default App;