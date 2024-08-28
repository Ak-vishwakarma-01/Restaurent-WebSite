import React, { useContext, useState } from 'react'
import './NavBar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
import { StoreContext } from '../../Context/StroeContext';
const NavBar = ({setShowLogin}) => {
 
    const [menu,setMenu] = useState("home");
    function lichange(event){
        setMenu(event.target.textContent);
    }

   const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'> 
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={lichange} className={menu==="home"?"active":""}>home</Link>
            <a href='#explore-menu' onClick={lichange} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={lichange} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={lichange} className={menu==="contact-us"?"active":""}>contact-us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />
            <div className="varbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon}></img></Link>
                <div className={getTotalCartAmount()===0?"":'dot'}></div>
            </div>
           <button onClick={()=>setShowLogin(true)} className="sign-in">Sign In</button>
        </div>
    </div>
  )
}

export default NavBar