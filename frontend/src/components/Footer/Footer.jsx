import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logv} alt="" />
                <p>Delight Foods brings to you a collection of carefully selected foods from India. In our passionate search to offer food that is unique and full of flavor, we have ensured you get only the best and most authentic regional food products.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="#" />
                    <img src={assets.twitter_icon} alt="#" />
                    <img src={assets.linkedin_icon} alt="https://www.linkedin.com/in/kolliseti-seetaram-kumar-b37382247/" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-8179758508</li>
                    <li>2100030264cseh@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Delight Foods.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer