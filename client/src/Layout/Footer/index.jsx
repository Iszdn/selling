import React from 'react'
import "./index.scss"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id='footer'>
<div className="container">
  <div className="row">
    <div className="col-lg-3 col-md-12 col-12"><h4>ABOUT US</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis aliquam.</p></div>
    <div className="col-lg-3 col-md-12 col-12"><h4>QUICK LINKS</h4>
    <ul>
      <li>About Us</li>
      <li>Services</li>
      <li>Testimonials</li>
      <li>Contact Us</li>
    </ul></div>
    <div className="col-lg-3 col-md-12 col-12"><h4>FOLLOW US</h4>
    <div className="sosials">
    <FaFacebookF />
    <FaTwitter />
    <FaInstagram />
    <FaLinkedinIn />
      </div></div>
    <div className="col-lg-3 col-md-12 col-12 shoe"><h4>FEATURED PRODUCT</h4>
    <div className="image">
      <img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" />
      </div>
      <h5>Leather Brown Shoe</h5>
      <p>$60.00</p>
      <div className="button">
        ADD TO CART
      </div>
    </div>
    
  </div>
</div>
    </footer>
  )
}

export default Footer