import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>
                Crafted with passion, this project aims to deliver a seamless and user-friendly experience. 
                Whether you're exploring or indulging, we prioritize simplicity and functionality to enhance your journey. 
                Your feedback is invaluable in helping us improve and grow. Thank you for supporting our vision and being 
                part of this experience!"
                </p>
                <div className="footer-content-left-icons">
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.facebook_icon_icon} alt="" />
                    <img src={assets.linkedin_icon_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 1234567891</li>
                    <li>prathoseraaj0312@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>Copyrights 2024 © prathoseraaj0312@gmail.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer