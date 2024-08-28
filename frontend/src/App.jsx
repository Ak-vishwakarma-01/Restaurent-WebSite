import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import { PlaceOrder } from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LogInPopUp from './components/LoginPopUp/LogInPopUp'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  useEffect(()=>{
    alert("this project is on working mode");
  },[])
  
  return (
    <>
    {showLogin?<LogInPopUp setShowLogin={setShowLogin }/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
