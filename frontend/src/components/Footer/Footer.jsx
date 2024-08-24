import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">    
            <div className="footer-content-left">
                <img src={assets.logo} atl=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facilis odit eum vitae natus possimus!</p>
                <div className="footer-social-icons">
                    <img className='icon' src={assets.facebook_icon} atl=""/>
                    <img className='icon' src={assets.twitter_icon} atl=""/>
                    <img className='icon' src={assets.linkedin_icon} atl=""/>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+230-543-22345-765</li>
                    <li>contact@resto.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 @ resto.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer