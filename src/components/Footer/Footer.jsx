import React from "react";
import './Footer.css';
import footimage from  '../assets/image/footers.png'
import whatsapp from '../assets/image/whatsapp.png';
import x from '../assets/image/twitter.png';
import insta from '../assets/image/instagram.png';
import facebook from '../assets/image/facebook.png'


  const Footer = ()=>{
    return(
         <div className="foot">
         <div className="footer">
          <img src={footimage} alt="logo"/>
          <p class className="slogan">A Path to New Journey</p>
          </div>
          <ul className="us">
            <li>Our Mission</li>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <h5>Stay Connected</h5>
          <div className="contact">
           <img src={whatsapp} alt="whatsapp"/>
           <img src={x} alt="twitter"/>
           <img src={insta} alt="insta"/>
           <img src={facebook} alt="facebook"/>
          </div>
            <div className="copyright">
             <p>copyright@2024.All Rights Reserved</p>
            </div> 
         
        </div>
    )
  }

  export default Footer