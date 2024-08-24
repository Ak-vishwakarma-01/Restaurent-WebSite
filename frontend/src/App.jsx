import React, { useEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'

const App = () => {

  useEffect(()=>{
    alert("this project is on working mode");
  },[])
  
  return (
    <div className='app'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
  )
}

export default App
