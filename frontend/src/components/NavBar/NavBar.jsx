import React, { useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
const NavBar = () => {
 
    const [menu,setMenu] = useState("home");
    function lichange(event){
        setMenu(event.target.textContent);
    }

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />
        <ul className="navbar-menu">
            <li onClick={lichange} className={menu==="home"?"active":""}>home</li>
            <li onClick={lichange} className={menu==="menu"?"active":""}>menu</li>
            <li onClick={lichange} className={menu==="mobile-app"?"active":""}>mobile-app</li>
            <li onClick={lichange} className={menu==="contact-us"?"active":""}>contact-us</li>
        </ul>
        <button className='icon'><i class="ri-menu-3-fill"></i></button>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="varbar-search-icon">
                <div className="dot"></div>
                <img src={assets.basket_icon}></img>
            </div>
           <button className="sign-in">Sign In</button>
        </div>
    </div>
  )
}

export default NavBar